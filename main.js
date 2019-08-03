// 變數 變數名稱 = 值
var text = "我是標題";       // 字串
var number = 7;             // 整數
var time = 1.5;             // 浮點數
var check = true;           // 布林值 true / false

// 網頁文件.透過 ID 取得元素.插入 HTML = 值;
document.getElementById("title").innerHTML = time;

// 運算子
var a = 10;
var b = 5;
var c = 1;
// 等號右邊先運算再指定到左邊 js是從上面往下讀取 所以之後寫的會蓋掉前面的
c = a + b;
c = a - b;
c = a * b;
c = a / b;
c = a % b;

document.getElementById("box1").innerHTML = c;

var d = 1;
var e = 1;
var f = 0;

f = d++;    // 先給值再遞增
f = ++e;    // 先遞增再給值
document.getElementById("box2").innerHTML = f;


