(function(meme){
  function buildQuiz(){
        const output = [];

        myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [a,b,c];

        
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What is the best color of the alphabelt?",
      answers: {
        a: "7",
        b: "amongus",
        c: "no"
      },
      correctAnswer: "a"
    },
    {
      question: "did you say nerd?",
      answers: {
        a: "Not nerd, node",
        b: "yes",
        c: "um actully..."
      },
      correctAnswer: "b"
    },
    {
      question: "What comes next?",
      answers: {
        a: "Angular",
        b: "123",
        c: "c",
        d: "what?"
      },
      correctAnswer: "c"
    }
  ]; buildQuiz();
  submitButton.addEventListener('click', showResults);})();