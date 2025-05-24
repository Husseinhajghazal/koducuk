import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import HtmlIcon from "@/assets/icons/html.svg";
import GithubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";

const courses = [
  {
    id: "6650a1c9e3f5e8e4569d2c02",
    name: "Advanced TypeScript",
    image_url: GithubIcon,
    created_at: new Date("2024-05-05T14:30:00Z"),
    updated_at: new Date("2024-05-05T14:30:00Z"),
  },
  {
    id: "6650a1c9e3f5e8e4569d2c01",
    name: "JavaScript for Beginners",
    image_url: HtmlIcon,
    created_at: new Date("2024-05-01T10:00:00Z"),
    updated_at: new Date("2024-05-01T10:00:00Z"),
  },
  {
    id: "6650a1c9e3f5e8e4569d2c03",
    name: "Fullstack Development with Node.js",
    image_url: InstagramIcon,
    created_at: new Date("2024-05-10T09:15:00Z"),
    updated_at: new Date("2024-05-10T09:15:00Z"),
  },
];

const CoursesSection = () => {
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
      <Container>
        <div className="grid md:grid-cols-2 mt-20 lg:grid-cols-3 overflow-x-clip justify-center gap-6 lg:gap-12">
          {courses.map((course) => (
            <Card key={course.id} {...course} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CoursesSection;
