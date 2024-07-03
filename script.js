const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#num-questions"),
  category = document.querySelector("#category"),
  difficulty = document.querySelector("#difficulty"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

let climateChangeQuestions = [
  {
    question: "Which activity is recommended to reduce carbon emissions?",
    correct_answer: "Riding a bicycle",
    incorrect_answers: ["Driving a petrol car", "Using a diesel generator", "Burning coal"],
  },
  {
    question: "Why is it important to protect Antarctica's environment?",
    correct_answer: "It helps regulate the Earth's climate",
    incorrect_answers: ["It's a popular tourist destination", "It has a large human population", "It's rich in oil reserves"],
  },
  {
    question: "What impact does smoking have on the environment?",
    correct_answer: "Contributes to air pollution",
    incorrect_answers: ["Improves air quality", "No impact", "Reduces greenhouse gases"],
  },
  // Add more climate change questions
];

let antarcticaEnvironmentQuestions = [
  {
    question: "Which activity is recommended to reduce carbon emissions?",
    correct_answer: "Riding a bicycle",
    incorrect_answers: ["Driving a petrol car", "Using a diesel generator", "Burning coal"],
  },
  {
    question: "Why is it important to protect Antarctica's environment?",
    correct_answer: "It helps regulate the Earth's climate",
    incorrect_answers: ["It's a popular tourist destination", "It has a large human population", "It's rich in oil reserves"],
  },
  {
    question: "What impact does smoking have on the environment?",
    correct_answer: "Contributes to air pollution",
    incorrect_answers: ["Improves air quality", "No impact", "Reduces greenhouse gases"],
  },
  {
    question: "Which of the following is a renewable source of energy?",
    correct_answer: "Solar power",
    incorrect_answers: ["Coal", "Natural gas", "Petrol"],
  },
  {
    question: "How does climate change affect Antarctica?",
    correct_answer: "Melting ice sheets",
    incorrect_answers: ["Increase in forest area", "Decrease in sea level", "More rainfall"],
  },
  {
    question: "What is a sustainable alternative to plastic bags?",
    correct_answer: "Reusable cloth bags",
    incorrect_answers: ["Single-use plastic bags", "Paper bags", "Non-biodegradable bags"],
  },
  {
    question: "What is the main cause of global warming?",
    correct_answer: "Greenhouse gas emissions",
    incorrect_answers: ["Deforestation", "Volcanic activity", "Solar flares"],
  },
  {
    question: "Which action can help reduce deforestation?",
    correct_answer: "Supporting sustainable forestry",
    incorrect_answers: ["Using more paper products", "Clearing land for agriculture", "Building more roads"],
  },
  {
    question: "Why is reducing meat consumption beneficial for the environment?",
    correct_answer: "It lowers greenhouse gas emissions",
    incorrect_answers: ["It reduces water pollution", "It increases carbon footprint", "It depletes soil nutrients"],
  },
  {
    question: "Which practice helps conserve water?",
    correct_answer: "Fixing leaks promptly",
    incorrect_answers: ["Letting the tap run", "Watering lawns frequently", "Using non-native plants in gardens"],
  },
  {
    question: "How can individuals reduce their carbon footprint?",
    correct_answer: "Using public transportation",
    incorrect_answers: ["Driving alone", "Using more electricity", "Flying frequently"],
  },
  {
    question: "Which action is harmful to marine life?",
    correct_answer: "Dumping plastic waste in the ocean",
    incorrect_answers: ["Using biodegradable materials", "Recycling", "Conserving water"],
  },
  {
    question: "What is a benefit of composting organic waste?",
    correct_answer: "Reduces landfill waste",
    incorrect_answers: ["Increases methane production", "Uses more resources", "Produces toxic chemicals"],
  },
  {
    question: "What is the effect of deforestation on biodiversity?",
    correct_answer: "Loss of species",
    incorrect_answers: ["Increase in species", "Improved habitat", "Enhanced soil fertility"],
  },
  {
    question: "Which of the following helps to reduce air pollution?",
    correct_answer: "Using electric vehicles",
    incorrect_answers: ["Burning fossil fuels", "Deforestation", "Industrial emissions"],
  }
  // Add more Antarctica environment questions
];

let geopoliticalSecurityQuestions = [
  {
    question: "How does gender-sensitive urban design contribute to enhancing security for women?",
    correct_answer: "By creating safer and more inclusive public spaces.",
    incorrect_answers: [
      "By increasing police presence in urban areas.",
      "By promoting gender segregation in public spaces.",
      "By installing more surveillance cameras."
    ],
  },
  {
    question: "What are the primary impacts of technology-facilitated gender-based violence in the Pacific region?",
    correct_answer: "Increased vulnerability of women to online harassment and abuse.",
    incorrect_answers: [
      "Improved access to digital resources for women in remote areas.",
      "Decreased instances of violence due to technological advancements.",
      "Heightened awareness and effective regulation of online platforms."
    ],
  },
  {
    question: "What potential implications do robots have on public spaces in terms of security and privacy?",
    correct_answer: "They can raise concerns about surveillance and data privacy.",
    incorrect_answers: [
      "They decrease the need for security personnel in public areas.",
      "They provide better emergency response services.",
      "They reduce urban congestion and pollution."
    ],
  },
  {
    question: "How do misinformation campaigns affect public perception and response to mRNA platforms?",
    correct_answer: "They can lead to vaccine hesitancy and distrust in scientific advancements.",
    incorrect_answers: [
      "They promote widespread acceptance and adoption of mRNA technologies.",
      "They improve public understanding of mRNA mechanisms.",
      "They accelerate the distribution of mRNA vaccines."
    ],
  },
  {
    question: "What geopolitical tensions are involved in securing Antarctica’s environmental future?",
    correct_answer: "Competing territorial claims and resource exploitation.",
    incorrect_answers: [
      "Unified international efforts to protect Antarctic biodiversity.",
      "Lack of interest from global superpowers in Antarctic affairs.",
      "Harmonious collaboration among all Antarctic treaty signatories."
    ],
  }
];


let thrivingCommunitiesQuestions = [
  {
    question: "How can repurposing plastic waste contribute to sustainable community development?",
    correct_answer: "By reducing environmental pollution and creating economic opportunities.",
    incorrect_answers: [
      "By increasing reliance on single-use plastics for convenience.",
      "By promoting industrial waste disposal practices.",
      "By encouraging unsustainable manufacturing processes."
    ],
  },
  {
    question: "What are the health literacy benefits of initiatives like the Stroke Thrombolysis Device?",
    correct_answer: "It enhances public awareness and understanding of stroke prevention and treatment.",
    incorrect_answers: [
      "It decreases access to life-saving medical technologies.",
      "It promotes misinformation about healthcare practices.",
      "It discourages investment in medical research and innovation."
    ],
  },
  {
    question: "How does sustainable food innovation support thriving communities?",
    correct_answer: "By promoting access to nutritious food while reducing environmental impact.",
    incorrect_answers: [
      "By increasing reliance on genetically modified organisms (GMOs) for food production.",
      "By encouraging unsustainable agricultural practices.",
      "By prioritizing profit over community well-being."
    ],
  },
  {
    question: "Discuss the concept of circular economies in the context of food production.",
    correct_answer: "It focuses on minimizing waste and maximizing resource efficiency throughout the food supply chain.",
    incorrect_answers: [
      "It promotes excessive food waste and landfill accumulation.",
      "It encourages reliance on linear production and consumption models.",
      "It disregards environmental and social impacts of food production."
    ],
  }
];


let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  timer;

const startQuiz = () => {
  const cat = category.value;
  switch (cat) {
    case "climate_change":
      questions = climateChangeQuestions;
      break;
    case "environment":
      questions = antarcticaEnvironmentQuestions;
      break;
    case "sustainability":
      questions = geopoliticalSecurityQuestions;
      break;
    case "9":
      questions = thrivingCommunitiesQuestions;
      break;
    default:
      questions = [...climateChangeQuestions, ...antarcticaEnvironmentQuestions, ...geopoliticalSecurityQuestions, ...thrivingCommunitiesQuestions];
      break;
  }

  setTimeout(() => {
    startScreen.classList.add("hide");
    quiz.classList.remove("hide");
    currentQuestion = 1;
    showQuestion(questions[0]);
  }, 1000);
};

startBtn.addEventListener("click", startQuiz);

const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper");
  questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  const answers = [
    ...question.incorrect_answers,
    question.correct_answer.toString(),
  ];
  answersWrapper.innerHTML = "";
  answers.sort(() => Math.random() - 0.5);
  answers.forEach((answer) => {
    answersWrapper.innerHTML += `
                  <div class="answer ">
            <span class="text">${answer}</span>
            <span class="checkbox">
              <i class="fas fa-check"></i>
            </span>
          </div>
        `;
  });

  questionNumber.innerHTML = ` Question <span class="current">${questions.indexOf(question) + 1}</span>
            <span class="total">/${questions.length}</span>`;
  //add event listener to each answer
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });

  time = timePerQuestion.value;
  startTimer(time);
};

