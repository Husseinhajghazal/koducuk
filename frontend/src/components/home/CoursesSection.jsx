"use client";

import { useState, useEffect } from "react";
import Container from "../layout/Container";
import CourseCard from "../ui/CourseCard";
import SectionHeader from "../ui/SectionHeader";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { courseService } from "@/services/courseService";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import axios from "axios";

const CoursesSection = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL}/api/course/active`
        );

        setCourses(data.data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        toast.error("Kurslar yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    if (!isAuthenticated) {
      router.push("/giris");
      return;
    }

    try {
      const response = await courseService.enrollCourse(courseId);
      if (response.success) {
        if (response.alreadyEnrolled || response.data) {
          router.push(`/kurslar/${courseId}`);
          if (!response.alreadyEnrolled) {
            toast.success(response.message);
          }
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="bg-purplish-black py-20">
      <Container>
        <div>
          <SectionHeader
            eyebrow="Kurslarımız"
            link="Tüm kurslar"
            title="Seviye atlamak için kurslar"
            href="/kurslar"
          />
        </div>
      </Container>

      {loading ? (
        <div className="flex justify-center mt-20">
          <div className="w-8 h-8 border-4 border-ai-purple border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="pt-20 pb-10 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {" "}
            {[...courses, ...courses].map((course, index) => (
              <CourseCard
                key={course.id + index}
                {...course}
                onEnroll={handleEnroll}
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CoursesSection;
