"use client";

import Container from "../layout/Container";
import CourseCard from "../ui/CourseCard";
import SectionHeader from "../ui/SectionHeader";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { userCourseService } from "@/services/userCourseService";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const CoursesSection = ({ courses = [] }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleEnroll = async (courseId) => {
    if (!isAuthenticated) {
      router.push("/giris");
      return;
    }

    try {
      const response = await userCourseService.enrollCourse(courseId);
      toast.success(response.message);
      router.push(`/kurslar/${courseId}`);
    } catch (error) {
      toast.error(error.response.data.message);
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
      <div className="pt-20 pb-10 overflow-hidden">
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * courses.length],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {/* First set of courses */}
            {courses.map((course, index) => (
              <motion.div
                key={`first-${course.id}`}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard {...course} onEnroll={handleEnroll} />
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {courses.map((course, index) => (
              <motion.div
                key={`second-${course.id}`}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard {...course} onEnroll={handleEnroll} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
