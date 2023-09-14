`use strict`

//  Write a program that calculates the sum of two numbers and displays the result.

// Prompt the user for input
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));

// let sum = num1 + num2;

// console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);



//  Write a program that calculates the area of a rectangle. Prompt the user to enter the length and width of the rectangle and display the result.

// area of rectangle = length * width

// let height = prompt(`Enter the value of height `)

// let width = prompt (`Enter the value of width`)

// let areaOfRectangle = height*width

// console.log(`Given area of rectangle is :` +areaOfRectangle+ );


//  Write a program that converts a temperature from Celsius to Fahrenheit. Prompt the user to enter the temperature in Celsius and display the equivalent temperature in Fahrenheit.

// let Celsius = prompt(`temperature in celsius`)

// let Fahrenheit =  (Celsius * 9/5) + 32

// console.log(`temperature in celsius : `+Fahrenheit );



//  Write a program that checks if a given number is even or odd. Prompt the user to enter a number and display whether it is even or odd.

// let number = prompt(` enter a number `)

// number % 2 === 0 ? console.log(`even`) : console.log(`odd`); 


//  Write a program that concatenates two strings and displays the result. Prompt the user to enter two strings and display the concatenated string.

// let fName =  prompt(`enter a first name`)
// let sName = prompt (`enter a second name`)
// let  concatenates = fName+sName
// console.log(`concatenates two strings :` + concatenates);


//  Write a program that calculates the average of three numbers. Prompt the user to enter three numbers and display the average.

// let num1 = prompt("Enter the first number: ")
// let num2 = prompt("Enter the second number: ")
// let num3 = prompt("Enter the third number: ")
// average = (num1 + num2 + num3) / 3
// console.log("Average:"+ average)


// . Write a program that checks if a given year is a leap year. Prompt the user to enter a year and display whether it is a leap year or not.

// let year = prompt(`enter a year`)
// year % 4 == 0 ? console.log(`leap year`):console.log(`not a leap` );


// . Write a program that swaps the values of two variables. Prompt the user to enter two values, swap them, and display the new values.


// let a = prompt(`enter a first number`)
// let b = prompt(`enter a second number`)

// temp=a
// a=b;
// b=temp

// console.log(a);
// console.log(b);





//Branching and Iterations
// --------------------------

// Write a program that prompts the user to enter their age. If the age is less than 18, display "You are a minor." Otherwise, display "You are an adult."


// let age = prompt(` Please Enter a age`)
// if (age > 18) {
// console.log( `you are adult`);
// } else {
// console.log(`you are minor`); 
// }


// Write a program that checks whether a given number is positive, negative, or zero. Display an appropriate message based on the input

// function givenNumberIsPositiveOrNegativeOrZro(number) {
//   if (number > 0) {
//     console.log(number + " is a positive number.");
//   } else if (number < 0) {
//     console.log(number + " is a negative number.");
//   } else {
//     console.log(number + " is zero.");
//   }
// }
// const num1=5
// const num2=-4
// const num3=0

// givenNumberIsPositiveOrNegativeOrZro(num1)
// givenNumberIsPositiveOrNegativeOrZro(num2)
// givenNumberIsPositiveOrNegativeOrZro(num3)



// Write a program that prompts the user to enter a number. If the number is divisible by 3, display "Fizz." If it is divisible by 5, display "Buzz." If it is divisible by both 3 and 5, display "FizzBuzz." Otherwise, display the number itself

// let num = prompt(`enter a number`)

// if (num % 3===0 && num % 5===0 ) {
//   console.log("FizzBuzz");
// } else if (num % 3===0){
//   console.log("Fizz");
// }else if(num % 5===0 ) {
//   console.log("Buzz");
// }else{
//   console.log(`it wont work on both`);
// }


// Write a program that takes three numbers as input and determines the largest among them. Display the result

// function findLargestNumber(num1,num2,num3) {
//   if (num1>num2 && num1>num3) {
//     return num1
//   } else if (num2>num1 && num2>num3) {
//     return num2
//   }else {
//     return num3
//   }
// }

// const num1=Number(prompt(`enter a first num1`))
// const num2=Number(prompt(`enter a first num2`))
// const num3=Number(prompt(`enter a first num3`))

// const largestNumberAmongThem=findLargestNumber(num1,num2,num3)

// console.log(largestNumberAmongThem);



// . Write a program that prompts the user to enter a month (1-12) and displays the corresponding season based on the input. For example, if the user enters 3, the program should display "Spring.

