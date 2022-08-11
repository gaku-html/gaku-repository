const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})

// const targetElement = document.querySelectorAll(".animationTarget");
// document.addEventListener("scroll", function () {
//   for (let i = 0; i < targetElement.length; i++) {
//     const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
//     if (window.innerHeight > getElementDistance){
//       targetElement[i].classList.add("show");
//     }
//   }
// });






// targetElementの上からの距離と要素自身の高さを取得してあげて、現在どれくらいスクロールされているか常に比較しながら、見えているか判定する


// .getBoundingClientRect().top　メソッド
// 上からの距離を測ることができる


// (window.innerHeight)
// 現在のブラウザの高さを取得



// １対象を変数に入れる
// const targetElement = document.querySelectorAll(".animationTarget");

// ２それぞれの対象をfor文でまわす
// for (let i = 0; i < targetElement.length; i++) {

// ３上からの距離と要素自身の高さを確認（とる）する。そして現在どれくらいスクロールしてるか常に比較するようにする　←これを変数にいれる
// const getElementDistance = targetElement[i].getBoundingClientRect().top

// ４　３をスクロールするたびに取得する
// document.addEventListener("scroll", function() {}

// ５　if文で今のブラブザの高さを確認して対象と比較するものをつくる
// if (window.innerHeight > getElementDistance) {}

// ６ ５の条件になったら対象にクラスをつけて操作する
// targetElement[i].classList.add("show");

// ７　対象が表示されるときに余裕を出すため、数値をプラスして上げる
// 今回は対象の高さの半分くらいをプラスした
// + targetElement[i].clientHeight * 0.6













// 