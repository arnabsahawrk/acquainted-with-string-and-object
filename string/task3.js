//If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let theString = "xXx: Return of Xander Cage";
// let theString = "yYy: Return of Yander Cage";
let founded = true;

if (theString.includes("x") || theString.includes("X")) {
  if (theString.includes("x")) theString = theString.replace(/x/g, "y");
  if (theString.includes("X")) theString = theString.replace(/X/g, "Y");
} else {
  founded = false;
  console.log("No replace needed");
}

if (founded) {
  console.log(theString);
}
