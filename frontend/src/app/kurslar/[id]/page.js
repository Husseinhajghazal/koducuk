"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";
import { courseService } from "@/services/courseService";
import CourseHeader from "@/components/course/CourseHeader";
import LessonItem from "@/components/course/LessonItem";
import SectionHeader from "@/components/course/SectionHeader";
import CourseLeaderboard from "@/components/course/CourseLeaderboard";

export default function CoursePage({ params }) {
  const { id } = use(params);
  const [course, setCourse] = useState();
  const [reached_Lesson, setReached_Lesson] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();
  const starOffsets = [0, -40, -80, -40, 0];

  const getLessonTotalIndex = (sectionIndex, lessonIndex) => {
    if (!course?.sections) return 0;

    let totalIndex = 0;
    for (let i = 0; i < sectionIndex; i++) {
      totalIndex += course.sections[i].lessons.length;
    }
    return totalIndex + lessonIndex;
  };

  useEffect(() => {
    if (!user) {
      router.push("/giris");
      return;
    }

    setLoading(true);
    const fetchCourse = async () => {
      try {
        const response = await courseService.getCourse(id);
        if (!response?.data) {
          toast.error("Kurs bulunamadı");
          return;
        }

        setCourse(response.data);

        const userCourse = response.data.user_courses?.find(
          (userCourse) => userCourse.user?.id === user.id
        );

        if (userCourse) {
          setReached_Lesson(userCourse.reached_Lesson);
        } else {
          setReached_Lesson(0);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, user, router]);

  const navigateToLesson = (sectionIndex, lessonIndex) => {
    const totalLessonIndex = getLessonTotalIndex(sectionIndex, lessonIndex);
    if (totalLessonIndex <= reached_Lesson) {
      router.push(
        `/dersler/${course.sections[sectionIndex].lessons[lessonIndex].id}`
      );
    } else {
      toast.error("Bu derse erişim izniniz yok.");
    }
  };

  if (loading || !course) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen bg-purplish-black divide-kc-gray divide-y">
        <CourseHeader courseName={course.name} />
        <Container>
          <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Course Sections */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {course.sections.map(({ id, name, lessons }, sectionIndex) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: sectionIndex * 0.1 }}
                    className="mb-6"
                  >
                    <SectionHeader sectionIndex={sectionIndex} name={name} />
                    <div className="py-12 flex justify-center flex-col items-center gap-10">
                      {lessons.map(({ id, index }) => (
                        <LessonItem
                          key={id}
                          id={id}
                          index={index}
                          sectionIndex={sectionIndex}
                          totalLessonIndex={getLessonTotalIndex(
                            sectionIndex,
                            index
                          )}
                          reached_Lesson={reached_Lesson}
                          starOffset={starOffsets[index % starOffsets.length]}
                          onClick={() => navigateToLesson(sectionIndex, index)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Leaderboard */}
            <div className="lg:col-span-1">
              <CourseLeaderboard
                userCourses={course.user_courses}
                currentUserId={user.id}
              />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
