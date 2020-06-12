// chapter - 1
// 1.
alert("Welcome !");
// 2.
alert("Error ! Please enter a valid password.");
//3.
alert("Welcome to JS Land...\nHappy Coding!");
//4.
alert("Welcome to JS Land...");
alert("Happy Coding");
window.alert("Hello... I can run JS through my web browser's console");

// chapter - 2
//1 .
var username = "asma";
//2 .
var myName = "Asma Hai";
//3 .
var message = "Hello World";
alert(message);
//4 .
var age = "20 years old";
var certificate = "Certified Mobile Application Development";
alert(myName);
alert(age);
alert(certificate);

//5 .
var food = "PIZZA";
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");
//6.
var email = "haiasma540@gmail.com";
alert(email);
//7 .
var book = "A smarter way to learn JavaScript";
alert(book);
//8.
document.write("Yah! i can write HTML content through JavaScript");
document.write("<br>");
//9 .
document.write("\n▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");
document.write("<br>");
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");

// chapter 3
// variables for numbers
// 1.
var age = 20;
alert(age);
//2 .
var visits = 20;
alert("You have visited this site " + visits + " times");

// 3.
var birthYear = 1999;
document.write("My Birth Year is " + birthYear);
document.write("<br>");

//4.
var name = window.prompt("Enter your name : ");
var ptitle = window.prompt("Enter product title : ");
var quantity = window.prompt("Quantity : ");
var item = parseInt(quantity);
document.write(
    "\n" + name + " ordered " + item + " " + ptitle + " on XYZ Clothing Store\n"
);
document.write("<br>");

// chapter 4
// 1.
var x = "Hello",
    y = "World",
    z = "!!";

//2 . legal & illegal variable names
// legal variables
var myName = " ";
var my_name = " ";
var myname = " ";
var name123 = " ";
var Main = " ";
//illegal
// var my name = " ";
// var 123 name = " ";
// var a2_b % 88 $ = " ";
// var @email = " ";
// var my - name = " ";

