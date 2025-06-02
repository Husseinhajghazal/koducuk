"use client";

import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import CourseCard from "@/components/ui/CourseCard";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { userCourseService } from "@/services/userCourseService";
import { courseService } from "@/services/courseService";
import { motion, AnimatePresence } from "framer-motion";
import { useDebounce } from "@/hooks/useDebounce";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const debouncedSearch = useDebounce(searchQuery, 300);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      const response = await courseService.getActiveCourses(
        currentPage,
        itemsPerPage,
        debouncedSearch,
        sortOrder
      );
      setCourses(response.data);
      setTotalPages(response.pagination.totalPages);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }, [currentPage, debouncedSearch, sortOrder]);

  // Reset to first page when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortOrder]);

  // Fetch courses when dependencies change
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

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
  // Search and sort is now handled by the backend
  const filteredAndSortedCourses = courses;

  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen bg-purplish-black py-12">
        <Container>
          <div className="space-y-6">
            <div className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <h1 className="text-3xl font-bold text-white mb-2">Kurslar</h1>
              <p className="text-white/70 mb-6">
                Seviyenize uygun kursları keşfedin ve öğrenmeye başlayın.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-96">
                  <Input
                    type="text"
                    placeholder="Kurs ara..."
                    value={searchQuery}
                    handleChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <motion.div className="flex gap-4" whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() =>
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }
                    className="px-6 py-3 rounded-lg bg-black/40 border border-white/10 text-white hover:border-primary/50 transition-colors flex items-center gap-2 relative overflow-hidden"
                  >
                    <span>Sırala:</span>
                    <motion.div
                      key={sortOrder}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {sortOrder === "asc" ? "A-Z" : "Z-A"}
                    </motion.div>
                  </button>
                </motion.div>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="w-8 h-8 border-4 border-ai-purple border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredAndSortedCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          opacity: { duration: 0.3 },
                          layout: { duration: 0.3 },
                          scale: { duration: 0.3 },
                        }}
                      >
                        <CourseCard {...course} onEnroll={handleEnroll} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
                <AnimatePresence>
                  {filteredAndSortedCourses.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-black/40 rounded-2xl p-12 backdrop-blur-sm border border-white/10 text-center"
                    >
                      <p className="text-white/70 text-lg">Kurs bulunamadı</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-6 bg-black/40 rounded-xl p-4 backdrop-blur-sm border border-white/10 w-fit mx-auto">
                    {currentPage > 1 && (
                      <button
                        onClick={() => setCurrentPage((curr) => curr - 1)}
                        className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white hover:border-primary/50 transition-colors"
                      >
                        Önceki
                      </button>
                    )}

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-10 h-10 rounded-lg ${
                          currentPage === index + 1
                            ? "bg-primary text-white"
                            : "bg-black/40 border border-white/10 text-white hover:border-primary/50"
                        } transition-colors`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    {currentPage < totalPages && (
                      <button
                        onClick={() => setCurrentPage((curr) => curr + 1)}
                        className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white hover:border-primary/50 transition-colors"
                      >
                        Sonraki
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default CoursesPage;
