const content = document.querySelectorAll('.container');
const contentArr = Array.from(content);
let current = function initSlider() {
  let print = [];
    print = contentArr[0].innerHTML;
  console.log(print)
  return print;
};

// console.log()

let next = document.querySelector('.next');
next.addEventListener('click', nextSlide);

let prev = document.querySelector('.prev');
prev.addEventListener('mousedown', prevSlide);

function prevSlide(){
  
  console.log(current);
}

function nextSlide() {
  
}

document.getElementById('current').innerHTML = current();
