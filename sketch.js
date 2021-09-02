function setup() {
  createCanvas(800, 800);
  /* var number = [5,54,6,77,59,1,55,78,34,61]
  for(var i = 0 ; i<10 ; i++){
    if(number[i]%5 === 0){
    console.log(number[i])
    }
  } */
  //factors(12);
  //countFactors(12);
  //primaryNumber(50);
  //perfectNumber(28);
  //series1();
  //series2();
  //series3();
  //factorial(6);
  //series4();
  //series5();
  //series6();
  //reverseNumber(46);
  //series7();
  //whileloop2(6154);
  //automorphic(371);
  //digitsnumber(642);
  //neonnumber(4);
  //automorphic(4)
  //karpekar(45);
  //speacialnumber(14);
  //disarium(13);
  //ducknumber(51);
  //magicnumber(125);
  //series8();
  //series9();
  //swap(1,2);
  //swap2(1,2);
  //swapArray();
  //doubledimension3();
  //binaryArray();
  //series12();
  //transpose();
  //bordernumbers2();
  //vowels();
  //pellidromWord();
  //replace()
  //wordnumber()
  //maximumCharacters()
  //vowelfrequency()
  //commonelements();
  //words();
  //reverse11()
  //linearsearch("France")
  //ascii()
  //magicword("ac")
  pellidrom2()
}

function draw() {
  background("black");
}

function factors(a) {
  for (var i = 1; i <= a; i++) {
    if (a % i === 0) {
      console.log(i);
    }
  }
}

function countFactors(a) {
  var factorNumber = 0;
  for (var i = 1; i <= a; i++) {
    if (a % i === 0) {
      factorNumber += 1;
    }
  }
  console.log(factorNumber);
}

