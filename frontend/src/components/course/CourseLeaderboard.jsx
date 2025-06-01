import { motion } from "framer-motion";
import Image from "next/image";
import leaderboardHeroIcon from "@/assets/icons/leaderboard-hero.svg";
import ProfilePicture from "@/components/ui/ProfilePicture";
import { twMerge } from "tailwind-merge";

export default function CourseLeaderboard({ userCourses, currentUserId }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="overflow-hidden sticky top-20"
    >
      <div className="bg-black-700 rounded-2xl p-6">
        <Image
          src={leaderboardHeroIcon}
          alt="Leaderboard Hero"
          width={200}
          height={200}
          className="mx-auto"
        />
        <h2 className="text-xl font-bold text-white text-center mt-4">
          Liderlik tablosu
        </h2>
        <p className="text-white/60 text-center text-sm mt-2">
          Topluluktaki diğer öğrenciler arasında nerede durduğunuzu bilin.
        </p>
      </div>
      <div className="p-4">
        {userCourses.map((userCourse, index) => (
          <motion.div
            key={userCourse.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={twMerge(
              "flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer hover:outline-ai-purple hover:outline-2 duration-300",
              index === 0 && "bg-ai-purple/15",
              index === 1 && "bg-ai-purple/10",
              index === 2 && "bg-ai-purple/5",
              userCourse.user_id === currentUserId && "bg-black-700"
            )}
          >
            <div className="w-6 text-ai-purple font-bold">{index + 1}</div>
            <div className="flex-shrink-0">
              <ProfilePicture
                firstName={userCourse.user.first_name}
                lastName={userCourse.user.last_name}
                size="sm"
              />
            </div>
            <div className="flex-grow">
              <p className="text-white font-medium">
                {userCourse.user.first_name} {userCourse.user.last_name}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-ai-purple font-bold">
                {userCourse.score}
              </span>
              <span className="text-xs text-kc-gray">puan</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
