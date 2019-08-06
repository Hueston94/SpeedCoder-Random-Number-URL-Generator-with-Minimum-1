var int1 = Math.floor(Math.random() * (81 - 80 + 1) + 80);
var str1 = "http://www.speedcoder.net/lessons/customcode/";
var str2 = int1.toString();
var str3 = "/";
var res = str1.concat(str2, str3);
window.location.href = res;