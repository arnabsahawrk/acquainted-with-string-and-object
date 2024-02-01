//Check whether a string contains all the vowels a, e, i, o, u

let hasVowel = "Miscellaneous Education";
// let hasVowel = "Rhythm Myth";

hasVowel = hasVowel.toLowerCase();

hasVowel.includes("a") &&
hasVowel.includes("e") &&
hasVowel.includes("i") &&
hasVowel.includes("o") &&
hasVowel.includes("u")
  ? console.log("All Vowel founded in this string.")
  : console.log("Not Founded");
