// QUESTION#1
var a = 10;
document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("...........................................<br><br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// QUESTION#2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br><br>");
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

// QUESTION#3
var userName = prompt("ENTER YOUR NAME");
alert("Hello " + userName + "! Welcome to our website." ) + "<br>";

// QUESTION#4
var inputNum = prompt("Enter a number to display its multiplication table:", "5");
var num = parseInt(inputNum);
if (isNaN(num)) {
    num = 5;
}

document.write("<h3>Table of " + num + "</h3>");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// QUESTION#5
var marks1 = parseInt(prompt("Enter English marks:"));
var marks2 = parseInt(prompt("Enter Math marks:"));
var marks3 = parseInt(prompt("Enter Urdu marks:"));

var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / 300) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("<table border='1'>");

document.write("<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>");
document.write("<tr> <td>English</td> <td>100</td> <td>" + marks1 + "</td> <td>" + percentage + "</td> </tr>");
document.write("<tr> <td>Math</td> <td>100</td> <td>" + marks2 + "</td> <td>" + percentage + "</td> </tr>");
document.write("<tr> <td>Urdu</td> <td>100</td> <td>" + marks3 + "</td> <td>" +percentage + "</td> </tr>");
document.write("<tr> <td><b>Total</b></td> <td><b>300</b></td> <td><b>" + totalObtained + " " + percentage + "%</b></td> </tr>");

document.write("</table>");