const item = {
  // キー：バリュー
  name: "パソコン",
  price: 100000,
  sale: true,
  parts: ["CPU","メモリ","HDD"],
  a: {
    b: "テスト"
  }
}

item["c"] = "テスト2";

document.getElementById("name").textContent = "商品名は" + item.name;
document.getElementById("price").textContent = "値段は" + item.price + "円です。";



if(item["sale"]){
  document.getElementById("sale").textContent = item["name"]+"はセール中です。";
}

let texts = '';
for(let i = 0; i < item["parts"].length; i++){
  texts += item["parts"][i];
  if(i !== item["parts"].length - 1){
    texts += "・";
  }
}
document.getElementById("parts").textContent = item["name"] + "のパーツは" + texts + "です。";

document.getElementById("test").textContent = item["a"]["b"];
document.getElementById("test2").textContent = item["a"]["b"];

console.table(item);

// 連想配列の呼び出し方法は2つある
// item.name;
// item("name");

// 連想配列の中に連想配列を書くこともできる
// 呼び出すときは
// item["a"]["b"]

// 配列が多すぎて今どんな状態か確認したいとき
// console.table(item);







