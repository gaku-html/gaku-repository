
window.addEventListener("scroll",function(){
  let scroll = document.documentElement.scrollTop;
  document.getElementById("scrollValue").textContent = scroll;

  if(scroll > 300){
    document.querySelector("main").classList.add("test");
  }else{
    document.querySelector("main").classList.remove("test");
  }
});
















// 基本的にスクロールしたら　何々する　という処理は
// windowオブジェクトに対してスクロールイベントを追加してあげる

// 現在のスクロール値をとる
// document.documentElement.scrollTop

// HTMLの要素を取得。下記だとmainタグを取得
// querySelector("main")