// const month = Number(prompt(`please enter a month between (1-12)`))

// let season =``

// if (month>1 && month <12) {
//   switch (month) {
//       case 12:
//       case 1:
//       case 2:
// season = `winter`
//       break;
//       case 3:
//       case 4:
//       case 5:
// season = `spring`
//       break;
//       case 6:
//       case 7:
//       case 8:
// season = `summer`
//       break;
//       case 9:
//       case 10:
//       case 11:
// season = `fall`
//       break;
//   }
//   console.log(`The season for month ${month} is ${season}.`);
// } else {
//   console.log(`you are entered a invalid month`);
// }


//  Write a program that generates and prints all prime numbers between 1 and 100.


// Write a program that prompts the user to enter a positive integer and calculates its factorial.


// Write a program that prints the Fibonacci sequence up to a specified number of terms entered by the user



//  Write a program that prompts the user to enter a string. Count and display the number of vowels (a, e, i, o, u) present in the string.


// const userString= prompt (`enter a string`)
// function inputString(input) {
//   const countString=input.toLowerCase()
//   for (let i = 0; i < countString.length; i++) {
//     const char = countString[i];

//     let vowelCount=0

//     if (char === `a`|| char ===`e`||char ===`i`|| char ===`o`|| char ===`u`) {
//       vowelCount++
//     }
//     return vowelCount;
//   }

// }
// const countVowels=inputString( userString)
// console.log(`The number of vowels in the string is: ${countVowels}`);



// -----------------------------------------------------


// Coding Challenges for String Methods
// Beginner Level:

//  Write a function that takes a string as input and returns its length using the length method.
// function string(input) {
//   const stringLength=input.length
//   return stringLength
// }
// const inputString = `hello, world,welcome` ;
// const result = string(inputString)
// console.log(`given string length is` , result);


// Write a function that takes a string as input and capitalizes the first letter using the toUpperCase and slice methods.

// function capitalizeFirstLetter(inputString) {
//   if (typeof inputString !== 'string' || inputString.length === 0) {
//     return inputString; // Return the input string unchanged if it's not a valid string or empty.
//   }

//   // Capitalize the first letter using toUpperCase() and concatenate it with the rest of the string.
//   const firstLetter = inputString[0].toUpperCase();
//   const restOfString = inputString.slice(1);

//   // Combine the first letter and the rest of the string and return it.
//   const capitalizedString = firstLetter + restOfString;
//   return capitalizedString;
// }

// // Example usage:
// const input = "hello, world!";
// const capitalized = capitalizeFirstLetter(input);
// console.log(capitalized); // Output: "Hello, world!"



// Write a function that takes a string as input and checks if it ends with a question mark using the endsWith method

// function endsWithQuestionMark(inputString) {
//   if (typeof inputString !== 'string') {
//     return false; // Return false if the input is not a string.
//   }

//   // Use the endsWith() method to check if the string ends with a question mark.
//   return inputString.endsWith('?');
// }

// // Example usage:
// const input1 = "Is this a question?";
// const input2 = "This is not a question.";

// console.log(endsWithQuestionMark(input1)); // Output: true
// console.log(endsWithQuestionMark(input2)); // Output: false



//  Write a function that takes a string as input and splits it into an array of words using the split method.

// function wordsOfArray(inputString) {
//   if (typeof inputString !== `string`) {
//     return []
//   }
//   const arrayWords = inputString.split(` `)
//   return arrayWords
// }
// const input = "India is my country";
// const result = wordsOfArray(input);
// console.log(result);



//  Write a function that takes a string as input and replaces all occurrences of a specified word with another word using the replace method.



// Write a function that takes a string as input and checks if it starts with the word "Hello" using the startsWith method.

// function wordStartWith(inputString) {
//   if (typeof inputString !== `string`) {
//     return []
//   }
//   const word = inputString.startsWith(`H`)
//   return word
// }

// const input = `Hello`
// const wordStartWithBegun = wordStartWith(input)
// console.log(wordStartWithBegun);



//  Write a function that takes a string as input and extracts the first three characters using the slice method.

// function firstThree(inputString) {
//   if (typeof inputString !== `string` || inputString.length < 3 ) {
//     return inputString
//   }

//   const str = inputString.slice(0,3)
//   return str
// }

// const input = "Hello, world!"
// const firstThreeCharacters= firstThree(input)
// console.log(firstThreeCharacters);


// Write a function that takes a string as input and checks if it contains only alphabetic characters using the match method and a regular expression





