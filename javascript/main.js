'use strict'
// TOGGLE BTN
const bookmark_button = document.querySelector('[data-js="bookmark-icon"]');

bookmark_button.addEventListener('click', () => {

    bookmark_button.classList.toggle('card-bm-icon-js');
})

// ANSWER BTN

const ans_btn = document.querySelector('[data-js="ans_btn"]');
const hide_show = document.querySelector('[data-js="hidden_shown"]');

ans_btn.addEventListener('click', () => {
    hide_show.classList.toggle('card-answer-hide');
    if (ans_btn.textContent === 'Show Answer') {
        ans_btn.textContent = 'Hide Answer';
    } else ans_btn.textContent ='Show Answer';
    

});