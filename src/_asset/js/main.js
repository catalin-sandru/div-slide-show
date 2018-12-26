let current = document.querySelectorAll('.current');
const content = document.querySelectorAll('.container');
let contentArr = Array.from(content);
// console.log(content);
console.log(contentArr);

current = [];
console.log(current);
let prev = document.querySelector('.prev');
prev.addEventListener('mousedown', prevSlide);
let next = document.querySelector('.next');
next.addEventListener('click', nextSlide);



function prevSlide(){
  alert('muie psd');
}

function nextSlide (){
  alert('muie psd');
}
