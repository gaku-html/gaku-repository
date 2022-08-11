const tax = 1.1;


console.log(calculation(120));
console.log(calculation(150));


function insertText(itemPrice, element){
  function calculation(price) {
  return Math.floor(price * tax);
}

  document.getElementById(element).textContent = + itemPrice +"円の商品の税込価格は"+ calculation(itemPrice) +"です。";
}
insertText(100, "result");
insertText(200, "result2");
insertText(250, "result3");