function primaryNumber(a) {
  var factorNumber = 0;
  for (var i = 1; i <= a; i++) {
    if (a % i === 0) {
      factorNumber += 1;
    }
  }
  if (factorNumber === 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function perfectNumber(a) {
  var factor = 0;
  for (var i = 1; i < a; i++) {
    if (a % i === 0) {
      factor = factor + i;
    }
  }
  if (factor === a) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//1 , -3 , 5 , -7 .... 10 terms

function series1() {
  for (var i = 1; i < 18; i = i + 4) {
    console.log(i);
    console.log(-(i + 2));
  }
}

//0 , 3 , 8 , 15 , 24 .. 10 terms
function series2() {
  var number = 0;
  for (var i = 3; i < 22; i = i + 2) {
    console.log(number);
    number = number + i;
  }
}

function series3() {
  for (var i = 1; i < 11; i++) {
    console.log(Math.pow(10, i));
  }
}

function factorial(a) {
  var number = 1;
  for (var i = 2; i <= a; i++) {
    number = number * i;
  }
  console.log(number);
}

function series4() {
  var number = 0;
  for (var i = 0; i < 11; i++) {
    number = number + Math.pow(10, i) * 5;
    console.log(number);
  }
}

function series5() {
  var number = 0;
  for (var i = 1; i < 11; i++) {
    number = 1;
    for (var j = 1; j <= i; j++) {
      number = number * j;
    }
    console.log(number);
  }
}

function series6() {
  var number = 0;
  for (var i = 1; i < 101; i++) {
    number = 0;
    for (var j = 1; j <= i; j++) {
      if (i % j === 0) {
        number = number + 1;
      }
    }
    if (number === 2) {
      console.log(i);
    }
  }
}

function reverseNumber(a) {
  var tenth = a % 10;
  var unique = Math.trunc(a / 10);
  console.log(tenth * 10 + unique);
}

function series7() {
  var tenth;
  var unique;
  var number = [41, 74, 89, 53, 54, 26, 67, 12, 34, 71];
  for (var i = 0; i < 10; i++) {
    tenth = number[i] % 10;
    unique = Math.trunc(number[i] / 10);
    console.log(tenth * 10 + unique);
  }
}

function whileloop(a) {
  while (a > 0) {
    var rem = a % 10;
    a = Math.trunc(a / 10);
    console.log(rem);
  }
}

function whileloop2(a) {
  var number = 0;
  while (a > 0) {
    var rem = a % 10;
    a = Math.trunc(a / 10);
    number = number + rem;
  }
  console.log(number);
}

//371 = 3^3+7^3+1^3
function amstrong(a) {
  var number = 0;
  var copy = a;
  while (a > 0) {
    var rem = a % 10;
    a = Math.trunc(a / 10);
    number = number + Math.pow(rem, 3);
  }
  if (copy === number) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function digitsnumber(a) {
  var number = 0;
  while (a > 0) {
    a = Math.trunc(a / 10);
    number = number + 1;
  }
  console.log(number);
}

//9^2 = 81, 8+1 = 9
function neonnumber(a) {
  var number = 0;
  var square = Math.pow(a, 2);
  while (square > 0) {
    rem = square % 10;
    square = Math.trunc(square / 10);
    number = number + rem;
  }
  if (a === number) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function automorphic(a) {
  copy = a;
  b = Math.pow(a, 2);
  var digitsa = 0;
  var number = 0;
  while (a > 0) {
    digitsa = digitsa + 1;
    a = Math.trunc(a / 10);
  }

  number = b % Math.pow(10, digitsa);
  if (copy === number) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//karpekar => 45^2 = 2025, 20+25=45
function karpekar(a) {
  var square = Math.pow(a, 2);
  var copy = square;
  var digits = 0;
  while (square > 0) {
    digits = digits + 1;
    square = Math.trunc(square / 10);
  }
  if (
    (a =
      Math.trunc(copy / Math.pow(10, digits / 2)) +
      (copy % Math.pow(10, digits / 2)))
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//145 = 1!+4!+5!
function speacialnumber(a) {
  var copy = a;
  var number2 = 0;
  while (a > 0) {
    var rem = a % 10;
    a = Math.trunc(a / 10);
    var number1 = 1;
    for (var i = 1; i <= rem; i++) {
      number1 = number1 * i;
    }
    number2 = number2 + number1;
  }
  if (copy === number2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//135 = 1^1 + 3^2 + 5^3
function disarium(a) {
  var copy = a;
  var digits = [];
  var digitsnum = 0;
  var number = 0;
  while (a > 0) {
    digits[digitsnum] = a % 10;
    digitsnum += 1;
    a = Math.trunc(a / 10);
  }
  for (var i = 0; i < digitsnum; i++) {
    number = number + Math.pow(digits[i], digitsnum - i);
  }
  if (copy === number) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function ducknumber(a) {
  var number = 0;
  while (a > 0) {
    var rem = a % 10;
    a = Math.trunc(a / 10);
    if (rem === 0) {
      number += 1;
    }
  }
  if (number > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//magicnumber  145 => 1+4+5 = 10 => 1+0 = 1
function magicnumber(a) {
  var copy = a;

  while (copy > 9) {
    var number = 0;
    a = copy;
    while (a > 0) {
      var rem = a % 10;
      number = number + rem;
      a = Math.trunc(a / 10);
    }
    copy = number;
  }
  if (copy === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function series8() {
  var A = [1, 2, 3, 4, 5];
  var B = [6, 7, 8, 9, 10];
  var C = [];
  for (var i = 0; i < 5; i++) {
    C[i] = A[i];
    C[i + 5] = B[i];
  }
  for (var i = 0; i < 10; i++) {
    console.log(C[i]);
  }
}

function series9() {
  var A = [1, 3, 5, 7, 9];
  var B = [2, 4, 6, 8, 10];
  var C = [];
  for (var i = 0; i < 9; i = i + 2) {
    C[i] = A[i / 2];
    C[i + 1] = B[i / 2];
  }
  for (var i = 0; i < 10; i++) {
    console.log(C[i]);
  }
}

function swap(a, b) {
  var c = a;
  a = b;
  b = c;
  console.log(a);
  console.log(b);
}

function swap2(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a);
  console.log(b);
}

function swapArray() {
  var array = [10, 20, 30, 40, 50];
  for (var i = 0; i < array.length / 2; i++) {
    var number = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = number;
  }
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function doubledimension() {
  var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(array[i][j]);
    }
    console.log(" ");
  }
}

function doubledimension2() {
  var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (var i = 0; i < 3; i++) {
    console.log(array[i][2 - i]);
  }
}

function doubledimension3() {
  var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (var i = 0; i < 3; i++) {
    console.log(array[i][i]);
  }
}

function binaryArray() {
  var array = [
    [0, 1, 1],
    [51, 0, 1],
  ];
  var flag = 0;
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
      if (array[i][j] !== 0 && array[i][j] !== 1) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      break;
    }
  }
  if (flag === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//finding the sum of each row
function series10() {
  var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  for (var i = 0; i < 4; i++) {
    var num = 0;
    for (var j = 0; j < 3; j++) {
      num = num + array[i][j];
    }
    console.log(num);
  }
}

//sum of each colum
function series11() {
  var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];
  for (var i = 0; i < 3; i++) {
    var num = 0;
    for (var j = 0; j < 4; j++) {
      num = num + array[j][i];
    }
    console.log(num);
  }
}

//numbers below the left diagonal
function series12() {
  //var array = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
  var array = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
  ];
  for (var i = 0; i < 3; i++) {
    for (var j = 3 - i; j < 3; j++) {
      console.log(array[i][j]);
    }
  }
}

function transpose() {
  var array = [
    [10, 20],
    [30, 40],
    [50, 60],
  ];
  var array2 = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
      array2.push(array[i][j]);
      console.log(array2);
    }
  }
}

function bordernumbers() {
  var array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 5; j++) {
      if (i === 0 || j === 0 || i === 3 || j === 4) {
        console.log(array[i][j]);
      }
    }
  }
}

function bordernumbers2() {
  var array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];
  for (var i = 1; i < 3; i++) {
    for (var j = 1; j < 4; j++) {
      console.log(array[i][j]);
    }
  }
}

function vowels() {
  var array = [
    ["A", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var s = array[i][j].toLowerCase();
      if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
        console.log(array[i][j]);
      }
    }
  }
}

function pellidromWord(a) {
  var word = a;
  var rev = "";
  for (var i = 0; i < word.length; i++) {
    ch = word.charAt(i);
    //console.log(ch)
    rev = ch + rev;
  }
  //console.log(rev)
  if (word === rev) {
    console.log(word);
  }
}

function replace() {
  var word = "computer";
  var word2 = "";
  for (var i = 0; i < word.length; i++) {
    var a = word.charAt(i);
    if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
      a = "*";
    }
    word2 = word2 + a;
  }
  console.log(word2);
}

function wordnumber() {
  var sentence = "  My name, is Yena  ";
  sentence = sentence.trim();
  var words = sentence.split(",");
  console.log(words);
  var num = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === " ") {
      num = num + 1;
    }
  }
  //console.log(num+1)
}

function maximumCharacters() {
  var sentence = "Football is the best sport";
  var words = sentence.split(" ");
  var num1 = 0;
  var num2 = 100;
  var num3 = 0;
  for (var i = 0; i < words.length; i++) {
    num1 = words[i].length;
    if (num1 < num2) {
      num2 = num1;
      num3 = i;
    }
  }
  console.log(words[num3]);
}

function vowelfrequency() {
  var word = "snake";
  var character = 0;
  var vowel = 0;
  for (var i = 0; i < word.length; i++) {
    if (
      word.charAt(i) === "a" ||
      word.charAt(i) === "e" ||
      word.charAt(i) === "i" ||
      word.charAt(i) === "o" ||
      word.charAt(i) === "u"
    ) {
      vowel += 1;
    }
    character += 1;
  }
  console.log(vowel);
}

function commonelements() {
  var a = [1, 2, 3, 4, 5];
  var b = [1, 3, 5, 7, 9];
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        console.log(b[j]);
      }
    }
  }
}

