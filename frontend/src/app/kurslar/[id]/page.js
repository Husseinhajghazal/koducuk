"use client";

import { useState, useEffect, use } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProfilePicture from "@/components/ui/ProfilePicture";
import { useAuth } from "@/hooks/useAuth";
import { useRouter, useParams } from "next/navigation";
import Head from "next/head";

// Kid-friendly icons for lessons (you can add more)
const LESSON_ICONS = [
  "⭐",
  "🚀",
  "🌟",
  "🎮",
  "🎨",
  "🎯",
  "🎪",
  "🎸",
  "🦁",
  "🐯",
  "🐶",
  "🦊",
  "🦄",
  "🐠",
  "🦋",
  "🌈",
];

const CoursePage = ({ params }) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { id } = use(params);
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  // Check authentication first
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/giris");
    } else {
      setCheckingAuth(false);
    }
  }, [isAuthenticated, router]);

  // Update page metadata when course data is available
  useEffect(() => {
    const fetchCourse = async () => {
      if (checkingAuth) return;

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/giris");
          return;
        }

        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL}/api/course/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCourse(data.data[0]);
      } catch (error) {
        if (error.response?.status === 401) {
          router.push("/giris");
        } else {
          console.log(error);
          toast.error("Kurs yüklenirken bir hata oluştu");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [checkingAuth, id, router]);
  if (checkingAuth || loading) {
    return (
      <>
        <Head>
          <title>Yükleniyor... | Koducuk</title>
        </Head>
        <Header />
        <main className="min-h-screen bg-purplish-black py-12">
          <Container>
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-ai-purple border-t-transparent rounded-full animate-spin"></div>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  if (!isAuthenticated) {
    router.push("/giris");
    return null;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-purplish-black">
        {/* Hero Section */}
        <div
          className="h-[40vh] relative overflow-hidden"
          style={{
            backgroundImage: `url(${course.image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-purplish-black to-transparent" />
          <Container className="relative h-full flex items-end pb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              {course.name}
            </motion.h1>
          </Container>
        </div>

        <Container className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence mode="wait">
                {course.sections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: sectionIndex * 0.1 }}
                    className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      {section.name}
                    </h2>
                    <div className="relative">
                      <div className="absolute w-1 bg-primary/20 h-full left-6 rounded-full" />
                      <div className="space-y-6">
                        {section.lessons.map((lesson, index) => (
                          <motion.div
                            key={lesson.id}
                            className="relative flex items-center"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: sectionIndex * 0.1 + index * 0.05,
                            }}
                          >
                            <motion.div
                              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {lesson.index}
                            </motion.div>
                            <motion.div
                              className="absolute -top-3 left-8 text-2xl"
                              initial={{ rotate: 0 }}
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {LESSON_ICONS[index % LESSON_ICONS.length]}
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Leaderboard */}
            {/* <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10 sticky top-4"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Liderlik Tablosu
                </h2>
                <div className="space-y-4">
                  {course.user_courses
                    .sort((a, b) => b.score - a.score)
                    .map((userCourse, index) => (
                      <motion.div
                        key={userCourse.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-4 p-3 rounded-xl ${
                          user?.id === userCourse.user.id
                            ? "bg-primary/20 border border-primary/30"
                            : "bg-black/20 border border-white/5"
                        }`}
                      >
                        <div className="flex-shrink-0">
                          <ProfilePicture
                            firstName={userCourse.user.first_name}
                            lastName={userCourse.user.last_name}
                            size="sm"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-white font-medium">
                            {userCourse.user.first_name}{" "}
                            {userCourse.user.last_name}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-primary font-bold">
                            {userCourse.score}
                          </span>
                          <span className="text-xs text-white/50">puan</span>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div> */}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default CoursePage;