//3 .
document.write("<h2>Rules for naming JS variables</h2>");
document.write("<br>");
document.write(
    "Variable names can only contain <u>numbers</u>, <u>$</u> , <u>_</u> and <u>letter</u>. For example $my_1stVariable"
);
document.write("<br>");
document.write(
    "Variables must begin with a <u>letter</u>, <u>$</u> or <u>_</u>. For example $name, _name or name"
);
document.write("<br>");
document.write("Variable names are case <u>sensitive</u>");
document.write("<br>");
document.write("Variable names should not be JS <u>keywords</u>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

//chapter 5
//1.
var num1 = 3;
var num2 = 6;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is : " + sum);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// 2 .
var sub = num2 - num1;
var mul = num1 * num2;
var div = num2 / num1;
var mod = num2 % num1;
document.write("Subtraction : " + sub);
document.write("<br>");
document.write("Multiplication : " + mul);
document.write("<br>");
document.write("Division : " + div);
document.write("<br>");
document.write("Modulus : " + mod);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// 3 .
var num = " "; //declaring variable
document.write("Value after variable declaration is undefined");
document.write("<br>");
var num = 5;
document.write("Initial Value : " + num);
document.write("<br>");
num++;
document.write("Value after Increment is : " + num);
document.write("<br>");
var num = num + 7;
document.write("Value after addition is : " + num);
document.write("<br>");
var num = num - 1;
document.write("Value after Decrement is : " + num);
document.write("<br>");
var rem = num % 3;
document.write("The remainder is : ", rem);
document.write("<br>");
document.write("<br>");
document.write("<br>");

// 4.
var ticket = 600;
var total = 600 * 5;
document.write("Total cosr to buy 5 tickets to movie is " + total + "PKR");
document.write("<br>");
document.write("<br>");

//5.
document.write("Table of 4");
var count = 1;

do {
    document.write("<br> 4 x " + count + " = " + 4 * count);
    count++;
} while (count < 11);
document.write("<br>");
document.write("<br>");

//6.
var c = 25;
var f = 70;
var convert_f = c * (9 / 5) + 32;
var convert_c = (f - 32) * (5 / 9);
document.write(c + "oC is " + convert_f + "oF");
document.write("<br>");
document.write(f + "oF is " + convert_c + "oC");
document.write("<br>");
document.write("<br>");

//7.
var price1 = 650;
var price2 = 100;
var order1 = 3;
var order2 = 7;
var shipping = 100;
var total = price1 * order1 + price2 * order2 + shipping;
document.write("<h2>Shopping Cart</h2>");
document.write("<br>Price of item 1 is    : ", price1);
document.write("<br>Quantity of item 1 is : ", order1);
document.write("<br>Price of item 2 is    : ", price2);
document.write("<br>Quantity of item 2 is : ", order2);
document.write("<br>Shipping Charges      : ", shipping);
document.write("<br><br>Total Cost of your order : ", total);
document.write("<br>");
document.write("<br>");

//8.
var total = 980;
var obt = 804;
var per = (obt / total) * 100;
document.write("<h2>Mark Sheet</h2>");
document.write("<br>");
document.write("<br>Total Marks : ", total);
document.write("<br>Marks Obtained : ", obt);
document.write("<br>Percentage : ", per);
document.write("<br>");
document.write("<br>");

//9.
var convert = 10 * 104.8 + 25 * 28;
document.write("<h2>Currency in PKR</h2>");
document.write("<br>");
document.write("Total Currency in PKR : ", convert);
document.write("<br>");
document.write("<br>");

//10.
var num = 10;
var total = ((10 + 5) * 10) / 2;
document.write("Result : ", total);

// 11.
var current_year = 2016;
var birth_year = 1992;
var your_age = current_year - birth_year;
document.write("<br>Current Year : ", current_year);
document.write("<br>Birth Year : ", birth_year);
document.write("<br>Your Age is : ", your_age);
document.write("<br>");
document.write("<br>");

// 12.
var radius = 20;
var circum = 2 * Math.PI * radius;
var area = Math.PI * radius ** 2;
document.write("<h2>The Geometrizer</h2>");
document.write("<br>");
document.write("<br>Radius of Circle : ", radius);
document.write("<br>The circumference is : ", circum);
document.write("<br>The area is : ", area);
document.write("<br>");
document.write("<br>");

//13.
var fav = "chocolate chip";
var curr_age = 20;
var max_age = 65;
var perday = 5;
var total = (max_age - curr_age) * perday;
document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("<br>");
document.write("<br>Favourite Snack : ", fav);
document.write("<br>Current Age : ", curr_age);
document.write("<br>Estimated-Maximum Age : ", max_age);
document.write("<br>Amount of snacks per day : ", perday);
document.write(
    "<br>You will need " +
    total +
    " " +
    fav +
    " to last until the ripe old age of " +
    max_age
);
document.write("<br>");

// chapter 6 - 9
// 1.
var a = 10;
document.write("<h2>Result : </h2>");
document.write("<br>");
document.write("<br>The value of a is : ", a);
document.write("<br>__________________________________");
document.write("<br>");
a += 1;
document.write("The value of ++a is : ", a);
document.write("<br>Now the value of a is : ", a);
document.write("<br>The value of a++ is : ", a);
a += 1;
document.write("<br>Now the value of a is : ", a);
a -= 1;
document.write("<br>The value of --a is : ", a);
document.write("<br>Now the value of a is : ", a);
document.write("<br>The value of a-- is : ", a);
a -= 1;
document.write("<br>Now the value of a is : ", a);
document.write("<br>");
document.write("<br>");

// 2.
var a = 2,
    b = 1;

var res1 = --a - --b + ++b + b--;
var res2 = --a;
var res3 = --a - --b;
var res4 = --a - --b + ++b;
document.write("<br>a = ", a);
document.write("<br>b = ", b);
document.write("<br>--a = ", res2);
document.write("<br>--a - --b = ", res3);
document.write("<br>--a - --b + ++b = ", res4);
document.write("<br>--a - --b + ++b + b-- = ", res1);
document.write("<br>");
document.write("<br>");

//3 .
var name = window.prompt("Enter your name : ");
document.write("Welcome " + name + " !");
document.write("<br>");
document.write("<br>");

//5.
var number = window.prompt("Enter number : ");
if (number in [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    document.write("<br><h3>Table of " + number + "</h3>");
    var count = 1;
    do {
        document.write("<br>" + number + " x " + count + " = ", number * count);
        count++;
    } while (count < 11);
} else {
    document.write("<br><h3>Table of 5</h3>");
    var count = 1;
    do {
        document.write("<br> 5 x " + count + " = ", 5 * count);
        count++;
    } while (count < 11);
}
document.write("<br>");
document.write("<br>");

//6.

var subject1 = prompt("Enter first subject : ");
var marks1 = prompt("Enter marks : ");
var subject2 = prompt("Enter second subject : ");
var marks2 = prompt("Enter marks : ");
var subject3 = prompt("Enter third subject : ");
var marks3 = prompt("Enter marks : ");
var totalmarks = 100;
var obt1 = (marks1 / totalmarks) * 100;
var obt2 = (marks2 / totalmarks) * 100;
var obt3 = (marks3 / totalmarks) * 100;

let info = [{
        Subject: subject1,
        Total: totalmarks,
        Obtained: marks1,
        Percentage: obt1,
    },
    {
        Subject: subject2,
        Total: totalmarks,
        Obtained: marks2,
        Percentage: obt2,
    },
    {
        Subject: subject3,
        Total: totalmarks,
        Obtained: marks3,
        Percentage: obt3,
    },
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(info[0]);
generateTableHead(table, data);
generateTable(table, info);

//chapter 9-11

//1.
var city = prompt("Enter City Name : ");
if (city == "karachi") {
    document.write("<h3>Welcome to City of Lights</h3>");
} else {
    document.write("<br>Welcome to " + city);
}
document.write("<br>");
document.write("<br>");

//2 .
var gender = prompt("Enter your gender : ");
if (gender == "Male") {
    document.write("<br>Good Morning Sir!");
} else {
    document.write("<br>Good Morning Ma'am");
}
document.write("<br>");
document.write("<br>");

//3.
var color = prompt("Enter the color of road traffic Signal : ");
if (color == "red") {
    document.write("<br>Must Stop !");
} else if (color == "yellow") {
    document.write("<br>Ready to move");
} else if (color == "green") {
    document.write("<br>Move Now !");
} else {
    document.write("<br>Invalid Color !");
}
document.write("<br>");
document.write("<br>");

//4 .
var fuel = prompt("Enter remaining fuel in car : ");
var rem_fuel = parseInt(fuel);
if (rem_fuel < 0.25) {
    document.write("Please refill the fuel in your car");
} else {
    document.write("You still have some fuel left !");
}
document.write("<br>");
document.write("<br>");

//5.
// a
var a = 4;
if (++a === 5) {
    alert("Given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
    alert("Given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 6
var obt = prompt("marks obtained in 3 subjects : ");
var total = 300;
var per = (obt / total) * 100;
var grade = "";
var remarks = "";
if (per >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (per >= 70) {
    grade = "A";
    remarks = "Good";
} else if (per >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else if (per < 60) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<br>");
document.write("<h2>Marks Sheet</h2>");
document.write("<br>");
document.write("<br>Total Marks : ", total);
document.write("<br>Marks Obtained : ", obt);
document.write("<br>Percentage : ", per);
document.write("<br>Grade : ", grade);
document.write("<br>Remarks : ", remarks);
document.write("<br>");
document.write("<br>");

//7 .
var sec = 8;
var user = prompt("Guess the number : ");
if (user == sec) {
    document.write("Bingo ! Correct answer");
} else if (user == sec++) {
    document.write("Close enough to the correct answer");
}
document.write("<br>");
document.write("<br>");

//8
var num = prompt("Enter number : ");
if (num % 3 == 0) {
    document.write(num + " is divisible by 3");
}
document.write("<br>");
document.write("<br>");

//9
var num = prompt("enter number : ");
if (num % 2 == 0) {
    document.write("Even number");
} else if (num % 2 != 0) {
    document.write("Odd number");
}
document.write("<br>");
document.write("<br>");

//10
var temp = prompt("enter temprature : ");
if (temp > 40) {
    document.write("It is too hot outside.");
} else if (temp > 30) {
    document.write("The Weather today is Normal.");
} else if (temp > 20) {
    document.write("Today’s Weather is cool.");
} else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool.");
}
document.write("<br>");
document.write("<br>");

// 11
var fnum = prompt("enter first number : ");
var snum = prompt("enter second number : ");
var operation = prompt("enter order of operation : ");
if (operation == "+") {
    document.write(fnum + " + " + snum + " = ", fnum + snum);
} else if (operation == "-") {
    document.write(fnum + " - " + snum + " = ", fnum - snum);
} else if (operation == "*") {
    document.write(fnum + " x " + snum + " = ", fnum * snum);
} else if (operation == "/") {
    document.write(fnum + " / " + snum + " = ", fnum / snum);
} else if (operation == "%") {
    document.write(fnum + " % " + snum + " = ", fnum % snum);
}
document.write("<br>");
document.write("<br>");

// chapter 12 - 13
// 1
var user = 90;
if (user >= 65 && user <= 90) {
    document.write("Character is a Capital Letter");
} else if (user >= 97 && user <= 122) {
    document.write("Character is a small letter");
} else if (user >= 48 && user <= 57) {
    document.write("Character is a digit");
} else if (
    (user > 0 && user <= 47) ||
    (user >= 58 && user <= 64) ||
    (user >= 91 && user <= 96) ||
    (user >= 123 && user <= 127)
) {
    document.write("Character is a special symbol");
} else {
    document.write("Invalid Entry !!");
}
document.write("<br>");

//2
var int1 = prompt("enter 1st integer : "),
    int2 = prompt("enter 2nd integer : ");
if (int1 > int2) {
    document.write("Integer 1 is greater than integer 2");
} else if (int2 > int1) {
    document.write("Integer 2 is greater than integer 1");
} else if (int1 == int2) {
    document.write("Both are equal");
}
document.write("<br>");

//3.
var num = prompt("Enter a number : ");
if (num < 0) {
    document.write("Number is negative");
} else if (num > 0) {
    document.write("Number is positive");
} else if (num == 0) {
    document.write("Number is equal to zero");
} else {
    document.write("Invalid entry");
}
document.write("<br>");

// 4
let vowel = ["a", "e", "i", "o", "u"];
var char = prompt("Enter a character of length 1 : ");
if (char in vowel) {
    document.write("True");
} else {
    document.write("False");
}
document.write("<br>");
document.write("<br>");

// 6
var greeting = "";
var hour = 13;
if (hour < 18) {
    greeting = "Good Day";
} else {
    greeting = "Good evening";
}

document.write("<br>");
document.write("<br>");

//7 .
var time = prompt("Enter time in 24-hr format : ");
if (time >= 0000 && time < 1200) {
    document.write("Good Morning");
} else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    document.write("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good Night");
} else {
    document.write("Invalid Input");
}

//chapter 14-16
//1
var students = [];
var students = {};
var string = [];
var numbers = [];
var boolean = [];
var mixed_array = [
    []
];
var qualifications = [,
    "SSC", ,
    "HSC", ,
    "BCS", ,
    "BS", ,
    "BCOM", ,
    "MS", ,
    "M.Phil.", ,
    "PhD",
];

// 8
var student = ["Micheal", "John", "Tony"];
var marks = [320, 230, 480];
var percentage = [
    (marks[0] / 500) * 100,
    (marks[1] / 500) * 100,
    (marks[2] / 500) * 100,
];

document.write(
    "Score of ",
    student[0],
    " is ",
    marks[0],
    ". Percentage: ",
    percentage[0] + "%",
    "<br>Score of ",
    student[1],
    " is ",
    marks[1],
    ". Percentage: ",
    percentage[1] + "%",
    "<br>Score of ",
    student[2],
    " is ",
    marks[2],
    ". Percentage: ",
    percentage[2] + "%"
);

// 9

var col = ["red", "green", "yellow", "white", "blue"];
document.write(col);

//a
var add1 = window.prompt("add one colour to the start");
col.unshift(add1);
document.write("<br>After addition of one colour to the start: ", col);

// b
var add2 = window.prompt("add one colour to the end");
col.push(add2);
document.write("<br>After addition of one colour to the end: ", col);

// c
col.unshift("purple");
col.unshift("violet");
document.write("<br>After addition of two : ", col);

// d
col.shift();
document.write("<br>after deletion from first :", col);

//e
col.pop();
document.write("<br>after deletion from last :", col);

// f
var ind = window.prompt("Give the index position :");
var indd = window.prompt("Give the color name :");
var i111 = parseInt(ind);
col[i111] = indd;
document.write("<br>after adding a colour to desired index :", col);

//g
var arr = [];
var choose = window.prompt("how many do you want to delete :");
var ch1 = parseInt(choose);
for (var i = 0; i < ch1; i++) {
    arr.push(prompt("Enter the indexes you want to delete"));
}
arr1 = arr.join(",");
col.splice(arr1[0], 1);
col.splice(arr[1], 1);
col.splice(arr[2], 1);
col.splice(arr[3], 1);
col.splice(arr[4], 1);
document.write(col);

// 10
var score = [45, 49, 20, 32, 12];
document.write("<br>Scores of Students : ", score);
score.sort();
document.write("<br>Ordered Scores of Students : ", score);

// 11
var city = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
var sel_city = city.slice(0, 2);
document.write("<br>Cities list:<br>", city);
document.write("<br>Selected cities list:<br>", sel_city);

// 12
var arr = ["This", "is", "my", "cat"];
document.write("<br>Array:<br>", arr);
var newarr = arr.join(" ");
document.write("<br>String:<br>", newarr);

// 13
var queue = [];
queue.push("keyboard");
queue.push("mouse");
queue.push("printer");
queue.push("monitor");
document.write("Devices:<br>", queue);
var i = queue.shift();
document.write("<br>Out:<br>", i);
var ii = queue.shift();
document.write("<br>Out:<br>", ii);
var iii = queue.shift();
document.write("<br>Out:<br>", iii);
var iiii = queue.shift();
document.write("<br>Out:<br>", iiii);

//14
var stack = [];
stack.push("keyboard");
stack.push("mouse");
stack.push("printer");
stack.push("monitor");
document.write("Devices:<br>", stack);
var i1 = stack.pop();
document.write("<br>Out:<br>", i1);
var ii1 = stack.pop();
document.write("<br>Out:<br>", ii1);
var iii1 = stack.pop();
document.write("<br>Out:<br>", iii1);
var iiii1 = stack.pop();
document.write("<br>Out:<br>", iiii1);

// 15
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Haier"];
document.write(
    phone[0],
    "<br>",
    phone[1],
    "<br>",
    phone[2],
    "<br>",
    phone[3],
    "<br>",
    phone[4]
);
document.write("<br>");
document.write("<br>");

// chapter 17-20
// 1
var arr = [];

// 2
arr[0] = [0, 1, 2, 3];
arr[1] = [1, 0, 1, 2];
arr[2] = [2, 1, 0, 1];
document.write(arr);
document.write("<br>");

// 3
for (i = 0; i <= 10; i++) {
    document.write(i, "<br>");
}
document.write("<br>");

// 4
var chose = prompt("number : ");
var clen = prompt("length : ");
var ichose = parseInt(chose);
var iclen = parseInt(clen);
document.write("Multiplication table of ", ichose);
document.write("<br>Length ", iclen);
for (i = 1; i <= iclen; i++) {
    document.write("<br>", chose, "*", i, " = ", chose * i, "<br>");
}
document.write("<br>");

// 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i], "<br>");
}
for (i = 0; i < fruits.length; i++) {
    document.write("Element at index ", i, " is ", fruits[i], "<br>");
}
document.write("<br>");

// 6
// a
arr = [];
for (i = 1; i <= 15; i++) {
    arr.push(i);
}
arr.join(",");
document.write("Counting:<br>", arr);
document.write("<br>");

// b
reverse = [];
for (i = 1; i <= 10; i++) {
    reverse.unshift(i);
}
reverse.join(",");
document.write("Reverse counting:<br>", reverse);
document.write("<br>");

// c
even = [];
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        even.push(i);
    }
}
even.join(",");
document.write("Even:<br>", even);
document.write("<br>");

// d
odd = [];
for (i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        odd.push(i);
    }
}
odd.join(",");
document.write("Odd:<br>", odd);
document.write("<br>");

// d

series = [];
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i, "k", ",");
    }
}
document.write("<br>");

// 7
var search = window.prompt("what do you want to order ?");
var x = bakery(search);

function bakery(things) {
    A = ["cake", "applepie", "cookie", "chips", "patties"];
    //search = window.prompt("what do you want to order ?")
    for (i = 0; i < A.length; i++) {
        if (A[i] === things) {
            return A[i] + " is available at index " + i + " in our bakery";
        }
    }
    return "We are sorry . " + things + " is not available in our bakery";
}
document.write(x);
document.write("<br>");

// 8
A = [24, 53, 78, 91, 12];
largest = 0;
for (i = 0; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
document.write("Array items: ", A);
document.write("<br>The largest number is : ", largest);
document.write("<br>");

// 9
A = [24, 53, 78, 91, 12];
smallest = A[0];
for (i = 0; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
document.write("Array items: ", A);
document.write("<br>The smallest number is : ", smallest);
document.write("<br>");

// 10
multiple = 5;
for (i = 1; i <= 20; i++) {
    document.write(multiple * i, ",");
}

//////////// END /////////////