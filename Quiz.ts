/*
1.There is a form where you can create multiple choice questions (typically 4 answers, but put however many you like)
2.A “Submit Question” button adds the question to a quiz
3.A “Take Quiz” button allows you to attempt the quiz you created
4.A “Grade Quiz” button will tally your grade.
5.You must utilize at least two classes in your implementation: Quiz and Question.
6.The Question and Quiz classes must both contain an evaluate() function (or “grade” or “check”, whatever makes the most sense to you).
a.The Quiz evaluate() must call evaluate() on each of the Question objects.
b.The Question evaluate() must return true or false depending on whether the submitted question is correct. */
// If we get away with it, continue, otherwise, irrelevant
// each question should have the question, options and answer values
class Question {

  constructor(public question: string, public answer: string, public options: string[]) {}

  // compares each question's answer to the user's answer and returns true or false
  evaluate(userAnswer) {
    return userAnswer == this.answer;
  }
}

// should hold question objects and allow the user to create a new question
// populate the page with the newly created question on submit
class Quiz {

  // hold an array of question objects
  questions: Question[];

  // hold a tally for correct answers
  correctCount: 0;

  // hold the percentage
  percentage: 0;

  // make a method to add a question
  addQuestion(question) {
    this.questions.push(question);
  }

  // populate the page with the questions!
  populatePage() {
    // grab our HTML container
    let container = document.getElementById("questions");

      // traverses questions and displays them on the page using innerHTML
      // Something seems off
      for (var i = 1; i < this.questions.length + 1; i++) {
        container.innerHTML = "<label id=\"q" + i + "\"><strong>" + i + ". " + this.questions[i] + "</strong></label> <br> <br>";
        for (var j = 1; j < this.questions[i].options.length + 1; j++) {
          container.innerHTML = "<input type = \"radio\" name = \"answers" + i + "id = \"q" + i + "a" + j + "value = \"answer" + j + ">" + this.questions.options[i] + "<br>";
        }
      }

      // new question box
      container.innerHTML = "New Question: <input type = \"text\" name = \"newQuestion\">";

      // new answer box
      container.innerHTML = "New Answer: <input type = \"text\" name = \"newAnswer\">";

      // new four option boxes
      for (var i = 1; i < 5; i++) {
        container.innerHTML = "Option " + i + ": <input type = \"text\" name = \"newOption" + i + ">";
      }

      // Submit Question button
      // ! we need to grab the user inputs and pass them into the addQuestion method
      container.innerHTML = "<button onclick=\"addQuestion()\">Submit Question</button><br><br>";

      // Take Quiz button
      container.innerHTML = "<button onclick=\"evaluate()\">Take Quiz</button><br><br>";

      // Grade Quiz button
      container.innerHTML = "<button onclick=\"showScore()\">Grade Quiz</button>";
  }

    // traverses each of the questions to tally correct answers
    evaluate() {

      // grab each set of answers from the HTML
      for (var i = 1; i < this.questions.length + 1; i++) {
          let `submitAnswers + i = document.getElementsByName("answers" + i);
      }

      // checks each checked answer to see if it matches the correct answer, if so we add to our correct count
      for (var i = 0; i < this.questions.length; i++) {
        let userAnswer = <HTMLInputElement> document.getElementById("submitAnswers" + (i + 1).id);
        if (userAnswer.checked) {
          if (question.evaluate(this.questions[i]).answer) {
            this.correctCount++;
          }
        }
        // calculates the percentage that will be shown on the page
        this.percentage = parseInt((this.correctCount / 5) * 100);
      }
    }
      // calculate and display the final score at the top of the page
      showScore() {
        let scoreDiv = document.getElementById('score');
        document.getElementById('score').innerHTML = "Your Score is " + this.percentage + "%";
        scoreDiv.style.visibility = 'visible';
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }

      // adds new user question to quiz and repopulates page to include new question
      addNewQuestion(question, answer, inputs) {
        // add the new user question to the quiz
        var newQuestion = new Question(question, answer, [inputs[0], inputs[1], inputs[2], inputs[3]]);
        this.addQuestion(newQuestion);

        // repopulate page
        this.populatePage();
      }
    }

// add initial question objects to quiz class
let question1 = new Question("What color is the sky?", "blue", ["blue", "black", "yellow", "red"]);
let question2 = new Question("Who is the current president of the United States of America?", "Barack Obama", ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"]);
let question3 = new Question("What was Prince's favorite color?", "purple", ["blue", "purple", "gold", "silver"]);
let question4 = new Question("How many continents are there in the world?", "7", ["150", "1", "6", "7"]);
let question5 = new Question("What is the capital of the Netherlands?", "Amsterdam", ["London", "Bern", "Amsterdam", "Copenhagen"]);
let quiz = new Quiz();
for (var i = 0; i < 5; i++) {
quiz.addQuestion("question" + i);
}

// call populate page method
quiz.populatePage();

// function used to check that an answer was selected for every question
function isThereNull(setOfAnswers) {
  for (var i = 0; i < setOfAnswers.length; i++) {
    let userAnswer = <HTMLInputElement> document.getElementById(setOfAnswers[i].id);
    if (userAnswer.checked) {
      return true;
    }
  }
  return false;
}

// Traverses each question to check if there is a null (unanswered question)
// ! What do we input into the isThereNull method? Clueless tbh
var flag = true;
for (var i = 0; i < this.questions.length; i++) {
  // flag = isThereNull(); [need input]
}

// if they did not answer every question, we throw an alert instead
if (!flag) {
  alert("You need to select answer for every question!");
}

// if our flag is true (every question was answered, we proceed with scoring)
else {

  // instantiate the answers array and number of answers correct (score count)
  let answers = [];
  let scoreCount = 0;

  // traverses the checkboxes to figure out whether or not the answer selected is correct
  // Using our array we store "C" for correct answers and "I" for incorrect answers
  function grabAnswers(setOfAnswers, realAnswer) {
    for (var i = 0; i < setOfAnswers.length; i++) {
      let userAnswer = <HTMLInputElement> document.getElementById(setOfAnswers[i].id);
        if (userAnswer.checked) {
          if (userAnswer.value == realAnswer) {
            answers.push("C");
          }
          else {
            answers.push("I");
          }
        }
    }
  }

  // loop through all of our questions to use the grabAnswers method on each
  for (var i = 0; i < quiz.questions.length; i++) {
    grabAnswers("submitAnswers" + (i + 1), this.questions.answer);
  }

  // determine how many answers they got correct
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == "C") {
      scoreCount++;
    }
  }
}

/* To Do List */
// 1. Check that every question was answered (fix null input)
// 2. Properly allow the user to add new questions (grab user input)
// Question: Do we have to do a null check to see if the user input all the fields to add a new question too?