//write a program to input a sentence and display each word with the frequency of its vowel
function words() {
  var sentence = "A book contains knowledge";
  sentence = sentence.trim();
  sentence = sentence.toLowerCase();
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    console.log(words[i]);
    var vowel = 0;
    for (var j = 0; j < words[i].length; j++) {
      var letter = words[i].charAt(j);
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        vowel = vowel + 1;
      }
    }
    console.log(vowel);
  }
}

//reversing the word sequence
function reverse11(){
  var sentence = "my name is Yena"
  var words = sentence.split(' ')
  var sentence2 = ''
  for(var i = 0 ; i<words.length ; i++){
    sentence2 = words[i]+' '+sentence2
  }
  sentence2.trim()
  console.log(sentence2)
}

//linear search
function linearsearch(a){
  var array = ["India", "Canada", "US", "Korea", "Spain"]
  var sign = 0
  for(var i = 0 ; i<array.length ; i++){
    if(array[i] === a){
      console.log("Search Successful")
      sign = 1
      break
    }
  }
  if(sign === 0){
    console.log("Search Unsuccessful")
  }
}

function ascii(){
  var ch = 'a'
  a = ch.codePointAt(0)
  console.log(a)
}

function magicword(a){
  a = a.toLowerCase()
  var flag = 0
  for(var i = 0 ; i<a.length-1 ; i++){
    if(a[i].codePointAt(0) === a[i+1].codePointAt(0)-1){
      console.log(true)
      flag = 1
      break
    }
  }
  if(flag === 0){
    console.log(false)
  }
}

function pellidrom2(){
  var sentence = "mom and dad are the best"
  var words = sentence.split(' ')
  for(var i = 0 ; i<words.length ; i++){
    pellidromWord(words[i])
  }
}