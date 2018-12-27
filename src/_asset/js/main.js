let current = document.querySelectorAll('.current');
const content = document.querySelectorAll('.container');
const contentArr = Array.from(content);
console.log(contentArr);

console.log(current);
let prev = document.querySelector('.prev');
prev.addEventListener('mousedown', prevSlide);
let next = document.querySelector('.next');
next.addEventListener('click', nextSlide);
current = contentArr.length[0];

function initSlider() {
  contentArr[0].innerHTML;
}

console.log(initSlider);

function prevSlide(){
  const setDefault = contentArr[0].innerHTML;
  
  foreach(content) in contentArr
    content.classList.add('current');
}

function nextSlide() {
  contentArr.length.push(current);
}