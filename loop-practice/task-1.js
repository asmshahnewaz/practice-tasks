1; /*
2
3
LOOP
4
5 1. Display "Ajke amar mon valo nei" for 39 times
6 2. Display numbers between 58 to 98
7 3. Show all even numbers from 412 to 456
8 4. Show all odd numbers 581 to 623
9 5. Difference between while loop and for loop
10 6. Declare an array for all the topics that you have learned last few days
11 display then as output
12 7. Create an array for all the mobile phones. Display all the elements of th
13 by using a while loop
14 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44.
15 9. Write the price of the books that you have.
16 Display the prices if the prices is lower than 200
17
18 */

// 1. Display "Ajke amar mon valo nei" for 39 times

var monValonei = "Ajke amar mon valo nei";

for (var i = 1; i < 39; i++) {
  console.log(monValonei);
}

// 2. Display numbers between 58 to 98

for (var i = 58; i <= 98; i++) {
  console.log(i);
}

//  3. Show all even numbers from 412 to 456

for (var i = 412; i <= 456; i += 2) {
  console.log(i);
}

// 4. Show all odd numbers 581 to 623

for (var i = 581; i <= 623; i += 2) {
  console.log(i);
}

// 6. Declare an array for all the topics that you have learned last few days
//  display them as output

var topicsLearned = ["variable", "array", "conditional", "loop"];

for (var i = 0; i <= topicsLearned.length; i++) {
  console.log(topicsLearned);
}

// 7. Create an array for all the mobile phones. Display all the elements of the
// by using a while loop

var mobilesIUsed = ["samsung", "xiaomi", "motorolla", "sony"];
var i = 0;
while (i <= mobilesIUsed.length) {
  console.log(mobilesIUsed);
  i++;
}

// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44.

for (var i = 30; i <= 86; i++) {
  if (i === 44) {
    break;
  }
  console.log(i);
}

// 9. Write the price of the books that you have.Display the prices if the prices is lower than 200

var booksPrices = [150, 180, 100, 220, 70, 250];
for (var i = 0; i < booksPrices.length; i++) {
  var bookPrice = booksPrices[i];
  if (bookPrice > 200) {
    continue;
  }
  console.log(bookPrice);
}
