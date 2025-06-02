"use client";

import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import React, { use, useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/animations/success.json";
import ProgressBar from "@/components/lessons/ProgressBar";
import boyIcon from "@/assets/icons/boy.svg";
import girlIcon from "@/assets/icons/girl.svg";
import logoShortIcon from "@/assets/icons/logo-short.svg";
import manIcon from "@/assets/icons/man.svg";
import robotIcon from "@/assets/icons/robot.svg";
import womanIcon from "@/assets/icons/woman.svg";
import zombieIcon from "@/assets/icons/zombie.svg";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { lessonService } from "@/services/lessonService";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
import { userCourseService } from "@/services/userCourseService";

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

        console.log("Lesson data:", response.data);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id, router]);

  if (loading || !lesson) {
    return <Loader />;
  }

  function startTest() {
    setStep(step + 1);
  }

  async function nextQuestion() {
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
      }, 2000);
    } else {
      toast.error("Yanlış cevap! Lütfen tekrar deneyin.");
      setIsTrue(false);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen bg-purplish-black">
        <Container>
          {step === lesson.questions.length + 1 ? (
            <div className="py-12 flex items-center justify-center flex-col gap-10">
              <div className="h-44 w-44 text-center">
                <DotLottieReact
                  data={successAnimation}
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
              <p className="text-xl font-semibold text-white">
                Başarıyla dersi tamamladınız!
              </p>
              <Button
                onClick={() =>
                  router.push("/kurslar/" + lesson.section.course_id)
                }
                className="py-4 px-8 w-full md:w-max"
              >
                Kursa Dön
              </Button>
            </div>
          ) : (
            <div className="py-12 flex flex-col gap-7">
              <div className="flex items-center gap-5">
                <ProgressBar
                  percentage={(step * 100) / (lesson.questions.length + 1)}
                />
                <Link
                  href={"/kurslar/" + lesson.section.course_id}
                  className="text-kc-gray hover:text-white hover:bg-kc-gray/20 rounded-full p-1.5 duration-300"
                >
                  <IoClose size={25} />
                </Link>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold md:px-14 lg:px-28">
                {step === 0 ? lesson.name : lesson.questions[step - 1].value}
              </h2>
              {step > 0 && (
                <div className="md:px-14 lg:px-28 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {lesson.questions[step - 1].choices.map((choice, index) => (
                    <div
                      key={index}
                      className={twMerge(
                        "flex flex-col items-center justify-center gap-5 bg-ai-purple/30 border-ai-purple border-2 p-5 rounded-lg cursor-pointer hover:bg-orange-400/40 hover:border-orange-400  duration-300",
                        answer === index &&
                          "bg-orange-400/40 border-orange-400 hover:bg-orange-400/40 hover:border-orange-400",
                        answer === index &&
                          isTrue === true &&
                          "bg-green-400/40 border-green-400 hover:bg-green-400/40 hover:border-green-400",
                        answer === index &&
                          isTrue === false &&
                          "bg-red-400/40 border-red-400 hover:bg-red-400/40 hover:border-red-400"
                      )}
                      onClick={() => setAnswer(index)}
                    >
                      <Image
                        src={boyIcon}
                        width={100}
                        height={100}
                        alt="icon"
                      />
                      <p className="text-xl text-white font-medium">{choice}</p>
                    </div>
                  ))}
                </div>
              )}
              {step === 0 && (
                <React.Fragment>
                  <div className="md:px-14 lg:px-28">
                    <iframe
                      width="100%"
                      height="300"
                      src={lesson.video_url}
                      allowFullScreen
                    />
                  </div>
                  <div className="md:px-14 lg:px-28 text-kc-gray">
                    {lesson.description}
                  </div>
                </React.Fragment>
              )}
              <div className="md:px-14 lg:px-28 text-center">
                <Button
                  onClick={step === 0 ? startTest : nextQuestion}
                  className="py-4 px-8 w-full md:w-max"
                  isSubmitting={step !== 0 && answer === null}
                >
                  {step === 0 ? "Test'i başla" : "Cevabı Kontrol Et"}
                </Button>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Lesson;
