//Count how many times a string has the letter A/a

let myName = "Arnab Saha";
let count = 0;

for (let i = 0; i < myName.length; i++) {
  let aWord = myName[i];
  if (aWord.toLowerCase() === "a") {
    count++;
  }
}

console.log(`${count} times founded`);
