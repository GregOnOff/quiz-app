'use strict'

const submitButton = document.querySelector('[data-js="submitButton"]');
const form = document.querySelector('[data-js="form"]')
// input 
const questionTextarea = document.querySelector('[data-js="questionTextarea"]');
const answerTextarea = document.querySelector('[data-js="answerTextarea"]');
const clc = document.getElementById('clc');
const clc2 = document.getElementById('clc2');
const maxChars = questionTextarea.getAttribute("maxlength")


submitButton.addEventListener('click', (event)  => {
    event.preventDefault();
    const newCard = document.createElement('section');
    newCard.classList.add('new-quiz-card'); 
    
    newCard.innerHTML =`
  <h2>Quizz-App</h2>
  <p class="card--question">${questionTextarea.value}</p>
  <button class="card-ans-btn">Show Answer</button>
  <p class="card-answer card-answer-hide">
  ${questionTextarea.value}
  </p>
  <ul class="tag-list">
    <li class="card-tag">testTag</li>
    <li class="card-tag">CSS</li>
    <li class="card-tag">Programming</li>
    <li class="card-tag">Learning</li>
  </ul>`

  document.body.append(newCard);
});

// send form data 








questionTextarea.addEventListener("input", () => {
    const remaining = maxChars - questionTextarea.value.length;
    clc.textContent = `${remaining} characters remain`
    console.log(questionTextarea.value)

});

answerTextarea.addEventListener("input", () => {
    const remaining = maxChars - answerTextarea.value.length;
    clc2.textContent = `${remaining} characters remain`

});




