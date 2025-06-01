const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create courses
  const courses = [
    {
      name: "Web Development Fundamentals",
      image_url:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      sections: {
        create: [
          {
            name: "HTML Basics",
            active: true,
            lessons: {
              create: [
                {
                  index: 1,
                  name: "Introduction to HTML",
                  video_url: "https://example.com/videos/html-intro",
                  description:
                    "Learn the basics of HTML and document structure",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which tag is used for the largest heading in HTML?",
                        choices: ["<h1>", "<h6>", "<heading>", "<head>"],
                        active: true,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: "JavaScript Mastery",
      image_url:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop",
      sections: {
        create: [
          {
            name: "JavaScript Fundamentals",
            active: true,
            lessons: {
              create: [
                {
                  index: 0,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 1,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 2,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 3,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 4,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "JavaScript Fundamentals",
            active: true,
            lessons: {
              create: [
                {
                  index: 0,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 1,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 2,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 3,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
                {
                  index: 4,
                  name: "Variables and Data Types",
                  video_url: "https://example.com/videos/js-variables",
                  description:
                    "Understanding variables and primitive data types in JavaScript",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which keyword is not used for declaring variables in JavaScript?",
                        choices: ["var", "let", "define", "const"],
                        active: true,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: "React for Beginners",
      image_url:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
      sections: {
        create: [
          {
            name: "React Basics",
            active: true,
            lessons: {
              create: [
                {
                  index: 1,
                  name: "Components and Props",
                  video_url: "https://example.com/videos/react-components",
                  description:
                    "Learn about React components and how to pass props",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "What is the correct way to pass a prop called 'name' to a component?",
                        choices: [
                          "<Component name='John' />",
                          "<Component {name='John'} />",
                          "<Component props.name='John' />",
                          "<Component 'name'='John' />",
                        ],
                        active: true,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: "Python Programming",
      image_url:
        "https://images.unsplash.com/photo-1526379879527-8559ecfd8bf7?w=800&auto=format&fit=crop",
      sections: {
        create: [
          {
            name: "Python Basics",
            active: true,
            lessons: {
              create: [
                {
                  index: 1,
                  name: "Getting Started with Python",
                  video_url: "https://example.com/videos/python-intro",
                  description: "Introduction to Python programming language",
                  active: true,
                  questions: {
                    create: [
                      {
                        value:
                          "Which of these is not a valid Python data type?",
                        choices: ["integer", "float", "varchar", "string"],
                        active: true,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ];

  for (const courseData of courses) {
    await prisma.course.create({
      data: courseData,
    });
  }

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
