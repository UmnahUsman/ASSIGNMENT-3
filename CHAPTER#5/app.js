// QUESTION#1

var num0 = 3;
var total = num0 + 5;
document.write("Sum of 3 + 5 is " + " " + total + "<br>");

// QUESTION#2

var num1 = 3;
var num2 = 5
var subtract = num2 - num1;
document.write("Difference of " + " " + num2 + "-" + num1 + " " + "is" + " " + subtract + "<br>");

var multiply = num1 * num2;
document.write("Multiplication of " + " " + num1 + " " + "and " + " " + num2 + " " + "is" + " " + multiply + "<br>" );

var divide = num1 / num2;
document.write("Division of "+ " " + num1 + " " + "and " + " " + num2 + " " + "is" + " " + divide + "<br>");

var remainder = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + remainder + "<br>");

// QUESTION#3

var number;
document.write("Value after variable declariation is " + " " + number + "<br>");

var value = 5;
document.write("Initial Value =" + " " + value + "<br>");
value++
document.write("Value after increment is " + " " + value + "<br>");
var num = 7
var add = (num + value);
document.write("Value after adding 7 is = " + " " + add + "<br>");
var dec = --add;
document.write("Value after decrement is = " + " " + dec + "<br>");
var remainder = add % 3;
document.write("The remainder is =" + " " + remainder + "<br>" );

// QUESTION#4

var cost = (600);
var calculate = (5 * cost);
document.write("Total cost of buy 5 movie tickets is " +  " " + calculate + "PKR");

// QUESTION#5

var nnum = 4;
document.write("<h3>Table of " + nnum + "</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(nnum + "x" + i + "=" + (nnum * i) + "<br>")
};

// QUESTION#6
document.write("<h1>CONVERTER</h1>");
var celc = 25;
var convToF = (celc * 9 / 5 ) + 32;
document.write(celc + " " +  "° is" + " " + convToF +"°" + "<br>");

var celcius = 70;
var convertToC = (celcius - 32) * 5 / 9;
document.write(celcius + " " + "° is" + " " + convertToC +"°" + "<br>" );

// QUESTION#7
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3
var quantityItem2 = 7; 
var shippingCharges = 150;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<h1>Shopping Cart Receipt</h1>");
document.write("Price of item 1 is : " + priceItem1 + "<br>");
document.write("Quantity of item 1 is : " + quantityItem1 + "<br>");
document.write("Price of item 2 is :" + priceItem2 + "<br>");
document.write("Quantity of item 2 is :" + quantityItem2 + "<br>");
document.write("Shipping Charges :" + shippingCharges + "<br><br>");
document.write("<b>Total cost of your order is :" + totalCost + "</b>")








