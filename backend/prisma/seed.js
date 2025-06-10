const { PrismaClient } = require("@prisma/client");
const { courses, users } = require("../data/fake.js");
const { hashPassword } = require("../api/user/service.js");
const prisma = new PrismaClient();

async function main() {
  try {
    // Clear existing data
    console.log("Clearing existing data...");
    await prisma.userCourse.deleteMany();
    await prisma.user.deleteMany();
    await prisma.question.deleteMany();
    await prisma.lesson.deleteMany();
    await prisma.section.deleteMany();
    await prisma.course.deleteMany();
    await prisma.feature.deleteMany();
    await prisma.plan.deleteMany();

    console.log("Starting seed process...");

    // Create users first
    console.log("Creating users...");
    const createdUsers = [];
    for (const user of users) {
      const password = await hashPassword(user.password);
      const createdUser = await prisma.user.create({
        data: {
          ...user,
          password,
        },
      });
      createdUsers.push(createdUser);
      console.log(`Created user: ${user.email}`);
    }

    // Create courses with their sections, lessons, and questions
    console.log("\nCreating courses with related data...");
    for (const courseData of courses) {
      // Create the course
      const course = await prisma.course.create({
        data: {
          name: courseData.name,
          image_url: courseData.image_url,
        },
      });

      // Create sections and their related data
      for (const sectionData of courseData.sections) {
        const section = await prisma.section.create({
          data: {
            name: sectionData.name,
            course: {
              connect: { id: course.id },
            },
          },
        });

        // Create lessons and their related data
        for (const lessonData of sectionData.lessons) {
          const lesson = await prisma.lesson.create({
            data: {
              name: lessonData.name,
              index: lessonData.index,
              video_url: lessonData.video_url,
              description: lessonData.description,
              section: {
                connect: { id: section.id },
              },
            },
          });

          // Create questions for each lesson
          for (const questionData of lessonData.questions) {
            await prisma.question.create({
              data: {
                value: questionData.value,
                choices: questionData.choices,
                correct_choice: questionData.correct_choice,
                lesson: {
                  connect: { id: lesson.id },
                },
              },
            });
          }
        }
      }

      console.log(`Created course: ${courseData.name}`);
    }

    console.log("\nSeed completed successfully!");
  } catch (error) {
    console.error("\nError during seeding:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
