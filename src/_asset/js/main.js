const content = document.querySelectorAll('.container');
const contentArr = Array.from(content);

function initSlider() {
  let current = contentArr;
  let print = "";
  for(var i = 0; i < current.length; i++){
    print = current[0].innerHTML;
  }
  return print;
};

document.getElementById('current').innerHTML = initSlider();
  
  // function prevSlide(){
  //   // const setDefault = cont entArr[0].innerHTML;
  //   alert('muie la ficat');
  // }
  // //   foreach(content) in contentArr
  // //     content.classList.add('current');
  // // }

  // next.addEventListener('click', nextSlide);
  // let prev = document.querySelector('.prev');
  // prev.addEventListener('mousedown', prevSlide);
  // let next = document.querySelector('.next');
  
  // function nextSlide() {
  //   // contentArr.length.push(current)
  //   alert('muie psd');
  // }

