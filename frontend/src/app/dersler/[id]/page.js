"use client";

import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { use, useState, useEffect } from "react";
import { lessonService } from "@/services/lessonService";
import { userCourseService } from "@/services/userCourseService";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import LessonComplete from "@/components/lessons/LessonComplete";
import ChoiceCard from "@/components/lessons/ChoiceCard";
import LessonContent from "@/components/lessons/LessonContent";
import LessonHeader from "@/components/lessons/LessonHeader";

// Import all icons
import boyIcon from "@/assets/icons/boy.svg";
import girlIcon from "@/assets/icons/girl.svg";
import manIcon from "@/assets/icons/man.svg";
import robotIcon from "@/assets/icons/robot.svg";
import womanIcon from "@/assets/icons/woman.svg";
import zombieIcon from "@/assets/icons/zombie.svg";

const ICONS = [boyIcon, girlIcon, manIcon, robotIcon, womanIcon, zombieIcon];

const Lesson = ({ params }) => {
  const { id } = use(params);
  const [isTrue, setIsTrue] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const fetchLesson = async () => {
      try {
        const response = await lessonService.getLesson(id);
        setLesson(response.data);
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id]);

  if (loading || !lesson) {
    return <Loader />;
  }

  const startTest = () => {
    setStep(step + 1);
  };

  const nextQuestion = async () => {
    if (answer === null) {
      toast.error("Lütfen bir cevap seçin.");
      return;
    }

    if (answer === lesson.questions[step - 1].correct_choice) {
      toast.success("Doğru cevap!");
      setIsTrue(true);
      await userCourseService.updateUserCourse(lesson.section.course_id, {
        score: 1,
        reached_lesson: step === lesson.questions.length ? 1 : 0,
      });
      setTimeout(() => {
        setStep(step + 1);
        setAnswer(null);
        setIsTrue(null);
      }, 2000);
    } else {
      toast.error("Yanlış cevap! Lütfen tekrar deneyin.");
      setIsTrue(false);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen bg-purplish-black">
        <Container>
          <AnimatePresence mode="wait">
            {step === lesson.questions.length + 1 ? (
              <LessonComplete
                onReturn={() =>
                  router.push("/kurslar/" + lesson.section.course_id)
                }
              />
            ) : (
              <div className="py-12 flex flex-col gap-7">
                <LessonHeader
                  progress={(step * 100) / (lesson.questions.length + 1)}
                  courseId={lesson.section.course_id}
                />

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-2xl lg:text-3xl text-white font-semibold md:px-14 lg:px-28"
                >
                  {step === 0 ? lesson.name : lesson.questions[step - 1].value}
                </motion.h2>

                <AnimatePresence mode="wait">
                  {step > 0 ? (
                    <motion.div
                      key="questions"
                      className="md:px-14 lg:px-28 grid grid-cols-2 md:grid-cols-4 gap-3"
                    >
                      {lesson.questions[step - 1].choices.map(
                        (choice, index) => (
                          <ChoiceCard
                            key={index}
                            choice={choice}
                            index={index}
                            icon={ICONS[index % ICONS.length]}
                            selected={answer === index}
                            isTrue={isTrue}
                            onClick={() => setAnswer(index)}
                            delay={index}
                          />
                        )
                      )}
                    </motion.div>
                  ) : (
                    <LessonContent
                      key="content"
                      videoUrl={lesson.video_url}
                      description={lesson.description}
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="md:px-14 lg:px-28 text-center"
                >
                  <Button
                    onClick={step === 0 ? startTest : nextQuestion}
                    className="py-4 px-8 w-full md:w-max"
                    isSubmitting={step !== 0 && answer === null}
                  >
                    {step === 0 ? "Test'i başla" : "Cevabı Kontrol Et"}
                  </Button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Lesson;
