
function checkDivisible() {
  let num = Number(document.getElementById("q1").value);
  if (num % 6 === 0 && num % 9 === 0) {
    document.getElementById("ans1").innerText = num + " is divisible by 6 and 9";
  } else {
    document.getElementById("ans1").innerText = num + " is NOT divisible by 6 and 9";
  }
}


function checkVoting() {
  let age = Number(document.getElementById("age").value);
  if (age >= 18) {
    document.getElementById("ans2").innerText = "Eligible to vote";
  } else {
    document.getElementById("ans2").innerText = "Not eligible to vote";
  }
}


function checkRelation() {
  let x = Number(document.getElementById("x").value);
  let y = Number(document.getElementById("y").value);
  if (x > y) {
    document.getElementById("ans3").innerText = x + " is greater than " + y;
  } else if (x < y) {
    document.getElementById("ans3").innerText = x + " is less than " + y;
  } else {
    document.getElementById("ans3").innerText = x + " is equal to " + y;
  }
}


function checkgrade(){
     let M = Number(document.getElementById("marks").value);
switch (true) {
  case (M <= 10): document.getElementById("ans4").innerText = "grade E"; break;
  case (M <= 20): document.getElementById("ans4").innerText = "grade D"; break;
  case (M <= 30): document.getElementById("ans4").innerText = "grade C"; break;
  case (M <= 40): document.getElementById("ans4").innerText = "grade B"; break;
  case (M <= 50): document.getElementById("ans4").innerText = "grade A"; break;
  default: document.getElementById("ans4").innerText = "Invalid";
}
}

function checkwords(){
    let  ch = document.getElementById("chr").value;
    let CH = ch.toLowerCase()
switch (CH) {
  case "p": document.getElementById("ans5").innerText = "PrepBytes"; break;
  case "z": document.getElementById("ans5").innerText = "Zenith"; break;
  case "e": document.getElementById("ans5").innerText ="Expert Coder"; break;
  case "d": document.getElementById("ans5").innerText ="Data Structure"; break;
  default: document.getElementById("ans5").innerText ="Invalid";
}
}

function findMax() {
  let a = Number(document.getElementById("m1").value);
  let b = Number(document.getElementById("m2").value);
  let c = Number(document.getElementById("m3").value);
  if (a === b && b === c) {
    document.getElementById("ans6").innerText = "All are equal";
  } else {
    document.getElementById("ans6").innerText = "The maximum value is: " + Math.max(a, b, c);
  }
}


function secSmall() {
   let x = Number(document.getElementById("a1").value);
  let y = Number(document.getElementById("a2").value);
  let z = Number(document.getElementById("a3").value);
  let arr = [x, y, z].sort((x, y) => x - y);
  document.getElementById("ans7").innerText = "Second smallest: " + arr[1];
}


function findtri() {
 let A = Number(document.getElementById("A1").value);
  let B = Number(document.getElementById("B1").value);
  let C = Number(document.getElementById("C1").value);
  if (A + B + C != 180) {
    document.getElementById("ans8").innerText = "Invalid angles";
  } else if (A < 90 && B < 90 && C < 90) {
    document.getElementById("ans8").innerText = "Acute";
  } else if (A > 90 || B > 90 || C > 90) {
    document.getElementById("ans8").innerText = "Obtuse";
  } else {
    document.getElementById("ans8").innerText = "Right";
  }
}


function countDigits() {
   let num1 = Number(document.getElementById("indigit").value);
  document.getElementById("ans9").innerText = "Digits: " + num1.toString().length;
}



function countFive() {
   let X = Number(document.getElementById("cnt").value);
  let X1 = X.toString();
  let count = 0;
  for (let i = 0; i < X1.length; i++) {
    if (X1[i] === '5') {
      count++;
    }
  }
  document.getElementById("ans10").innerText = "Count of 5: " + count;
}


function sumEven() {
   let N1 = Number(document.getElementById("sumevenn").value);
  let sumEven = 0;
  for (let i = 2; i <= N1; i += 2) {
    sumEven += i;
  }
  document.getElementById("ans11").innerText = "Sum of even numbers: " + sumEven;
}


function sumDigits() {
  let x1 = Number(document.getElementById("sumd").value);
  let sum = 0;
  while (x1) {
    sum += x1 % 10;
    x1 = Math.floor(x1 / 10);
  }

  document.getElementById("ans12").innerText = "Sum of digits: " + sum;
}


function printStars() {
 let lines = Number(document.getElementById("line").value);
  let output = "";
  for (let i = 1; i <= lines; i++) {
    output += "*".repeat(i) + "\n";
  }
  document.getElementById("ans13").innerText = output;
}


function prime() {
   let x2 = Number(document.getElementById("prim").value);
  let bool = true;
  if (x2 < 2) 
    bool = false;
  else {
  for (let i = 2; i <= Math.sqrt(x2); i++) {
    if (x2 % i === 0) {
      bool = false;
      break;
    }
  }}
  document.getElementById("ans14").innerText = bool ? "Prime" : "Not Prime";
}


function print() {
   let x3 = Number(document.getElementById("pr").value);
  let p = [];
  for (let i = 1; i <= x3; i++) {
   p.push(i);
  }
  document.getElementById("ans15").innerText = p.join(" ");
}


function printTable() {
  let x4 = Number(document.getElementById("prt").value);
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += x4 + " x " + i + " = " + (x4 * i) + "\n";
  }
  document.getElementById("ans16").innerText = output;
}
