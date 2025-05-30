export async function generateMetadata({ params }) {
  return {
    title: "Kurs | Koducuk",
    description: "Koducuk platformunda kodlama eğitimi",
  };
}

export default function CourseLayout({ children }) {
  return children;
}
