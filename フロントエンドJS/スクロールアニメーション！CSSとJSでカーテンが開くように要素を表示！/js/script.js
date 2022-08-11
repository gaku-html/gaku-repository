const showElements = document.querySelectorAll(".animation-target");

window.addEventListener("scroll", function(){
  for (let i = 0; i < showElements.length; i++) {
    const getElementDistance = showElements[i].getBoundingClientRect().top + showElements[i].clientHeight * 0.5;
    if(window.innerHeight > getElementDistance){
      showElements[i].classList.add("show");
    }
  }
});






// i番目の上からの距離
// const getElementDistance = showElements[i].getBoundingClientRect().top;


// 現在の画面の見えている高さ
// window.innerHeight 



