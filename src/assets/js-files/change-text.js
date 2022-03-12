// var textArray = new Array();
// textArray.push("Hello, my name is")
// textArray.push("Apa Khabar, nama saya adalah")
// textArray.push("你好, 我的名字是")
// textArray.push("こんにちは, 私の名前は")
var textArray = ["Hello", "Apa Khabar", "你好", "こんにちは"];
var counter = 0;
var elem = document.getElementById("el");
var inst = setInterval(changeText, 3000);

function changeText() {
  elem.innerHTML = textArray[counter];
  counter++;
  if(counter >= textArray.length) {
    counter = 0;
  }
}