import Link from "next/link";
import Image from "next/image";
import arrowLeftIcon from "@/assets/icons/arrow-left.svg";
import Container from "@/components/layout/Container";

export default function CourseHeader({ courseName }) {
  return (
    <Container>
      <div className="py-6 flex items-center gap-2 text-white/60">
        <Link
          href="/kurslar"
          className="hover:text-white hover:bg-kc-gray/20 rounded-full p-1.5 duration-300"
        >
          <Image src={arrowLeftIcon} alt="arrow" width={25} height={25} />
        </Link>
        <h3 className="text-3xl font-bold text-white flex-1 text-center">
          {courseName}
        </h3>
      </div>
    </Container>
  );
}
