// Exam results
var yourScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;

// Calculate grades
var yourGrade, tomGrade, janeGrade, peterGrade, johnGrade;

if (yourScore >= 80) {
  yourGrade = "A";
} else if (yourScore >= 60) {
  yourGrade = "B";
} else if (yourScore >= 50) {
  yourGrade = "C";
} else if (yourScore >= 40) {
  yourGrade = "D";
} else {
  yourGrade = "F";
}

if (tomScore >= 80) {
  tomGrade = "A";
} else if (tomScore >= 60) {
  tomGrade = "B";
} else if (tomScore >= 50) {
  tomGrade = "C";
} else if (tomScore >= 40) {
  tomGrade = "D";
} else {
  tomGrade = "F";
}

if (janeScore >= 80) {
  janeGrade = "A";
} else if (janeScore >= 60) {
  janeGrade = "B";
} else if (janeScore >= 50) {
  janeGrade = "C";
} else if (janeScore >= 40) {
  janeGrade = "D";
} else {
  janeGrade = "F";
}

if (peterScore >= 80) {
  peterGrade = "A";
} else if (peterScore >= 60) {
  peterGrade = "B";
} else if (peterScore >= 50) {
  peterGrade = "C";
} else if (peterScore >= 40) {
  peterGrade = "D";
} else {
  peterGrade = "F";
}

if (johnScore >= 80) {
  johnGrade = "A";
} else if (johnScore >= 60) {
  johnGrade = "B";
} else if (johnScore >= 50) {
  johnGrade = "C";
} else if (johnScore >= 40) {
  johnGrade = "D";
} else {
  johnGrade = "F";
}

// Display results
console.log("Your grade: " + yourGrade);
console.log("Tom's grade: " + tomGrade);
console.log("Jane's grade: " + janeGrade);
console.log("Peter's grade: " + peterGrade);
console.log("John's grade: " + johnGrade);
