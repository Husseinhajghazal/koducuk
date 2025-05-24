import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const courses = [
  {
    id: "6650a1c9e3f5e8e4569d2c01",
    name: "JavaScript for Beginners",
    image_url: "https://example.com/images/js-course.jpg",
    created_at: new Date("2024-05-01T10:00:00Z"),
    updated_at: new Date("2024-05-01T10:00:00Z"),
  },
  {
    id: "6650a1c9e3f5e8e4569d2c02",
    name: "Advanced TypeScript",
    image_url: "https://example.com/images/ts-course.jpg",
    created_at: new Date("2024-05-05T14:30:00Z"),
    updated_at: new Date("2024-05-05T14:30:00Z"),
  },
  {
    id: "6650a1c9e3f5e8e4569d2c03",
    name: "Fullstack Development with Node.js",
    image_url: "https://example.com/images/fullstack-course.jpg",
    created_at: new Date("2024-05-10T09:15:00Z"),
    updated_at: new Date("2024-05-10T09:15:00Z"),
  },
];

const CoursesSection = () => {
  return (
    <div className="bg-purplish-black">
      <Container>
        <div className="py-20">
          <SectionHeader
            eyebrow="Kurslarımız"
            link="Tüm kurslar"
            title="Seviye atlamak için kurslar"
          />
        </div>
      </Container>
      <div className="flex py-20 overflow-x-clip justify-center gap-12">
        {courses.map((course) => (
          <Card key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
