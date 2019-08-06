//function randomIntFromInterval(min, max) { // min and max included 
//  return Math.floor(Math.random() * (max - min + 1) + min);
//}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var int1 = randomIntFromInterval(80, 81);
var str1 = "http://www.speedcoder.net/lessons/customcode/";
var str2 = int1.toString();
var str3 = "/";
var res = str1.concat(str2, str3);
window.location.href = res;
  
// Created Bookmarklet using https://mrcoles.com/bookmarklet/
  