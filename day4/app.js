const moreQuiz = [
  {
    q: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Antarctic Desert", "Arabian Desert"],
    answer: 2,
  },
  {
    q: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: 1,
  },
  {
    q: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    answer: 0,
  },
  {
    q: "What does CPU stand for?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Computer Personal Unit",
      "Control Processing Unit",
    ],
    answer: 1,
  },
  {
    q: "Which company created Android?",
    options: ["Apple", "Microsoft", "Google", "IBM"],
    answer: 2,
  },
  {
    q: "What is 12 × 12?",
    options: ["124", "122", "144", "132"],
    answer: 2,
  },
  {
    q: "How many degrees are in a right angle?",
    options: ["45", "90", "180", "360"],
    answer: 1,
  },
  {
    q: "Which planet has rings?",
    options: ["Mars", "Earth", "Saturn", "Venus"],
    answer: 2,
  },
  {
    q: "What gas do humans need to breathe?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: 1,
  },
  {
    q: "What force pulls objects toward Earth?",
    options: ["Magnetism", "Gravity", "Friction", "Pressure"],
    answer: 1,
  },
  {
    q: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: 1,
  },
  {
    q: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: 2,
  },
  {
    q: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Zinc"],
    answer: 1,
  },
  {
    q: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Pepper"],
    answer: 1,
  },
  {
    q: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3,
  },
  {
    q: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2,
  },
  {
    q: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    answer: 1,
  },
  {
    q: "What is H2O commonly known as?",
    options: ["Oxygen", "Hydrogen", "Water", "Salt"],
    answer: 2,
  },
  {
    q: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: 1,
  },
  {
    q: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 1,
  },
  {
    q: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: 0,
  },
];

let score = 0;

function askqustion(index) {
  const quiz = moreQuiz[index];
  console.log(`\nQ${index + 1}: ${quiz.q}`);
  quiz.options.forEach((option, i) => {
    console.log(`${i}: ${option}`);
  });
  const answer = prompt("Your answer (enter the option number): ");
  if (parseInt(answer) === quiz.answer) {
    console.log("👏Correct!");
    score++;
  } else {
    console.log(`👎Wrong! The correct answer is: ${quiz.options[quiz.answer]}`);
  }
}

function startquist() {
  console.log("Welcome to the Quiz!");

  for (let i = 0; i < moreQuiz.length; i++) {
    askqustion(i);
  }
  console.log(
    `\nQuiz Over! Your final score is: ${score} out of ${moreQuiz.length}`
  );
  console.log("Thank you for playing!");
}
