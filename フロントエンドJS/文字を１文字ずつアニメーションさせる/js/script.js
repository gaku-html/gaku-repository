const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++) {
const targetElement = animationTargetElements[i],
  texts = targetElement.textContent,
  textsArray = [];

  targetElement.textContent = "";

  for(let j = 0; j < texts.split("").length; j++){
    const t = texts.split("")[j] ;
    if(t  === " "){
      textsArray.push(" ");
    }else{
    textsArray.push('<span><span style="animation-delay: '+ ((j * 0.1) + .3) +'s;">' + t + '</span></span>');
    }
  }
  
  for(let k = 0; k < textsArray.length; k++){
    targetElement.innerHTML += textsArray[k];
  }
}










// 要素.textContentとやると文字列を取得できる
// targetElement.textContent

// 一文字ずつバラバラに配列にして取得してくれる
// texts.split("")

// 一文字ずつアニメーションにするには、一文字ずつspanで囲む必要がある








// /