// Question 1
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some Googling to figure this out if you forget how conditionals work.

function maxOfTwoNumbers(num1, num2) {
    if (num1 < num2) {
        return num2;
    }
    else return num1;
}
console.log(maxOfTwoNumbers(7, 10));

// Question 2
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else return num3;
}
console.log(maxOfThree(2, 3, 1));

// Question 3
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

function isCharacterAVowel(letter) {
    const lowerLetter = letter.toLowerCase();

    if (lowerLetter == "a" || lowerLetter == "e" || lowerLetter == "i" || lowerLetter == "o" || lowerLetter == "u") {
        return true;
    }
    else return false;
}
console.log(isCharacterAVowel("t"));
console.log(isCharacterAVowel("T"));
console.log(isCharacterAVowel("a"));
console.log(isCharacterAVowel("A"));

// Question 4
// Define a function sumArray that sums all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10.

const addUs = [];
function sumArray(addUs) {
    let sum = 0;
    for (let i = 0; i<addUs.length; i++) {
        sum += addUs[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3]));


// Question 4
// Define a function multiplyArray that multiplies all the numbers in an array of numbers. For example, multiplyArray([1,2,3,4]) should return 24.

const timesUs = [];
function multiplyArray(timesUs) {
    let product = 1;
    for (let i = 0; i<timesUs.length; i++) {
        product = product * timesUs[i];
    }
    return product;
}
console.log(multiplyArray([2, 4, 6]));


// Question 5
// Write a function that returns the number of arguments passed to the function when called.

var numberOfArguments = function(num){
    const argumentCount = numberOfArguments.arguments.length;
 
    return argumentCount;
}
console.log(numberOfArguments("hi", "there", "sally", "jones"));



// Question 6
// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function (string){
    const splitString = string.split("");
    const reversed = splitString.reverse().join("");
  return reversed;
};

console.log(reverseString("erica"));


// Question 7
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

const wordArray = [];
let imLongest;

function findLongestWord (wordArray) {
    let longestWord = 0;
  
    for (let i = 0; i<wordArray.length; i++) {
        if (wordArray[i].length > longestWord) {
            longestWord = wordArray[i].length;
            imLongest = wordArray[i];
        }
    }
  return longestWord;
  return imLongest;
}
console.log(findLongestWord(["blue", "orange", "periwinkle"]));
console.log(imLongest);

// Question 8
// Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.


const words = [];
function filterLongWords (words) {
   const i = 4;
   let longWords = [];
   for (let j = 0; j < words.length; j++) {
       if (words[j].length > i) {
           longWords.push(words[j]);
       }
   }
 return longWords;
}
console.log(filterLongWords(["hello", "goodbye", "cya", "pineapple", "taco"]));


// Bonus 1
// Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString().


// Bonus 2
// function charactersOccurencesCount() {