const startTimer = (time) => {
  timer = setInterval(() => {
    if (time === 3) {
      playAdudio("countdown.mp3");
    }
    if (time >= 0) {
      progress(time);
      time--;
    } else {
      checkAnswer();
    }
  }, 1000);
};

const loadingAnimation = () => {
  startBtn.innerHTML = "Loading";
  const loadingInterval = setInterval(() => {
    if (startBtn.innerHTML.length === 10) {
      startBtn.innerHTML = "Loading";
    } else {
      startBtn.innerHTML += ".";
    }
  }, 500);
};

function defineProperty() {
  var osccred = document.createElement("div");
  /*osccred.innerHTML =
    "A Project By <a href='https://www.youtube.com/@opensourcecoding' target=_blank>Open Source Coding</a>";*/
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();

const submitBtn = document.querySelector(".submit"),
  nextBtn = document.querySelector(".next");

submitBtn.addEventListener("click", () => {
  checkAnswer();
});

nextBtn.addEventListener("click", () => {
  nextQuestion();
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
});

const checkAnswer = () => {
  clearInterval(timer);
  const selectedAnswer = document.querySelector(".answer.selected");
  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector(".text").innerHTML;
    if (answer === questions[currentQuestion - 1].correct_answer) {
      score++;
      selectedAnswer.classList.add("correct");
    } else {
      selectedAnswer.classList.add("wrong");
      const correctAnswer = document.querySelectorAll(".answer").forEach((answer) => {
        if (answer.querySelector(".text").innerHTML === questions[currentQuestion - 1].correct_answer) {
          answer.classList.add("correct");
        }
      });
    }
  } else {
    const correctAnswer = document.querySelectorAll(".answer").forEach((answer) => {
      if (answer.querySelector(".text").innerHTML === questions[currentQuestion - 1].correct_answer) {
        answer.classList.add("correct");
      }
    });
  }
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.classList.add("checked");
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};

const nextQuestion = () => {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
  } else {
    showScore();
  }
};

const endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score");

const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `/ ${questions.length}`;
};

const restartBtn = document.querySelector(".restart");

restartBtn.addEventListener("click", () => {
  window.location.reload();
});

const playAdudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};
