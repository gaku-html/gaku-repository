
const today = new Date(),
days = ["日","月","火","水","木","金","土"]

// let outputText = "今は";
// outputText += "「" + today.getFullYear() + "年";
// outputText += (today.getMonth() + 1) + "月";
// outputText += today.getDate() + "日 ";
// outputText += today.getHours() + "時";
// outputText += today.getMinutes() + "分";
// outputText += today.getSeconds() + "秒";
// outputText += today.getMilliseconds() + "ミリ秒";
// outputText += "(" + days[today.getDay()] + ")";
// outputText += "」です";

function outputDate(date){
let outputText = "「" + date.getFullYear() + "年";
outputText += (date.getMonth() + 1) + "月";
outputText += date.getDate() + "日 ";
outputText += date.getHours() + "時";
outputText += date.getMinutes() + "分";
outputText += date.getSeconds() + "秒";
outputText += date.getMilliseconds() + "ミリ秒";
outputText += "(" + days[date.getDay()] + ")";
outputText += "」です";
return outputText;
}


document.getElementById("date").textContent = "今は" + outputDate(today);

const targetDate = new Date(2021, 7 - 1, 23);
console.log(Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)));
document.getElementById("countDown").textContent = "オリンピックまであと" + Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)) + "日";


today.setDate(today.getDate() + 1);
document.getElementById("tomorrow").textContent = "明日の今は" + outputDate(today);



// 曜日は数字になっている
// 日曜日　０
// 月曜　１

// 下記は同じ意味。　変数の再定義の際便利
// outputText = outputText + today.getFullYear() + "年"
// outputText += today.getFullYear() + "年"


// .setDate() また新たに日付を設定する