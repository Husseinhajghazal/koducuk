import { motion } from "framer-motion";

export default function SectionHeader({ sectionIndex, name }) {
  return (
    <div className="bg-ai-purple p-6 rounded-2xl flex items-center justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5 text-white font-bold text-4xl">
          <h3>Bölüm</h3>
          <span>{sectionIndex + 1}</span>
        </div>
        <h2 className="text-xl text-white">{name}</h2>
      </div>
    </div>
  );
}
