const content = document.querySelectorAll('.container');
const contentArr = Array.from(content);

let current = function initSlider() {
    print = contentArr[0].innerHTML;
  return print;
};

let next = document.querySelector('.next');
next.addEventListener('click', nextSlide);

let prev = document.querySelector('.prev');
prev.addEventListener('mousedown', prevSlide);

function prevSlide(){
  p1 = contentArr[--length].innerHTML;
  document.getElementById('current').innerHTML = p1;
  return p1;
}

function nextSlide() {
  n1 = contentArr[++length].innerHTML;
  document.getElementById('current').innerHTML = n1;
  return n1;
  }

document.getElementById('current').innerHTML = current();
