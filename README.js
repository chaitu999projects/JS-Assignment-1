// 1.) Reverse a string using a loop in js.
let myStr = "Chaitanya";
let reversedStr = '';

for(i = myStr.length -1; i>=0; i--) {
    reversedStr += myStr[i];
}
console.log(reversedStr); //aynatiahC
// 2.) Check if a given number is a prime number.
function isPrime(num, i = 2) {
    if(num <= 1) {
        return false;
    }
    if(num === 2) {
        return true;
    }
    if (num % i === 0) {
        return false;
    }
    if(i * i > num){
        return true;
    }

    return isPrime(num, i + 1);
}

console.log(isPrime(5) ? "Prime number" : "Not a Prime Number");

// 3.) Find the Maximum in an Array.

//First Method
let myArray = [30, 20, 12, 34, 56, 75];
let maxValue = Math.max(...myArray);
console.log(maxValue);

//Second Method 
let maxArray = [0];

for(let i = 1; i < myArray.length; i++) {
    if (myArray[i] > maxArray) maxArray = myArray[i];
}
console.log(maxArray);

// 4.) Check if a given string reads the same backward as forward(Palindrome).
let polindromStr = 'racecar';
let reversingTheStr = polindromStr.split('').reverse().join('')
//console.log(reversingTheStr);
if(polindromStr === reversingTheStr) {
    console.log(reversingTheStr + " " +'Polindrom'); 
}else {
    console.log(reversingTheStr + " " +'Not a Polindrom');
    
}
// 5.) Generate a multiplication table for a given number N.
let N = 5;

for(i = 1; i<=10; i++) {
    console.log(`${N} x ${i} = ${N * i}` );
    
}
// 6.) Print all factors of a given number N.
let factorsNum = 12;

for (let i = 1; i <= 10 ; i++) {
    if (factorsNum % i === 0) console.log(i);
}

console.log(`Next Task`);

// 7.) Use a loop to print all odd numbers up to N.
let oddUpto = 20;
for(i = 0; i<=20; i++) {
    if(i % 2 !== 0) console.log(i);
    
} 
/* 8.) Print a pattern of stars
i)
*
**
***
ii)
    *
   **
  ***

*/
let n = 3;
for(let i = 1; i<= n; i++ ) {
    console.log('*'.repeat(i));
}
console.log("\n");
for (let i = 1; i <=n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}

// 9.) Count how many numbers are positive or negative in a given array.
let positiveAndNegetiveNums = [3, -2, -5, 4, 7, -9, 0, 1, -5, 6, 20];
let positiveCount = 0;
let negativeCount = 0;

for(i = 0; i< positiveAndNegetiveNums.length; i++) {
    if(positiveAndNegetiveNums[i] >= 0) positiveCount++;
    if(positiveAndNegetiveNums[i] < 0) negativeCount++
}
console.log(`Positive Numbers: ${positiveCount}`);
console.log(`Negitive Numbers: ${negativeCount}`);

// 10.) Takes 2 inputs, both numbers.
// returns whichever number is the greater (higher) number.
// (e.g. "The greater number of 5 and 10 is 10.").
let num1 = 5, num2 = 10; 

(num1 > num2) ? console.log(`The greater number of ${num1} and ${num2} is ${num1}.`):  console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);

