class Question {
    constructor(question, answer, options) {
        this.question = question;
        this.answer = answer;
        this.options = options;
    }
    evaluate(userAnswer) {
        return userAnswer == this.answer;
    }
}
class Quiz {
    addQuestion(question) {
        this.questions.push(question);
    }
    populatePage() {
        let container = document.getElementById("questions");
        for (var i = 1; i < this.questions.length + 1; i++) {
            container.innerHTML = "<label id=\"q" + i + "\"><strong>" + i + ". " + this.questions[i] + "</strong></label> <br> <br>";
            for (var j = 1; j < this.questions[i].options.length + 1; j++) {
                container.innerHTML = "<input type = \"radio\" name = \"answers" + i + "id = \"q" + i + "a" + j + "value = \"answer" + j + ">" + this.questions.options[i] + "<br>";
            }
        }
        container.innerHTML = "New Question: <input type = \"text\" name = \"newQuestion\">";
        container.innerHTML = "New Answer: <input type = \"text\" name = \"newAnswer\">";
        for (var i = 1; i < 5; i++) {
            container.innerHTML = "Option " + i + ": <input type = \"text\" name = \"newOption" + i + ">";
        }
        container.innerHTML = "<button onclick=\"addQuestion()\">Submit Question</button><br><br>";
        container.innerHTML = "<button onclick=\"evaluate()\">Take Quiz</button><br><br>";
        container.innerHTML = "<button onclick=\"showScore()\">Grade Quiz</button>";
    }
    evaluate() {
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
;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpei5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlF1aXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7SUFFRSxZQUFtQixRQUFnQixFQUFTLE1BQWMsRUFBUyxPQUFpQjtRQUFqRSxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVU7SUFBRyxDQUFDO0lBR3hGLFFBQVEsQ0FBQyxVQUFVO1FBQ2pCLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFJRDtJQVlFLFdBQVcsQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxZQUFZO1FBRVYsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUluRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLDZCQUE2QixDQUFDO1lBQ3pILEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5RCxTQUFTLENBQUMsU0FBUyxHQUFHLDBDQUEwQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDdEssQ0FBQztRQUNILENBQUM7UUFHRCxTQUFTLENBQUMsU0FBUyxHQUFHLDhEQUE4RCxDQUFDO1FBR3JGLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMERBQTBELENBQUM7UUFHakYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsNkNBQTZDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoRyxDQUFDO1FBSUQsU0FBUyxDQUFDLFNBQVMsR0FBRyxvRUFBb0UsQ0FBQztRQUczRixTQUFTLENBQUMsU0FBUyxHQUFHLDJEQUEyRCxDQUFDO1FBR2xGLFNBQVMsQ0FBQyxTQUFTLEdBQUcscURBQXFELENBQUM7SUFDaEYsQ0FBQztJQUdDLFFBQVE7UUFHTixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pELEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0dkLENBQUE7UUFBQSxDQUFDLEFBQUQ7SUFBQSxDQUFDLEFBQUQ7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4xLlRoZXJlIGlzIGEgZm9ybSB3aGVyZSB5b3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBjaG9pY2UgcXVlc3Rpb25zICh0eXBpY2FsbHkgNCBhbnN3ZXJzLCBidXQgcHV0IGhvd2V2ZXIgbWFueSB5b3UgbGlrZSlcbjIuQSDigJxTdWJtaXQgUXVlc3Rpb27igJ0gYnV0dG9uIGFkZHMgdGhlIHF1ZXN0aW9uIHRvIGEgcXVpelxuMy5BIOKAnFRha2UgUXVpeuKAnSBidXR0b24gYWxsb3dzIHlvdSB0byBhdHRlbXB0IHRoZSBxdWl6IHlvdSBjcmVhdGVkXG40LkEg4oCcR3JhZGUgUXVpeuKAnSBidXR0b24gd2lsbCB0YWxseSB5b3VyIGdyYWRlLlxuNS5Zb3UgbXVzdCB1dGlsaXplIGF0IGxlYXN0IHR3byBjbGFzc2VzIGluIHlvdXIgaW1wbGVtZW50YXRpb246IFF1aXogYW5kIFF1ZXN0aW9uLlxuNi5UaGUgUXVlc3Rpb24gYW5kIFF1aXogY2xhc3NlcyBtdXN0IGJvdGggY29udGFpbiBhbiBldmFsdWF0ZSgpIGZ1bmN0aW9uIChvciDigJxncmFkZeKAnSBvciDigJxjaGVja+KAnSwgd2hhdGV2ZXIgbWFrZXMgdGhlIG1vc3Qgc2Vuc2UgdG8geW91KS5cbmEuVGhlIFF1aXogZXZhbHVhdGUoKSBtdXN0IGNhbGwgZXZhbHVhdGUoKSBvbiBlYWNoIG9mIHRoZSBRdWVzdGlvbiBvYmplY3RzLlxuYi5UaGUgUXVlc3Rpb24gZXZhbHVhdGUoKSBtdXN0IHJldHVybiB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBzdWJtaXR0ZWQgcXVlc3Rpb24gaXMgY29ycmVjdC4gKi9cbi8vIElmIHdlIGdldCBhd2F5IHdpdGggaXQsIGNvbnRpbnVlLCBvdGhlcndpc2UsIGlycmVsZXZhbnRcbi8vIGVhY2ggcXVlc3Rpb24gc2hvdWxkIGhhdmUgdGhlIHF1ZXN0aW9uLCBvcHRpb25zIGFuZCBhbnN3ZXIgdmFsdWVzXG5jbGFzcyBRdWVzdGlvbiB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHF1ZXN0aW9uOiBzdHJpbmcsIHB1YmxpYyBhbnN3ZXI6IHN0cmluZywgcHVibGljIG9wdGlvbnM6IHN0cmluZ1tdKSB7fVxuXG4gIC8vIGNvbXBhcmVzIGVhY2ggcXVlc3Rpb24ncyBhbnN3ZXIgdG8gdGhlIHVzZXIncyBhbnN3ZXIgYW5kIHJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICBldmFsdWF0ZSh1c2VyQW5zd2VyKSB7XG4gICAgcmV0dXJuIHVzZXJBbnN3ZXIgPT0gdGhpcy5hbnN3ZXI7XG4gIH1cbn1cblxuLy8gc2hvdWxkIGhvbGQgcXVlc3Rpb24gb2JqZWN0cyBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gY3JlYXRlIGEgbmV3IHF1ZXN0aW9uXG4vLyBwb3B1bGF0ZSB0aGUgcGFnZSB3aXRoIHRoZSBuZXdseSBjcmVhdGVkIHF1ZXN0aW9uIG9uIHN1Ym1pdFxuY2xhc3MgUXVpeiB7XG5cbiAgLy8gaG9sZCBhbiBhcnJheSBvZiBxdWVzdGlvbiBvYmplY3RzXG4gIHF1ZXN0aW9uczogUXVlc3Rpb25bXTtcblxuICAvLyBob2xkIGEgdGFsbHkgZm9yIGNvcnJlY3QgYW5zd2Vyc1xuICBjb3JyZWN0Q291bnQ6IDA7XG5cbiAgLy8gaG9sZCB0aGUgcGVyY2VudGFnZVxuICBwZXJjZW50YWdlOiAwO1xuXG4gIC8vIG1ha2UgYSBtZXRob2QgdG8gYWRkIGEgcXVlc3Rpb25cbiAgYWRkUXVlc3Rpb24ocXVlc3Rpb24pIHtcbiAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uKTtcbiAgfVxuXG4gIC8vIHBvcHVsYXRlIHRoZSBwYWdlIHdpdGggdGhlIHF1ZXN0aW9ucyFcbiAgcG9wdWxhdGVQYWdlKCkge1xuICAgIC8vIGdyYWIgb3VyIEhUTUwgY29udGFpbmVyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25zXCIpO1xuXG4gICAgICAvLyB0cmF2ZXJzZXMgcXVlc3Rpb25zIGFuZCBkaXNwbGF5cyB0aGVtIG9uIHRoZSBwYWdlIHVzaW5nIGlubmVySFRNTFxuICAgICAgLy8gU29tZXRoaW5nIHNlZW1zIG9mZlxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGxhYmVsIGlkPVxcXCJxXCIgKyBpICsgXCJcXFwiPjxzdHJvbmc+XCIgKyBpICsgXCIuIFwiICsgdGhpcy5xdWVzdGlvbnNbaV0gKyBcIjwvc3Ryb25nPjwvbGFiZWw+IDxicj4gPGJyPlwiO1xuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHRoaXMucXVlc3Rpb25zW2ldLm9wdGlvbnMubGVuZ3RoICsgMTsgaisrKSB7XG4gICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGUgPSBcXFwicmFkaW9cXFwiIG5hbWUgPSBcXFwiYW5zd2Vyc1wiICsgaSArIFwiaWQgPSBcXFwicVwiICsgaSArIFwiYVwiICsgaiArIFwidmFsdWUgPSBcXFwiYW5zd2VyXCIgKyBqICsgXCI+XCIgKyB0aGlzLnF1ZXN0aW9ucy5vcHRpb25zW2ldICsgXCI8YnI+XCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gbmV3IHF1ZXN0aW9uIGJveFxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiTmV3IFF1ZXN0aW9uOiA8aW5wdXQgdHlwZSA9IFxcXCJ0ZXh0XFxcIiBuYW1lID0gXFxcIm5ld1F1ZXN0aW9uXFxcIj5cIjtcblxuICAgICAgLy8gbmV3IGFuc3dlciBib3hcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIk5ldyBBbnN3ZXI6IDxpbnB1dCB0eXBlID0gXFxcInRleHRcXFwiIG5hbWUgPSBcXFwibmV3QW5zd2VyXFxcIj5cIjtcblxuICAgICAgLy8gbmV3IGZvdXIgb3B0aW9uIGJveGVzXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJPcHRpb24gXCIgKyBpICsgXCI6IDxpbnB1dCB0eXBlID0gXFxcInRleHRcXFwiIG5hbWUgPSBcXFwibmV3T3B0aW9uXCIgKyBpICsgXCI+XCI7XG4gICAgICB9XG5cbiAgICAgIC8vIFN1Ym1pdCBRdWVzdGlvbiBidXR0b25cbiAgICAgIC8vICEgd2UgbmVlZCB0byBncmFiIHRoZSB1c2VyIGlucHV0cyBhbmQgcGFzcyB0aGVtIGludG8gdGhlIGFkZFF1ZXN0aW9uIG1ldGhvZFxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiPGJ1dHRvbiBvbmNsaWNrPVxcXCJhZGRRdWVzdGlvbigpXFxcIj5TdWJtaXQgUXVlc3Rpb248L2J1dHRvbj48YnI+PGJyPlwiO1xuXG4gICAgICAvLyBUYWtlIFF1aXogYnV0dG9uXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8YnV0dG9uIG9uY2xpY2s9XFxcImV2YWx1YXRlKClcXFwiPlRha2UgUXVpejwvYnV0dG9uPjxicj48YnI+XCI7XG5cbiAgICAgIC8vIEdyYWRlIFF1aXogYnV0dG9uXG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8YnV0dG9uIG9uY2xpY2s9XFxcInNob3dTY29yZSgpXFxcIj5HcmFkZSBRdWl6PC9idXR0b24+XCI7XG4gIH1cblxuICAgIC8vIHRyYXZlcnNlcyBlYWNoIG9mIHRoZSBxdWVzdGlvbnMgdG8gdGFsbHkgY29ycmVjdCBhbnN3ZXJzXG4gICAgZXZhbHVhdGUoKSB7XG5cbiAgICAgIC8vIGdyYWIgZWFjaCBzZXQgb2YgYW5zd2VycyBmcm9tIHRoZSBIVE1MXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICAgIGxldCBgc3VibWl0QW5zd2VycyArIGkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImFuc3dlcnNcIiArIGkpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVja3MgZWFjaCBjaGVja2VkIGFuc3dlciB0byBzZWUgaWYgaXQgbWF0Y2hlcyB0aGUgY29ycmVjdCBhbnN3ZXIsIGlmIHNvIHdlIGFkZCB0byBvdXIgY29ycmVjdCBjb3VudFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdXNlckFuc3dlciA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdEFuc3dlcnNcIiArIChpICsgMSkuaWQpO1xuICAgICAgICBpZiAodXNlckFuc3dlci5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKHF1ZXN0aW9uLmV2YWx1YXRlKHRoaXMucXVlc3Rpb25zW2ldKS5hbnN3ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdENvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBlcmNlbnRhZ2UgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBwYWdlXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IHBhcnNlSW50KCh0aGlzLmNvcnJlY3RDb3VudCAvIDUpICogMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgICAvLyBjYWxjdWxhdGUgYW5kIGRpc3BsYXkgdGhlIGZpbmFsIHNjb3JlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgIHNob3dTY29yZSgpIHtcbiAgICAgICAgbGV0IHNjb3JlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpLmlubmVySFRNTCA9IFwiWW91ciBTY29yZSBpcyBcIiArIHRoaXMucGVyY2VudGFnZSArIFwiJVwiO1xuICAgICAgICBzY29yZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGRzIG5ldyB1c2VyIHF1ZXN0aW9uIHRvIHF1aXogYW5kIHJlcG9wdWxhdGVzIHBhZ2UgdG8gaW5jbHVkZSBuZXcgcXVlc3Rpb25cbiAgICAgIGFkZE5ld1F1ZXN0aW9uKHF1ZXN0aW9uLCBhbnN3ZXIsIGlucHV0cykge1xuICAgICAgICAvLyBhZGQgdGhlIG5ldyB1c2VyIHF1ZXN0aW9uIHRvIHRoZSBxdWl6XG4gICAgICAgIHZhciBuZXdRdWVzdGlvbiA9IG5ldyBRdWVzdGlvbihxdWVzdGlvbiwgYW5zd2VyLCBbaW5wdXRzWzBdLCBpbnB1dHNbMV0sIGlucHV0c1syXSwgaW5wdXRzWzNdXSk7XG4gICAgICAgIHRoaXMuYWRkUXVlc3Rpb24obmV3UXVlc3Rpb24pO1xuXG4gICAgICAgIC8vIHJlcG9wdWxhdGUgcGFnZVxuICAgICAgICB0aGlzLnBvcHVsYXRlUGFnZSgpO1xuICAgICAgfVxuICAgIH1cblxuLy8gYWRkIGluaXRpYWwgcXVlc3Rpb24gb2JqZWN0cyB0byBxdWl6IGNsYXNzXG5sZXQgcXVlc3Rpb24xID0gbmV3IFF1ZXN0aW9uKFwiV2hhdCBjb2xvciBpcyB0aGUgc2t5P1wiLCBcImJsdWVcIiwgW1wiYmx1ZVwiLCBcImJsYWNrXCIsIFwieWVsbG93XCIsIFwicmVkXCJdKTtcbmxldCBxdWVzdGlvbjIgPSBuZXcgUXVlc3Rpb24oXCJXaG8gaXMgdGhlIGN1cnJlbnQgcHJlc2lkZW50IG9mIHRoZSBVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2E/XCIsIFwiQmFyYWNrIE9iYW1hXCIsIFtcIkpvZSBCaWRlblwiLCBcIkRvbmFsZCBUcnVtcFwiLCBcIkJhcmFjayBPYmFtYVwiLCBcIkdlb3JnZSBXLiBCdXNoXCJdKTtcbmxldCBxdWVzdGlvbjMgPSBuZXcgUXVlc3Rpb24oXCJXaGF0IHdhcyBQcmluY2UncyBmYXZvcml0ZSBjb2xvcj9cIiwgXCJwdXJwbGVcIiwgW1wiYmx1ZVwiLCBcInB1cnBsZVwiLCBcImdvbGRcIiwgXCJzaWx2ZXJcIl0pO1xubGV0IHF1ZXN0aW9uNCA9IG5ldyBRdWVzdGlvbihcIkhvdyBtYW55IGNvbnRpbmVudHMgYXJlIHRoZXJlIGluIHRoZSB3b3JsZD9cIiwgXCI3XCIsIFtcIjE1MFwiLCBcIjFcIiwgXCI2XCIsIFwiN1wiXSk7XG5sZXQgcXVlc3Rpb241ID0gbmV3IFF1ZXN0aW9uKFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiB0aGUgTmV0aGVybGFuZHM/XCIsIFwiQW1zdGVyZGFtXCIsIFtcIkxvbmRvblwiLCBcIkJlcm5cIiwgXCJBbXN0ZXJkYW1cIiwgXCJDb3BlbmhhZ2VuXCJdKTtcbmxldCBxdWl6ID0gbmV3IFF1aXooKTtcbmZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG5xdWl6LmFkZFF1ZXN0aW9uKFwicXVlc3Rpb25cIiArIGkpO1xufVxuXG4vLyBjYWxsIHBvcHVsYXRlIHBhZ2UgbWV0aG9kXG5xdWl6LnBvcHVsYXRlUGFnZSgpO1xuXG4vLyBmdW5jdGlvbiB1c2VkIHRvIGNoZWNrIHRoYXQgYW4gYW5zd2VyIHdhcyBzZWxlY3RlZCBmb3IgZXZlcnkgcXVlc3Rpb25cbmZ1bmN0aW9uIGlzVGhlcmVOdWxsKHNldE9mQW5zd2Vycykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldE9mQW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB1c2VyQW5zd2VyID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldE9mQW5zd2Vyc1tpXS5pZCk7XG4gICAgaWYgKHVzZXJBbnN3ZXIuY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVHJhdmVyc2VzIGVhY2ggcXVlc3Rpb24gdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBudWxsICh1bmFuc3dlcmVkIHF1ZXN0aW9uKVxuLy8gISBXaGF0IGRvIHdlIGlucHV0IGludG8gdGhlIGlzVGhlcmVOdWxsIG1ldGhvZD8gQ2x1ZWxlc3MgdGJoXG52YXIgZmxhZyA9IHRydWU7XG5mb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIC8vIGZsYWcgPSBpc1RoZXJlTnVsbCgpOyBbbmVlZCBpbnB1dF1cbn1cblxuLy8gaWYgdGhleSBkaWQgbm90IGFuc3dlciBldmVyeSBxdWVzdGlvbiwgd2UgdGhyb3cgYW4gYWxlcnQgaW5zdGVhZFxuaWYgKCFmbGFnKSB7XG4gIGFsZXJ0KFwiWW91IG5lZWQgdG8gc2VsZWN0IGFuc3dlciBmb3IgZXZlcnkgcXVlc3Rpb24hXCIpO1xufVxuXG4vLyBpZiBvdXIgZmxhZyBpcyB0cnVlIChldmVyeSBxdWVzdGlvbiB3YXMgYW5zd2VyZWQsIHdlIHByb2NlZWQgd2l0aCBzY29yaW5nKVxuZWxzZSB7XG5cbiAgLy8gaW5zdGFudGlhdGUgdGhlIGFuc3dlcnMgYXJyYXkgYW5kIG51bWJlciBvZiBhbnN3ZXJzIGNvcnJlY3QgKHNjb3JlIGNvdW50KVxuICBsZXQgYW5zd2VycyA9IFtdO1xuICBsZXQgc2NvcmVDb3VudCA9IDA7XG5cbiAgLy8gdHJhdmVyc2VzIHRoZSBjaGVja2JveGVzIHRvIGZpZ3VyZSBvdXQgd2hldGhlciBvciBub3QgdGhlIGFuc3dlciBzZWxlY3RlZCBpcyBjb3JyZWN0XG4gIC8vIFVzaW5nIG91ciBhcnJheSB3ZSBzdG9yZSBcIkNcIiBmb3IgY29ycmVjdCBhbnN3ZXJzIGFuZCBcIklcIiBmb3IgaW5jb3JyZWN0IGFuc3dlcnNcbiAgZnVuY3Rpb24gZ3JhYkFuc3dlcnMoc2V0T2ZBbnN3ZXJzLCByZWFsQW5zd2VyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXRPZkFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB1c2VyQW5zd2VyID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldE9mQW5zd2Vyc1tpXS5pZCk7XG4gICAgICAgIGlmICh1c2VyQW5zd2VyLmNoZWNrZWQpIHtcbiAgICAgICAgICBpZiAodXNlckFuc3dlci52YWx1ZSA9PSByZWFsQW5zd2VyKSB7XG4gICAgICAgICAgICBhbnN3ZXJzLnB1c2goXCJDXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFuc3dlcnMucHVzaChcIklcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvZiBvdXIgcXVlc3Rpb25zIHRvIHVzZSB0aGUgZ3JhYkFuc3dlcnMgbWV0aG9kIG9uIGVhY2hcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWl6LnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGdyYWJBbnN3ZXJzKFwic3VibWl0QW5zd2Vyc1wiICsgKGkgKyAxKSwgdGhpcy5xdWVzdGlvbnMuYW5zd2VyKTtcbiAgfVxuXG4gIC8vIGRldGVybWluZSBob3cgbWFueSBhbnN3ZXJzIHRoZXkgZ290IGNvcnJlY3RcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFuc3dlcnNbaV0gPT0gXCJDXCIpIHtcbiAgICAgIHNjb3JlQ291bnQrKztcbiAgICB9XG4gIH1cbn1cblxuLyogVG8gRG8gTGlzdCAqL1xuLy8gMS4gQ2hlY2sgdGhhdCBldmVyeSBxdWVzdGlvbiB3YXMgYW5zd2VyZWQgKGZpeCBudWxsIGlucHV0KVxuLy8gMi4gUHJvcGVybHkgYWxsb3cgdGhlIHVzZXIgdG8gYWRkIG5ldyBxdWVzdGlvbnMgKGdyYWIgdXNlciBpbnB1dClcbi8vIFF1ZXN0aW9uOiBEbyB3ZSBoYXZlIHRvIGRvIGEgbnVsbCBjaGVjayB0byBzZWUgaWYgdGhlIHVzZXIgaW5wdXQgYWxsIHRoZSBmaWVsZHMgdG8gYWRkIGEgbmV3IHF1ZXN0aW9uIHRvbz9cbiJdfQ==