const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
 
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
 
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too :)';
});
 
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
 
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

//fake input
//-- See full documentation for TypeIt at https://typeitjs.com.

new TypeIt('#realInput', {
  startDelay: 400,
  strings: 'Alex',
  afterComplete: () => {
    new TypeIt('#fakeInput', {
      startDelay: 400,
      strings: 'MacArthur',
    }).go();
  }
}).go();
