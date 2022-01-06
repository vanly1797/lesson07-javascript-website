// Bài 01 - START
let a = prompt("Nhập vào cạnh a: ");
let b = prompt("Nhập vào cạnh b: ");
let c = prompt("Nhập vào cạnh c: ");
let p = Number(a) + Number(b) + Number(c);
console.log("Chu vi tam giác = " + p);
let nuacv = (p / 2).toFixed(1);
console.log(nuacv);
let temp = (nuacv * (nuacv - Number(a)) * (nuacv - Number(b)) * (nuacv - Number(c)));
console.log("Diện tích tam giác = " + Math.sqrt(temp).toFixed(2));
let bk = ((Number(a) * Number(b) * Number(c)) / (4 * Math.sqrt(temp).toFixed(2)));
console.log("Bán kính đường tròn ngoại tiếp = " + bk);

const pi = 3.14;
let dtht = (bk * bk * pi);
console.log("Diện tích hình tròn = " + dtht.toFixed(2));
// Bài 01 - END

// Bài 02 - START
let _baihat = "Hãy trao cho anh hãy trao cho anh Hãy trao cho anh thứ anh đang mong chờ (oh oh oh oh) Hãy trao cho anh hãy trao cho anh Hãy mau làm điều ta muốn vào khoảnh khắc này đê (oh oh oh oh)"
let _xoakt = _baihat.replace(/\s/g, '');
console.log(_xoakt.length);
console.log(_baihat.toUpperCase());
console.log(_baihat.toLowerCase());
console.log(_baihat.replace(/anh/g, "em"));
// Bài 02 - END

// Bài 03 - START
let x = 10;
// a) x++ - --x + x-- => x++ = 10,  --x = 9,  x-- = 9
// b) ++x - x++ + x-- + x++ =>  ++x = 11, x++ = 11, x-- = 11, x++ = 11
// Bài 03 - END