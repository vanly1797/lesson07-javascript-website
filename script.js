//Bài 01 - START
var a = prompt("Nhập vào giá trị a: ")
var b = prompt("Nhập vào giá trị b: ")

console.log("Căn bậc hai của a = " + Math.sqrt(a));
console.log("Căn bậc hai của b = " + Math.sqrt(b));
//Bài 01 - END

//Bài 02 - START
var cd = prompt("Nhập vào độ dài cạnh đáy: ");
var ch = prompt("Nhập vào chiều cao: ");
var dt = (cd * ch) / 2;
console.log("Diện tích tam giác = " + dt);
//Bài 02 - END

//Bài 03 - START
const temp1 = 32;
const temp2 = 1.8;
var do1 = prompt("Nhập vào độ F thứ nhất: ");
var do2 = prompt("Nhập vào độ F thứ hai: ");
var doc1 = (do1 - temp1) / temp2;
var doc2 = (do2 - temp1) / temp2;

console.log("Độ C thứ nhất = " + doc1.toFixed(1));
console.log("Độ C thứ hai = " + doc2.toFixed(1));
//Bài 03 - END

//Bài 04 - START
const temp3 = 1000;

var km1 = prompt("Nhập vào số km thứ nhất: ");
var km2 = prompt("Nhập vào số km thứ hai: ");
var m1 = km1 * temp3;
var m2 = km2 * temp3;

console.log("Số m thứ nhất sau khi chuyển đổi = " + m1);
console.log("Số m thứ hai sau khi chuyển đổi = " + m2);
//Bài 04 - END