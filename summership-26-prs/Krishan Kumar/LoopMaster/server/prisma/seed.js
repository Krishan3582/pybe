const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const lessons = [
    {
        title: "Introduction to Loops",
        description: "Understand what loops are and why programmers use them. Learn how loops reduce repeated code.",
        topic: "Basics",
        order: 1
    },
    {
        title: "Python For Loop",
        description: "Learn how to use for loops to repeat instructions over sequences and collections.",
        topic: "For Loop",
        order: 2
    },
    {
        title: "Python While Loop",
        description: "Learn how while loops execute repeatedly while a given condition remains true.",
        topic: "While Loop",
        order: 3
    },
    {
        title: "Understanding range()",
        description: "Explore range(), its start, stop and step arguments, and how it works with for loops.",
        topic: "Range",
        order: 4
    },
    {
        title: "Nested Loops",
        description: "Understand loops inside other loops and practice creating patterns using nested loops.",
        topic: "Nested Loops",
        order: 5
    },
    {
        title: "Break and Continue",
        description: "Learn how break stops a loop and continue skips the current iteration.",
        topic: "Loop Control",
        order: 6
    },
    {
        title: "Loops with Lists and Strings",
        description: "Use loops to access list elements and process individual characters in strings.",
        topic: "Collections",
        order: 7
    },
    {
        title: "Infinite Loops and Common Errors",
        description: "Understand infinite loops, incorrect conditions, indentation mistakes and debugging techniques.",
        topic: "Debugging",
        order: 8
    }
];

async function main() {
    await prisma.lesson.deleteMany();

    await prisma.lesson.createMany({
        data: lessons
    });

    console.log("8 Python loop lessons added successfully!");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });