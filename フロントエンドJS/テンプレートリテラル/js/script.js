const price = 1000,
      text = `商品の元値は${price}円で、税込み価格は${price * 1.1}円です`;

document.getElementById("output").textContent = text;

// テンプレートリテラル
// 普通は　"" + "" などで文章をつなげないとならないが、${}で囲えばOK
// ただし、IEでは使えないため、ポリフィルなどで変換しないとだめ






