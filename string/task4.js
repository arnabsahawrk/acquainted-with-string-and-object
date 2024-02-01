//Capitalize Every first Letter of each word in a String

let myName = "mY NaME iS ArNaB sAhA";
console.log(myName);

let splitWord = myName.split(" ");

for (let i = 0; i < splitWord.length; i++) {
  splitWord[i] =
    splitWord[i][0].toUpperCase() + splitWord[i].slice(1).toLowerCase();
}
console.log(splitWord);

splitWord = splitWord.join(" ");
console.log(splitWord);
