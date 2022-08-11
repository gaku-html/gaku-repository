const headerElement = document.getElementById('header');

document.addEventListener('scroll', function(){
  // const scrollY = window.pageYOffset;
  // if(scrollY > 0) {
  //   document.getElementById('header').classList.add('active');
  // } else {
  //   document.getElementById('header').classList.remove('active');
  // }s

  if(document.getElementById('hero').getBoundingClientRect().bottom < 0){
    headerElement.classList.add('active');
  }
});










// スクロールしたらなにかする
// document.addEventListener('scroll', function(){ });



//(document.getElementById('hero').getBoundingClientRect().bottom < 0)
// 対象の要素の下まで取得し0より大きくなったら