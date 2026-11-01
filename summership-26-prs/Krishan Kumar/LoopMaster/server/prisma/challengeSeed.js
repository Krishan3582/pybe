const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const challenges = [

    // =========================
    // BEGINNER - 10 CHALLENGES
    // =========================

    {
        title: "Print Numbers from 1 to 10",
        description: "Use a for loop to print numbers from 1 to 10.",
        difficulty: "Beginner",
        topic: "For Loop",
        starterCode: " ",
        expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
        hint: "Use range(1, 11).",
        solution: "for i in range(1, 11):\n    print(i)"
    },
    {
        title: "Print Even Numbers",
        description: "Print all even numbers from 2 to 20 using a loop.",
        difficulty: "Beginner",
        topic: "For Loop",
        starterCode: " ",
        expectedOutput: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20",
        hint: "Check whether a number is divisible by 2.",
        solution: "for i in range(2, 21):\n    if i % 2 == 0:\n        print(i)"
    },
    {
        title: "Sum of First 10 Numbers",
        description: "Calculate the sum of numbers from 1 to 10 using a loop.",
        difficulty: "Beginner",
        topic: "For Loop",
        starterCode: " ",
        expectedOutput: "55",
        hint: "Initialize total with 0 and add each number.",
        solution: "total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)"
    },
    {
        title: "Multiplication Table",
        description: "Print the multiplication table of 5 from 1 to 10.",
        difficulty: "Beginner",
        topic: "For Loop",
        starterCode: " ",
        expectedOutput: "5\n10\n15\n20\n25\n30\n35\n40\n45\n50",
        hint: "Multiply 5 by each number from 1 to 10.",
        solution: "for i in range(1, 11):\n    print(5 * i)"
    },
    {
        title: "Countdown",
        description: "Use a while loop to print numbers from 10 down to 1.",
        difficulty: "Beginner",
        topic: "While Loop",
        starterCode: " ",
        expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1",
        hint: "Decrease the variable by 1 in every iteration.",
        solution: "number = 10\nwhile number >= 1:\n    print(number)\n    number -= 1"
    },
    {
        title: "Count Characters",
        description: "Count the number of characters in the string 'Python' using a loop.",
        difficulty: "Beginner",
        topic: "Strings",
        starterCode: " ",
        expectedOutput: "6",
        hint: "Increase count for every character.",
        solution: "word = 'Python'\ncount = 0\nfor char in word:\n    count += 1\nprint(count)"
    },
    {
        title: "Print List Elements",
        description: "Print every element of the list [10, 20, 30, 40, 50].",
        difficulty: "Beginner",
        topic: "Lists",
        starterCode: "numbers = [10, 20, 30, 40, 50]\n# Write your loop",
        expectedOutput: "10\n20\n30\n40\n50",
        hint: "Use a for loop to access each element.",
        solution: "numbers = [10, 20, 30, 40, 50]\nfor num in numbers:\n    print(num)"
    },
    {
        title: "Count Odd Numbers",
        description: "Count how many odd numbers exist between 1 and 15.",
        difficulty: "Beginner",
        topic: "Conditions",
        starterCode: "count = 0\n# Write your loop\nprint(count)",
        expectedOutput: "8",
        hint: "Odd numbers have a remainder of 1 when divided by 2.",
        solution: "count = 0\nfor i in range(1, 16):\n    if i % 2 != 0:\n        count += 1\nprint(count)"
    },
    {
        title: "Print Each Letter",
        description: "Print each letter of the word 'LOOP' on a separate line.",
        difficulty: "Beginner",
        topic: "Strings",
        starterCode: "word = 'LOOP'\n# Write your loop",
        expectedOutput: "L\nO\nO\nP",
        hint: "Strings can be iterated character by character.",
        solution: "word = 'LOOP'\nfor letter in word:\n    print(letter)"
    },
    {
        title: "Find the Largest Number",
        description: "Find the largest number in [12, 45, 7, 89, 23] using a loop.",
        difficulty: "Beginner",
        topic: "Lists",
        starterCode: "numbers = [12, 45, 7, 89, 23]\n# Write your loop",
        expectedOutput: "89",
        hint: "Compare each element with the current largest number.",
        solution: "numbers = [12, 45, 7, 89, 23]\nlargest = numbers[0]\nfor num in numbers:\n    if num > largest:\n        largest = num\nprint(largest)"
    },

    // =========================
    // INTERMEDIATE - 10 CHALLENGES
    // =========================

    {
        title: "Calculate Factorial",
        description: "Calculate the factorial of 5 using a loop.",
        difficulty: "Intermediate",
        topic: "For Loop",
        starterCode: "n = 5\nresult = 1\n# Write your loop\nprint(result)",
        expectedOutput: "120",
        hint: "Multiply result by every number from 1 to n.",
        solution: "n = 5\nresult = 1\nfor i in range(1, n + 1):\n    result *= i\nprint(result)"
    },
    {
        title: "Fibonacci Series",
        description: "Print the first 10 numbers of the Fibonacci series using a loop.",
        difficulty: "Intermediate",
        topic: "While Loop",
        starterCode: "a, b = 0, 1\ncount = 0\n# Write your loop",
        expectedOutput: "0 1 1 2 3 5 8 13 21 34",
        hint: "The next number is the sum of the previous two.",
        solution: "a, b = 0, 1\ncount = 0\nwhile count < 10:\n    print(a, end=' ')\n    a, b = b, a + b\n    count += 1"
    },
    {
        title: "Check Prime Number",
        description: "Use a loop to check whether 17 is a prime number.",
        difficulty: "Intermediate",
        topic: "Conditions",
        starterCode: "n = 17\nis_prime = True\n# Write your loop",
        expectedOutput: "Prime",
        hint: "Check whether any number from 2 to n-1 divides n.",
        solution: "n = 17\nis_prime = True\nfor i in range(2, n):\n    if n % i == 0:\n        is_prime = False\n        break\nprint('Prime' if is_prime else 'Not Prime')"
    },
    {
        title: "Reverse a String",
        description: "Reverse the word 'Python' using a loop.",
        difficulty: "Intermediate",
        topic: "Strings",
        starterCode: "word = 'Python'\nreversed_word = ''\n# Write your loop\nprint(reversed_word)",
        expectedOutput: "nohtyP",
        hint: "Iterate through the string from the last index to the first.",
        solution: "word = 'Python'\nreversed_word = ''\nfor i in range(len(word) - 1, -1, -1):\n    reversed_word += word[i]\nprint(reversed_word)"
    },
    {
        title: "Sum of List Elements",
        description: "Calculate the sum of all numbers in [5, 10, 15, 20].",
        difficulty: "Intermediate",
        topic: "Lists",
        starterCode: "numbers = [5, 10, 15, 20]\ntotal = 0\n# Write your loop\nprint(total)",
        expectedOutput: "50",
        hint: "Add every list element to total.",
        solution: "numbers = [5, 10, 15, 20]\ntotal = 0\nfor num in numbers:\n    total += num\nprint(total)"
    },
    {
        title: "Print Star Triangle",
        description: "Print a triangle containing 5 rows of stars.",
        difficulty: "Intermediate",
        topic: "Nested Loops",
        starterCode: "# Write nested loops",
        expectedOutput: "*\n**\n***\n****\n*****",
        hint: "Use an outer loop for rows and an inner loop for stars.",
        solution: "for i in range(1, 6):\n    for j in range(i):\n        print('*', end='')\n    print()"
    },
    {
        title: "Count Vowels",
        description: "Count the vowels in the word 'education'.",
        difficulty: "Intermediate",
        topic: "Strings",
        starterCode: "word = 'education'\ncount = 0\n# Write your loop\nprint(count)",
        expectedOutput: "5",
        hint: "Check each character against 'aeiou'.",
        solution: "word = 'education'\ncount = 0\nfor char in word:\n    if char in 'aeiou':\n        count += 1\nprint(count)"
    },
    {
        title: "Multiplication Tables",
        description: "Print multiplication tables from 1 to 3, each up to 5.",
        difficulty: "Intermediate",
        topic: "Nested Loops",
        starterCode: "# Write nested loops",
        expectedOutput: "1 2 3 4 5\n2 4 6 8 10\n3 6 9 12 15",
        hint: "Use one loop for the table number and another for its multiplier.",
        solution: "for i in range(1, 4):\n    for j in range(1, 6):\n        print(i * j, end=' ')\n    print()"
    },
    {
        title: "Skip Multiples of 3",
        description: "Print numbers from 1 to 15, skipping multiples of 3 using continue.",
        difficulty: "Intermediate",
        topic: "Continue",
        starterCode: "for i in range(1, 16):\n    # Use continue",
        expectedOutput: "1\n2\n4\n5\n7\n8\n10\n11\n13\n14",
        hint: "Use continue when i is divisible by 3.",
        solution: "for i in range(1, 16):\n    if i % 3 == 0:\n        continue\n    print(i)"
    },
    {
        title: "Stop at 7",
        description: "Print numbers from 1 to 10 but stop the loop when the number reaches 7.",
        difficulty: "Intermediate",
        topic: "Break",
        starterCode: "for i in range(1, 11):\n    # Use break",
        expectedOutput: "1\n2\n3\n4\n5\n6",
        hint: "Use break when i equals 7.",
        solution: "for i in range(1, 11):\n    if i == 7:\n        break\n    print(i)"
    },

    // =========================
    // ADVANCED - 10 CHALLENGES
    // =========================

    {
        title: "Print Prime Numbers",
        description: "Print all prime numbers between 1 and 50 using nested loops.",
        difficulty: "Advanced",
        topic: "Nested Loops",
        starterCode: "# Write your nested loops",
        expectedOutput: "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47",
        hint: "For every number, test possible divisors from 2 up to its square root.",
        solution: "for n in range(2, 51):\n    is_prime = True\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(n, end=' ')"
    },
    {
        title: "Floyd's Triangle",
        description: "Print Floyd's triangle with 5 rows.",
        difficulty: "Advanced",
        topic: "Nested Loops",
        starterCode: "number = 1\n# Write nested loops",
        expectedOutput: "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15",
        hint: "Use a counter that increases after every printed number.",
        solution: "number = 1\nfor i in range(1, 6):\n    for j in range(i):\n        print(number, end=' ')\n        number += 1\n    print()"
    },
    {
        title: "Diamond Star Pattern",
        description: "Print a diamond star pattern with 5 rows in the upper half and 4 in the lower half.",
        difficulty: "Advanced",
        topic: "Nested Loops",
        starterCode: "# Write nested loops",
        expectedOutput: "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *",
        hint: "Use spaces before stars. Build the upper and lower halves separately.",
        solution: "for i in range(1, 6):\n    print(' ' * (5 - i) + '*' * (2 * i - 1))\nfor i in range(4, 0, -1):\n    print(' ' * (5 - i) + '*' * (2 * i - 1))"
    },
    {
        title: "Find Armstrong Numbers",
        description: "Print all three-digit Armstrong numbers using loops.",
        difficulty: "Advanced",
        topic: "While Loop",
        starterCode: "# Write your loop",
        expectedOutput: "153 370 371 407",
        hint: "For a three-digit number, add the cubes of its digits.",
        solution: "for n in range(100, 1000):\n    total = 0\n    temp = n\n    while temp > 0:\n        digit = temp % 10\n        total += digit ** 3\n        temp //= 10\n    if total == n:\n        print(n, end=' ')"
    },
    {
        title: "Palindrome Number",
        description: "Check whether 121 is a palindrome using a while loop.",
        difficulty: "Advanced",
        topic: "While Loop",
        starterCode: "number = 121\n# Write your loop",
        expectedOutput: "Palindrome",
        hint: "Reverse the number digit by digit and compare it with the original.",
        solution: "number = 121\noriginal = number\nreverse = 0\nwhile number > 0:\n    digit = number % 10\n    reverse = reverse * 10 + digit\n    number //= 10\nprint('Palindrome' if original == reverse else 'Not Palindrome')"
    },
    {
        title: "Find GCD Using Loops",
        description: "Find the greatest common divisor of 48 and 18 using a loop.",
        difficulty: "Advanced",
        topic: "While Loop",
        starterCode: "a = 48\nb = 18\n# Write your loop",
        expectedOutput: "6",
        hint: "Use the Euclidean algorithm with the remainder.",
        solution: "a = 48\nb = 18\nwhile b != 0:\n    a, b = b, a % b\nprint(a)"
    },
    {
        title: "Number Pyramid",
        description: "Print a number pyramid with 5 rows.",
        difficulty: "Advanced",
        topic: "Nested Loops",
        starterCode: "# Write nested loops",
        expectedOutput: "    1\n   121\n  12321\n 1234321\n123454321",
        hint: "Print increasing numbers and then decreasing numbers in each row.",
        solution: "for i in range(1, 6):\n    print(' ' * (5 - i), end='')\n    for j in range(1, i + 1):\n        print(j, end='')\n    for j in range(i - 1, 0, -1):\n        print(j, end='')\n    print()"
    },
    {
        title: "Calculate Digital Root",
        description: "Repeatedly add the digits of 9875 until only one digit remains.",
        difficulty: "Advanced",
        topic: "While Loop",
        starterCode: "number = 9875\n# Write your loops",
        expectedOutput: "2",
        hint: "Use one loop to extract digits and another to repeat until one digit remains.",
        solution: "number = 9875\nwhile number >= 10:\n    total = 0\n    while number > 0:\n        total += number % 10\n        number //= 10\n    number = total\nprint(number)"
    },
    {
        title: "Find Perfect Numbers",
        description: "Print all perfect numbers between 1 and 1000.",
        difficulty: "Advanced",
        topic: "Nested Loops",
        starterCode: "# Write nested loops",
        expectedOutput: "6 28 496",
        hint: "A perfect number equals the sum of its positive divisors excluding itself.",
        solution: "for n in range(2, 1001):\n    total = 0\n    for i in range(1, n):\n        if n % i == 0:\n            total += i\n    if total == n:\n        print(n, end=' ')"
    },
    {
        title: "Find Missing Number",
        description: "The list [1, 2, 3, 5, 6] is missing one number between 1 and 6. Find it using a loop.",
        difficulty: "Advanced",
        topic: "Lists",
        starterCode: "numbers = [1, 2, 3, 5, 6]\n# Write your loop",
        expectedOutput: "4",
        hint: "Compare the expected range with the numbers in the list.",
        solution: "numbers = [1, 2, 3, 5, 6]\nfor i in range(1, 7):\n    found = False\n    for num in numbers:\n        if num == i:\n            found = True\n            break\n    if not found:\n        print(i)"
    }
];

async function main() {
    await prisma.challenge.deleteMany();

    await prisma.challenge.createMany({
        data: challenges
    });

    console.log("Successfully added 30 Python loop challenges!");
    console.log("Beginner: 10");
    console.log("Intermediate: 10");
    console.log("Advanced: 10");
}

main()
    .catch((error) => {
        console.error("Seeding failed:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });