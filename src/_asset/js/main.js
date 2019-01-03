let current = [];
const content = document.querySelectorAll('.container');
const contentArr = Array.from(content);
current = contentArr[0].innerHTML
console.log(contentArr[1]);

let prev = document.querySelector('.prev');
prev.addEventListener('mousedown', prevSlide);
let next = document.querySelector('.next');
next.addEventListener('click', nextSlide);
initSlider();

function initSlider() {
  current = document.querySelector('.current');
  console.log(current);
}

function prevSlide(){
  // const setDefault = contentArr[0].innerHTML;
  alert('muie psd');
  }
  //   foreach(content) in contentArr
  //     content.classList.add('current');
  // }
  
  function nextSlide() {
    // contentArr.length.push(current)
    alert('muie psd');
  }

  // testing git sync