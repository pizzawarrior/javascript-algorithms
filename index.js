
//Repeat a given string str (first argument) for num times (second argument).
//Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//   let result = '';
//   for (let i = 0; i < num; i++){
//     result += str;
//   }
//   return result;
// }

// repeatStringNumTimes("abc", 3);


// //recursion:
// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return "";
//   } else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }
// repeatStringNumTimes("abc", 3);


// //Same but with ternary
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }
// repeatStringNumTimes("abc", 3);





// Create a function that looks through an array (arr) and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//   num = arr[i];
//   if (func(num)) return num;
//   }
//   return undefined;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);


// function findElement(arr, func) {
//   if (arr.length > 0 && !func(arr[0])) {
//     return findElement(arr.slice(1), func)
//   } else {
//     return arr[0]
//   }
// }
// findElement([1, 2, 3, 4], num => num % 2 === 0);

// //this doesn't work. why?
// function findElement(arr, func) {
// let i = 0;
// return func(arr[i]) ? arr[i] : findElement(arr[i +1], func) ? arr[i +1] : undefined;
// }
// findElement([1, 2, 3, 4], num => num % 2 === 0);



// //blah blah return true or false if bool is primitive boolean
// function booWho(bool) {
//   return typeof(bool) === 'boolean';
// }
// booWho(null);










// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... at the end.

// function truncateString(str, num) {
// return str.length > num ? str.substr(0, num) + '...' : str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// // Use slice:::
// function truncateString(str, num) {
//   return str.length > num ? str.slice(0, num) + "..." : str;
// }
// truncateString("A-tisket a-tasket A green and yellow basket", 8);




// //More arrow functions
// function addNum(a, b) {
//    let result = a + b;
//   //declare function with param:
//   sendMessage = (info) => {
//     return info;
//   }
//   //invoking the nested function with 'info' created inside parens
//   return sendMessage("result is " + result);
// }

// addNum(14, 27)



// //More arrow function practice:

// function numNums(num) {
//   let checkNum = () => {
//     return num > 10 ?
//         "Yes" : "No";
//   }
//   return checkNum();
// }

// numNums(10)




// //More arrow function practice:

// function addThings(a, b) {

//   let summed = () => {
//     let result = a + b;
//     return result;
//   }
//   return summed();
// }

// // let result1 = addThings(5,7);
// // console.log(result1);
// //addThings(3, 5);




// //Nested function practice:
// function okay(x) {
//  const y = x[1].slice() + x[4].slice();

//   function okeB(){
//     return y.slice() + x[4];
//   }
//   return okeB();
// }
// okay('aweshux')



// //Example of simple nested functions (parent and child)
// function fun1(a) {
//     function fun2(b) {
//       return a + b;
//   }
//         return fun2;
// }

// fun1("An Online Computer Science Portal")(" YEAH DUDE!");




// Check if a string (first argument, str) ends with the given target string (second argument, target).

// function confirmEnding(str, target) {
//   const finalLength = str.length - target.length;
//   return str.substring(finalLength) === target;
// }

// confirmEnding("Bastian", "ian");


// // OKAYYYYYY:::
// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;
// }

// confirmEnding("He has to give me a new name", "name");

// // alternative, also good:
// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target
// }

// confirmEnding("Bastian", "n");




// // Return the factorial of the provided integer.
// // If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// // Factorials are often represented with the shorthand notation n!
// // For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// function factorialize(num) {
// let result = [];
// for (let i = 1; i <= num; i++){
//   result.push(i)
// }
//   return result.reduce((product, num) =>
//       product * num, 1)
// }

// factorialize(5);



// function factorialize(num) {
//   let product = 1;
//   for (let i = 2; i <=num; i++) {
//     product *= i;
//   }
//   return product;
// }

// factorialize(5);




// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//   return Math.max(...str.split(" ")
//               .map(word => word.length));
// }
// findLongestWordLength("The quick brown fox jumped over the antidisestablishmentarianism dog");


// //ugly alternative
// function findLongestWordLength(str) {
//   const words = str.split(" ");
//   // words only has 1 element left that is the longest element
//   if (words.length == 1) {
//     return words[0].length;
//   };
//   // if words has multiple elements, remove the first element and recursively call the function
//   return Math.max(
//     words[0].length,
//     findLongestWordLength(words.slice(1).join(" "))
//   );
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");




// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// function largestOfFour(arr) {
// let result = [];
// for (let i = 0; i < arr.length; i++){
//   let biggestNum = arr[i][0];
//   for (let j = 1; j < arr[i].length; j++){
//     if (arr[i][j] > biggestNum){
//       biggestNum = arr[i][j];
//     }
//    }
//   // destructuring:
//   result[i] = biggestNum
//  }
//   return result;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// //SO good:
// function largestOfFour(arr) {
//   return arr.map(function(group) {
//     return group.reduce(function(prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




// //Actual Palindrome solution:
// //Return true or false if provided string is palindrome
// function palindrome(str) {

//   const regex = /[\W_]/g;

//   cleanStr = str.toLowerCase().replace(regex, '');
//       //console.log(cleanStr);

//   for (let i = 0; i < cleanStr.length / 2; i++) {
//       if (cleanStr[i] !== cleanStr[cleanStr.length - 1 -i]) {
//         return false;
//       }
//     }
//   return true;
//   }

// palindrome("A man_, a plan, a canal. Pallnama");





// //Basic MAP exploration:
// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     //console.log(element);
//     //console.log(index);
//     //console.log(array);
//     //console.log(this);
//     return element;
// }, 80);



// //Simple application of MAP:
// let users = [
//   {firstName : "Susan", lastName: "Steward"},
//   {firstName : "Daniel", lastName: "Longbottom"},
//   {firstName : "Jacob", lastName: "Black"}
// ];

// let userFullnames = users.map(function(elem){
//     return `${elem.firstName} ${elem.lastName}`;
// })

// console.log(userFullnames);





// //Fuck this mathematical mess:

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const a = 2 * Math.PI;
//   const newArr = [];

//  const getOrbPd = function(obj) {
//   const b = Math.pow(obj.avgAlt + earthRadius, 3);
//    const c = Math.sqrt(b / GM);
//    const orbPd = Math.round(a * c);

//    return {name: obj.name, orbitalPeriod: orbPd};
//   };

//   for (let elem in arr) {
//     newArr.push(getOrbPd(arr[elem]));
//   };

//   return newArr;
// }

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);




// //Fill in the object constructor with the following methods below:

// const Person = function(firstAndLast) {
//   // Only change code below this line
//   // Complete the method below and implement the others similarly
//   let fullName = firstAndLast;

//   this.getFirstName = function() {
//     return fullName.split(' ')[0];
//   }

//   this.getLastName = function() {
//     return fullName.split(' ')[1];
//   }

//   this.getFullName = function() {
//     return fullName;
//   }

//   this.setFirstName = function(name) {
//     fullName = name + " " + fullName.split(' ')[1];
//   }

//   this.setLastName = function(name) {
//     fullName = fullName.split(' ')[0] + ' ' +  name ;
//   }

//   this.setFullName = function(name) {
//     fullName = name;
//   }

// };

// const bob = new Person('Bob Ross');
// //bob.getFirstName();
// bob.setFirstName("Haskell")
// bob.getFullName();


// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

//Run the tests to see the expected output for each method.
//The methods that take an argument must accept only one argument and it has to be a string.
//These methods must be the only available means of interacting with the object.




// // Create a function that sums two arguments together.
// // If only one argument is provided, then return a function that expects one argument and returns the sum.
// // For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// // Calling this returned function with a single argument will then return the sum:
// // var sumTwoAnd = addTogether(2);
// // sumTwoAnd(3) returns 5.
// // If either argument isn't a valid number, return undefined.

// function addTogether(...args) {
//   //this trickery is next level: (is this destructuring?? YES)
//    const [first, second] = args;
//  // console.log(args);

//   if (args.length === 1 && typeof first === 'number') {
//     return num => {
//       if (typeof num === 'number') {
//         return first + num;
//       }
//     }
//   }
//       if (typeof first === "number" && typeof second === 'number') {
//         return first + second;
//       }
//   }

//   addTogether(2);

//    // let sumTwoAnd = addTogether(2);
//    // console.log(sumTwoAnd(7));



// //Add all odd nums: SUPER BASIC FUNCTION, NOT BEST
// function summedNums(nums){
// let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) {
//     result += nums[i]
//     }
//   }
//   return result
// }
// summedNums([0, 1, 1, 2, 13, 15, 16])




// //create a function that adds together all odd numbers between provided range:
// //try it as a while loop:
// function sumOdd(nums) {
//   let result = 0;
//   let i = 0;
//   while (i < nums.length) {
//       if (nums[i] % 2 !== 0) result += nums[i]
//       i++;
//     }
//   //}
//   return result;
// }

// sumOdd([0, 1, 0, 1, 2, 57, 13]);



// //create a function that adds together all odd numbers between provided range:
// // As a forEach method:
// function summedNums(nums){
// let result = 0;
//   nums.forEach(number => {
//     if (number % 2 !== 0) result += number;
//   });
//   return result;
// }

// summedNums([0, 1, 1, 2, 13, 15, 16])




// //Same problem, proper arrow function
// function summedNums(nums){
//   let result = 0;
//   nums.forEach((number) => {
//     if (number % 2 !== 0) {
//       result += number;
//     }
//   });
//   return result;
// }

// summedNums([0, 1, 1, 2, 13, 15, 16])


// //Same problem, using filter
// function sumNums(num) {
//  const result = num.filter(num => {
//    if (num % 2 === 0) {
//      return num;
//    }
//   })
//   return result.reduce((sum, num) =>
//     sum += num, 0);
// }

// sumNums([2, 2, 2, 7, 9])


// //Same as above, BEST SOLUTION
// //Return sum of even nums, chain methods and use arrow functions:
// function sumEvens(num) {
//   return num.
//          filter((number) => number % 2 === 0)
//         .reduce((sum, number) => sum + number, 0);
// }

// sumEvens([1, 3, 4, 2, 4, 5])
// //should return 10






// //Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// function truthCheck(collection, pre) {
//   return collection.every(obj => obj[pre]);
// }

// truthCheck([
// {name: "Quincy", role: "Founder", isBot: false},
// {name: "Naomi", role: "", isBot: true},
// {name: "Camperbot", role: "Bot", isBot: true}],
//   "isBot");


// //Another example, not as good:
// function truthCheck(collection, pre) {
//   return collection.every(function(element) {
//     return element.hasOwnProperty(pre) && Boolean(element[pre]);
//   });
// }

// truthCheck([
// {name: "Quincy", role: "Founder", isBot: false},
// {name: "Naomi", role: "", isBot: true},
// {name: "Camperbot", role: "Bot", isBot: true}],
//   "isBot");




// //Return an English translated sentence of the passed binary string.
// //The binary string will be space separated.

// function binaryAgent(str) {
//   const binary = str.split(' ');
//   return binary.map(elem => String.fromCharCode(parseInt(elem, 2))).join('');
// }

// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




// //better answer to one below:
// function steamrollArray(arr) {
//     const flat = [].concat(...arr);
//     return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
//   }

// steamrollArray([1, [2], [3, [[4]]]]);


// //Flatten a nested array. You must account for varying levels of nesting.

// function steamrollArray(arr) {
//   let steamrolled = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       let subArray = steamrollArray(arr[i]);
//       steamrolled = steamrolled.concat(subArray);
//     } else {
//       steamrolled.push(arr[i]);
//     }
//   }
//   return steamrolled;
// }

// steamrollArray([1, [2], [3, [[4]]]]);



//These are 2 different solutions based off of different interpretations of the same problem: Note the differences!
// // Given the array arr, iterate through and remove each element starting from the first element (the 0th index)
// // until the function 'func' returns true when the iterated element is passed through it.
// // Then RETURN THE REST OF THE ARRAY once the condition is satisfied, otherwise, arr should be returned as an empty array.

// function dropElements(arr, func) {
// for (let i = 0; i < arr.length; i++) {
//   if (func(arr[0])) {
//     return arr;
//     }
//     arr.shift();
//   }
// return arr;
// }

// dropElements([1, 2, 3, 4, 5, 6, 7, 2], function(n) {return n > 3; });
// dropElements([4, 7, 2, 3, 5], function(n) {return n < 3; });


// //Different approach for above
// function dropElements(arr, func) {
//   let result = [];
//     arr.forEach((num) => {
//       if (func(num)) result.push(num)
//     });
//   return result;
// }
// dropElements([4, -1, 7, 2, 1, 3, 5], function(n) {return n < 4; });





//Find the smallest common multiple of the provided parameters that can be evenly divided by both,
//as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
///The answer here would be 6.


// function smallestCommons(arr) {
//   let min = Math.min(...arr); //1
//   let max = Math.max(...arr); //5
//   let mltpl = max; //5

// for (let i = max; i >= min; i--) {
//   //check if number produces a remainder:
//   if (mltpl % i !== 0) {

// //5%5 !==0 false, move to i=4
// //5%4 !==0 true, 5+5, i=10
// //10%5 !==0 false, move to i=4
// //10%4 !==0 true, 10+5, i=15
// //15%5 !==0 false, move to i=4
// //15%4 !==0 true, 15+5, i=20
// //20%5 !==0 false, move to i=4
// //20%4 !==0 false, move to i=3
// //20%3 !==0 true, 20+5, i = 25
// //25%5 !==0 false, move to i=4
// //25%4 !==0 true, 25+5, i = 30
// //and so on

//       mltpl += max;
//       i = max;
//     }
//   }
//   return mltpl;
// }

// smallestCommons([1, 5]);
// //should return 60
// // smallestCommons([2, 10]) should return 2520




// //A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// //For example, 2 is a prime number because it is only divisible by 1 and 2.
// //In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// //Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// // //create helper function that checks primality of target number
//  function sumPrimes(num) {
//   function isPrime(num) {
//     //We only need to check up to the square root because the square root of num is the largest possible prime divisor.
//     const sqRt = Math.sqrt(num); //num gets passed up from below, new number each time
//     //iterate thru all i values from 2 to 3
//     for (let i = 2; i <= sqRt; i++) {
//       if (num % i === 0) return false;
//     }
//       return true;
//     };
//    let sum = 0;
//   //iterate through all nums from 2 - 10
//   for (i = 2; i <= num; i++) {
//     if (isPrime(i)) sum += i;

// //i = 2, gets passed to isPrime as num, sqRt 2 = 1.4, loop does not run, returns true, 2 gets added to sum, (sum = 2)
// //i = 3, gets passed to isPrime as num, sqRt 3 = 1.73 loop doesn't run, returns true, 3 gets added to sum, (sum = 5)
// //i = 4, gets passed to isPrime as num, sqRt 4 = 2, 4%2 returns false, 4 gets dropped, (sum = 5)
// //i = 5, gets passed to isPrime as num, sqRt 5 = 2.23, 5%2 returns true, 5 gets added to sum, (sum = 10)
// //i = 6, gets passed to isPrime as num, sqRt 6 = 2.449, 6%2 returns false, 6 gets dropped, (sum = 10)
// //i = 7, gets passed to isPrime as num, sqRt 7 = 2.64, 7%2 returns true, gets added to sum, (sum = 17)
// //i = 8, gets passed to isPrime as num, sqRt 8 = 2.82, 8%2 returns false, gets dropped, (sum = 17)
// //i = 9, gets passed to isPrime as num, sqRt 9 = 3, 9%2 first returns true, loops again, 9%3 returns false, gets dropped, (sum = 17)
// //1 = 10, gets passed to isPrime as num, sqRt 10 = 3.16, 10%2 returns false, gets dropped (sum = 17)

//   }
//   return sum;
// }

// sumPrimes(10);
// //should return sum 2,3,5,7 = 17.

// //sumPrimes(977) should return 73156.
// //sumPrimes(6) should equal 10.
// //sumPrimes(64) should equal


// //cleaner application:
// function sumPrimes(num) {
//   // Check all numbers for primality
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0))
//     //primes = [2, 3, 5, 7]
//       primes.push(i);
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);
// }

// sumPrimes(10);





// //Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// //The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers.
// //The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// //For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// function sumFibs(num) {
//   let prevNum = 0;
//   let currNum = 1;
//   let result = 0;

//   while (currNum <= num) {
//      if (currNum % 2 !== 0) {
//       result += currNum;
//      }
//     currNum += prevNum;
//     prevNum = currNum - prevNum;
//     }
//   return result;
// }

//  sumFibs(4);





// // Find the missing letter in the passed letter range and return it.
// // If all letters are present in the range, return undefined.

// function fearNotLetter(str) {
//   //find current charcode at index of first letter of str
//   let currentCode = str.charCodeAt(0);
//   let missing = undefined;

//   str
//   .split('')
//   .forEach(letter => {
//       if (letter.charCodeAt(0) === currentCode) {
//         currentCode++; //console.log(currentCode);
//       } else {
//         missing = String.fromCharCode(currentCode);
//       }
//     });
//     return missing;
//   }

// fearNotLetter("abce");




// //Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// function convertHTML(str) {
//   let strSpread = [...str];

//   for (let i = 0; i < strSpread.length; i++) {
//     switch(strSpread[i]) {
//       case '&':
//         strSpread[i] = '&amp;';
//         break;
//       case '<':
//         strSpread[i] = '&lt;';
//         break;
//       case '>':
//         strSpread[i] = '&gt;';
//         break;
//       case '"':
//         strSpread[i] = '&quot;';
//         break;
//       case "'":
//         strSpread[i] = '&apos;';
//         break;
//     }
//   }
//   return strSpread.join('')
// }

// convertHTML("Dolce & Gabbana");




// //Better solution for one below: add corresponding letter to provided DNA letter to form base pairs. Return 2D array.
// function pairElement(str) {
//  const matchBasePair = function(char) {
//   switch (char) {
//     case 'C':
//       return ['C', 'G'];
//       break;
//     case 'G':
//       return ['G', 'C'];
//       break;
//     case 'A':
//       return ['A', 'T'];
//       break;
//     case 'T':
//       return ['T', 'A'];
//       break;
//   }
// }
//   const pairs = [];
//   for (let i = 0; i < str.length; i++) {
//     pairs.push(matchBasePair(str[i]))
//   }
//   return pairs;
// }

// pairElement("GCG");



// //This solution is for toys
// function pairElement(str) {
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'C') {
//       result.push((str[i] + 'G').split(''));

//     } else if (str[i] === 'G') {
//       result.push((str[i] + 'C').split(''));

//     } else if (str[i] === 'T') {
//       result.push((str[i] + 'A').split(''));

//     } else if (str[i] === 'A') {
//       result.push((str[i] + 'T').split(''));
//     }
//   }
//     return result;
// }

// pairElement("GCG");





//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
//Note: Preserve the case of the first character in the original word when you are replacing it.
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

// function myReplace(str, before, after) {
//   let regex = /^[A-Z]/;

// //check if regex (capital letter) matches first letter of before
//   if (before.match(regex) !== null) {
  //   after = after.replace(after[0], after[0].toUpperCase());
// } else {
//   after = after.toLowerCase();
// }
//   return str.replace(before, after);
// }

// myReplace("He is Sleeping on the couch", "Sleeping", "sitting");




// //If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add 'ay' to it.
// //If a word begins with a vowel, just add 'way' at the end.
// //translatePigLatin("glove") should return the string oveglay.
// function translatePigLatin(str) {
//   //words that begin with a vowel
//   let consRegex = /^[^aeiou]+/;

//   //match all str words that begin with vowels
//   let consWord = str.match(consRegex);

//   //if regex pattern found, it saves the match; else, it returns null
//   return consWord !== null ? str
  //     //if regex pattern found (starts with consonants), it deletes match
//       .replace(consRegex, '')
  //     //adds the match to the end
//       .concat(consWord)
  //     //and adds “ay” to the end
//       .concat('ay')
  //     //OR if word begins with vowel just add way to end of it
//    : str.concat('way')
// }

// translatePigLatin('schwartz');




// //take string and return kebab case
// function spinalCase(str) {
//   return str &&
//   str
//     .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//     .map(x => x.toLowerCase())
//     .join('-');
// }

// spinalCase('This_IsSpinal Tap');


// //Another solution to problem above:
// function spinalCase(str) {
//   // Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;

//   // Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

//   // Replace space and underscore with -
//   return str.replace(regex, "-").toLowerCase();
// }

// // test here
// spinalCase("This Is Spinal Tap");


// Code Explanation:
// regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
// The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
// While returning the string, another replace() replaces spaces and underscores with dashes using regex.





// //return the key value pair in collection that matches source
// function whatIsInAName(collection, source) {

//   const sourceKeys = Object.keys(source);
//     return collection
//       .filter(obj => sourceKeys
//           .every(key => obj.hasOwnProperty(key) &&
//               obj[key] === source[key]));
// }

// // test here
// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }
// );





//return nums that occur only in one of the 2 provided arrays
// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(num => !arr1.includes(num) || !arr2.includes(num));
// }

//  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



//Same problem, different solution using Set:
// function diffArray(arr1, arr2) {
//   const diff = new Set(arr1);
//   for (const elem of arr2) {
//     if (diff.has(elem)) {
//       diff.delete(elem);
//     } else {
//       diff.add(elem);
//     }
//   }
//   return [...diff];
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);





// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// function uniteUnique(arr) {
//   const args = [...arguments];
//   let result = [];

//   for (let i = 0; i < args.length; i++) {
//     for (let j = 0; j < args[i].length; j++) {
//       if (!result.includes(args[i][j])) {
//         result.push(args[i][j]);
//       }
//     }
//   }
//   return result;
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// //Another solution to above: WOWWW
// function uniteUnique(...arr) {
//   return arr
//     .reduce((total, num) => total
//       .concat(
//         num
//           .filter(
//             num => total
//               .indexOf(num) == -1)),[]);
// }
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




// //get passed array, sum all nums in btwn both nums
// function sumAll(arr) {
//   let minNum = Math.min(...arr);
//   let maxNum = Math.max(...arr);
//   let sumNums = 0;
//     for (let i = minNum; i <= maxNum; i++) {
//       sumNums += i;
//     }
//     return sumNums;
//   }

// sumAll([1, 4]);




// //Use sort to sort letters alphabetically
// function alphabeticalOrder(arr) {
//   // Only change code below this line
//   return arr.sort(function(a, b) {
//     return a === b ? 0 : a < b ? -1 : 1;
//   });
//   // Only change code above this line
// }

// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);



// //Better solution to same problem below:
// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }
//chunkArrayInGroups(["a", "b", "c", "d", 'e'], 2);


// //Break arr down into smaller (inner)arrays that are the length of size
// function chunkArrayInGroups(arr, size) {
//   const result = [];
//   for (let i = 0; i < arr.length; i+= size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// chunkArrayInGroups(["a", "b", "c", "d", 'e'], 2);





// //GENIUS SOLUTION TO SAME PROBLEM BELOW:
// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(letter => {
//       return arr[0].toLowerCase().indexOf(letter) !== -1
//     });
// }
//  mutation(["heLlo", "hel"]);


// //test if 1st element in arr contains every letter of 2nd element
// function mutation(arr) {
//    let target = arr[0]; //heLlo
//     let test = arr[1]; //heY
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//     }
//        return true;
// }
// mutation(["heLlo", "heY"]);


// //Another approach:
// // Check if first elem has all letters of second elem, return true if so
// function mutation(arr) {
// //convert both elems to lowercase
// const first = arr[0].toLowerCase().split('');
// const second = arr[1].toLowerCase().split('');

//   return second.every(letter =>
//       first.indexOf(letter) !== -1
//   );
// }

// mutation(["heLlo", "hel"]);


// //Same as below but different
// function sortNums(nums) {
//  return nums
//     .sort((a, b) => a - b);
// }
// sortNums([40, 1, 3, 200047])



// //Use sort to sort nums in array: BASIC FUNCTION
// const numberArray = [40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// numberArray.sort(compareNumbers); // [1, 5, 40, 200]




// //sort items by asc. order in arr, return number of index where num would be inserted in order
// function getIndexToIns(arr, num) {
//   //sort nums
//   arr.sort((a, b) => a - b);
//   //console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       return arr.indexOf(arr[i]);
//     }
//   }
// }

// getIndexToIns([40, 60], 50);


// //Fucking GENIUS solution to same problem above:
// function getIndexToIns(arr, num) {
//   let result = arr
//     //find the index where val is greater than num and return the length of arr up to that point!!!
//     //(It does not insert num into arr, it only checks against it)
//       .filter(val => num > val);
//   return result.length;
// }
// getIndexToIns([40, 60], 50);
// getIndexToIns([20, 3, 5], 19)




// //slice and splice::: (USE SPREAD OPERATOR INSTEAD OF SPLICE)
// //copy arr1 over to arr2 beginning at index n of arr2
// function frankenSplice(arr1, arr2, n) {
// //create new array to iterate over (a copy of arr2)
//   let resultArr = arr2.slice();
//   resultArr.splice(n, 0, ...arr1);
//   return resultArr;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);




// //Convert the first letter of each word in a string toUpperCase
// function titleCase(str){
// const reduceStr = str
//   .toLowerCase()
//   .split(' ');
//   //console.log(reduceStr[0])
// let result = [];
//   for (let i = 0; i < reduceStr.length; i++) {
// let firstLetter = (reduceStr[i][0].toUpperCase());
// result.push(firstLetter + reduceStr[i].slice(1, reduceStr[i][reduceStr[i].length]));
//   }
//   return result.join(' ');
// }

// titleCase("I'm a little tea pot");


// //Same as above, but different
// //Holy fuck this works:
// //replace forEach with Map
// function titleCase(str){
//    return str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     //OR
//       //word[0].toUpperCase().concat(word.slice(1)));
//     .join(' ');
// }

// titleCase("I'm a little tea pot");





// //check if value is classified as boolean primitive (true/ false.)
// function booWho(bool) {
// //return typeof bool === 'boolean';

// // OR:
//   return bool === true || bool === false;
// }

// booWho(false);



// //return first element in arr that satisfies the function
// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//      let num = arr[i];
//      if (func(num)) {
//        return num;
//      }
//     }
//     return undefined;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);



//return truncated str to num of chars. Add ... to the end.
// function truncateString(str, num) {

//     return num < str.length ?
//       str.slice(0, num) + '...' : str;

    // OR::::
      //if (num < str.length) {
  //     return str.slice(0, num) + '...';
  // } else {
    //return str;
//   }
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);




// //return str num of times; if num is negative return empty string
// function repeatStringNumTimes(str, num) {
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += str;
//   }
//   return result;
// }

// repeatStringNumTimes("abc", 3);



// //substring practice concept
// let text = "Hello world!";
// console.log(text.substring(2));
// // llo world!



// // //check str to see if it ends with target
// function confirmEnding(str, target) {
// return str.slice(str.length - target.length) === target;
// }

// confirmEnding("Bastian", "ian");





// //return array of largest nums from EACH array:
// function largestNum(arr) {
//   let total = [];

//   for (let i = 0; i < arr.length; i++) {
//     //set the first value of each subarray to largeNum as a placeholder to start from
//     let largeNum = arr[i][0];
//     //set j to 1 so we can compare this index to largeNum in each sub array
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largeNum) {
//         largeNum = arr[i][j];
//       }
//     }
//     //notice this expression is inside the first for loop (which iterates on the first array)
//     total[i]= largeNum;
//   }
//   return total;
// }

// largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





// //return largest num from entire array:
// function largestNum(arr) {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > num) {
//         num = arr[i][j];
//       }
//     }
//   }
//   return num;
// }

// largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





// function findLongestWordLength(str) {
//   let words = str.split(' ');
//   let maxLength = 0;
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//       }
//   }
//   return maxLength;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");





// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   'Active Duty': true,
//   homePlanet: 'Earth',
//   numCrew: 5
// };

// let returnAnyProp = (objectName, propName) => objectName[propName];

// returnAnyProp(spaceship, 'homePlanet');



// let userName = 'Evan';

// function returnGreeting() {
//     userName ? greeting = (`Sup, ${userName}?!`) : greeting ='Sup brah?';
//     return greeting;
// }

// const userQuestion = 'Schralping today?';
// //console.log(`${userName} asked, ${userQuestion}?`);

// let randomNumber = Math.floor(Math.random() * 8);

// let eightBall = ''

// switch(randomNumber) {
//     case 0:
//         eightBall = 'Yeahhh Brooooo';
//         break;
//     case 1:
//         eightBall = 'Oh for shore';
//         break;
//     case 2:
//         eightBall = 'Reply foggy, try again';
//         break;
//     case 3:
//         eightBall = 'Let me google that for you';
//         break;
//     case 4:
//         eightBall = 'You wish';
//         break;
//     case 5:
//         eightBall = 'Beat it Barney';
//         break;
//     case 6:
//         eightBall = 'Kick rocks, KOOK!';
//         break;
//     case 7:
//         eightBall = 'Dolphinately';
//         break;
// }

// function makeItWork() {
//     console.log(returnGreeting(), userQuestion);
//     console.log(eightBall);
// }

// makeItWork();




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(fruits[0]);




// //user picks from 4 choices
//   getUserChoice = userInput => {
//   userInput = userInput.toLowerCase();
//   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
//     return userInput;
//   } else {
//     return 'U a dummy';
//   }
// }

//   const computerOptions = ['rock', 'paper', 'scissors'];

//   function getComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3);
//     return computerOptions[randomNumber];
// }

// //compare userChoice to computerChoice to determine winner
// const determineWinner = (userChoice, computerChoice) => {
//   if (userChoice === computerChoice) {
//     return 'Tie goes to the weiner!';
//   };
//   if (userChoice === 'bomb') {
//     return 'YOU SLAYED!!';
//   }
//   if (userChoice === 'rock') {
//     if (computerChoice === 'paper') {
//       return 'computer won.';
//   } else {
//     return 'You won!';
//   }
// }
//   if (userChoice === 'paper') {
//     if (computerChoice === 'scissors') {
//       return 'computer won';
//     } else {
//       return 'You won!';
//     }
//   }
//   if (userChoice === 'scissors') {
//     if (computerChoice === 'rock') {
//       return 'computer won.';
//     } else {
//       return 'You Won!';
//     }
//   }
// }

// function playGame() {
//   let userChoice = getUserChoice('paper');
//   let computerChoice = getComputerChoice();

//   console.log(`Your choice: ${userChoice}`);
//   console.log(`Computer choice: ${computerChoice}`);

//   const winnerWinner = determineWinner(userChoice, computerChoice);

//   //this checks if valid entries have been made by user. If so, proceed with game, if not, try again.
//   console.log(winnerWinner ? winnerWinner : 'try again');
// }

// playGame();




// let result = "Ramesh";

// for (i=0; i<= result.length -1; i++) {
//   console.log(result[i]);
// }




// function reverseString(str) {
//   let result = ''
//   for (let i = str.length - 1; i >= 0; i--){
//     result += str[i];
//   }
//   return result;
// }

// reverseString("racecaR");




// function fizzBuzz(n) {
//     // Write your code here
//   let answer;
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 === 0) {
//             answer = 'FizzBuzz';
//             }
//             else if (i % 3 === 0) {
//                 answer = 'Fizz';
//             }
//             else if (i % 5 === 0) {
//                 answer = 'Buzz';
//             }
//             else {
//                 answer = i;
//             }
//     }
//   return answer;
// }

// fizzBuzz(17)



// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//    return {
//        name,
//        age,
//        gender
//    }
//   // Only change code above this line
// };

// console.log(createPerson("Zodiac Hasbro", 56, "male"));




// //more destructuring
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";
//   // Only change code below this line
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//       failureItems.push(`<li class="text-warning">${arr[i]}<li>`);
//   }
//   // Only change code above this line
//   return failureItems;
// }

// const failuresList = makeList(result.failure);




// //Destructuring:

// const user = {
//   name: 'John Doe',
//   age: 34
// };

// const {name, age} = user;

// console.log(user.name, user.age);





// // Update code so that the output =  [2, 5, 7]
// const stuff = [5, 7, 2];

// function editInPlace() {
//     const firstElement = stuff.pop();
//       stuff.unshift(firstElement);
//         return stuff;
// }


// //Written a little different:
// // Update code so that the output =  [2, 5, 7]
// function editInPlace(num) {
//   const popped = num.pop();
//   num.unshift(popped);
//   return num;
// }
// editInPlace([5, 7, 2])


// //Same as above, but using slice
// // Update code so that the output =  [2, 5, 7]
// function editInPlace(num) {
//   const result = num.slice(0, 2);
//    result.unshift(2);
//     return result;
// }

// editInPlace([5, 7, 2])



// //Basic recursion:
// function printNums(index, arr) {
//   if (index === arr.length) return [];
//     else {
//       //console.log(arr[index])
//     const newArr = printNums(index + 1, arr);
//      newArr.push(arr[index]);
//     return newArr;
//   }
// }
// printNums(0, [1, 2, 3, 4])
// //notice the order it prints in




// //Use recursion:
// // Produce range of numbers from startNum to EndNum
// // Notice how this sort of works backwards: it pushes endNum-1 over and over until endNum is less than startNum,
// // then finally pushes the original endNum to the array and returns it.
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//  } else {
//         //if we wanted to return only odd nums in range:
//         // const arr = rangeOfNumbers(startNum, endNum - 2);
//       const arr = rangeOfNumbers(startNum, endNum - 1);
//       arr.push(endNum);
//       return arr;
//     }
//   }

// rangeOfNumbers(13, 27)



// //Same as above: this is how we would do it with a loop:
// function rangeOfNumbers(startNum, endNum) {
//   let result = [];
//   for (let i = startNum; i <= endNum; i++) {
//     result.push(i)
//   }
//   return result;
// }
// rangeOfNumbers(13, 27)



// //RECURSION CONCEPT, USING FOR LOOP:
// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++){
//     product *= arr[i];
//   }
//   return product;
// }

// multiply([1, 2, 3, 4, 12], 4)
// //i = 0, product = 1*1
// //i = 1, product = 1*2
// //1 = 2, product = 2*3
// //i = 3, product = 6*4
// //= 24


// //TRUE RECURSION: NO LOOP, CALLS ITSELF:
// function multiply(arr, n){
//   //base case:
//   if (n <= 0) return 1;
//     else return multiply(arr, n - 1) * arr[n - 1];
//   }

// multiply([1, 2, 3, 4, 12], 4)
// //  arr[3] = 4
// //  arr[2] = 3
// //  arr[1] = 2
// //  return 1
// //THEN, THE BUBBLE UP:
// //1*2*3*4 = 24



// // Write a recursion function that returns the sum of the first n elements of an array:
// function sum(arr, n){
// //write exit statement:
//   if (n <= 0) return 0;
//     //A FUNCTION IS EQUAL TO WHATEVER IT RETURNS:::::THIS CAN BE A SINGLE NUMBER
//     else return sum(arr, n - 1) + arr[n - 1];
// }
// sum([2, 3, 4, 5], 3)
// //4 + 3 + 2
// //=9



// //How do we do this same thing but with reduce?
// function sum(arr, n) {
//   return arr
//     .slice(0, n)
//      .reduce((sum, number) => sum + number, 0)
// }
// sum([2, 3, 4, 5], 3)
// //9



// //.Map?
// function sum(arr, n) {

// }
// sum([2, 3, 4, 5], 3)



// //Recursion for fibonacci:
// function fib(n) {
//   //debugger;
//   if (n === 2 || n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// //fib(7)
// //fib(23)





// //Try this with recursion:
// // Repeat a given string str (first argument) for num times (second argument).
// // Return an empty string if num is not a positive number.
// //do not use the built-in .repeat() method.
// function repeatStringNumTimes(str, num) {
//   if (num <= 0) return '';
//   else return repeatStringNumTimes(str, num -1) + str;
// }
// repeatStringNumTimes("abc", 3);






// //Produce a random range in between 2 values provided
// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   return Math.floor(Math.random() * (myMax - myMin +1) + myMin);
//   // Only change code above this line
// }

// randomRange(2, 12)





// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
// for (let i = 0; i < contacts.length; i++) {
//   if (name === contacts[i].firstName) {
//     if (contacts[i].hasOwnProperty(prop)) {
//       return contacts[i][prop];
//     }
//     else {
//       return "No such property";
//     }
//   }
// }

// return "No such contact";
// }

// lookUpProfile("Akira", "likes");



// //multiply all numbers in array, return product
// function multiply(arr) {
//     let product = 1;
//     for (let i = 0; i < arr.length; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }
// multiply([5, 2, 3])



// //Sum all nums in array
// const myArr = [2, 3, 4, 5, 6];

// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
// total += myArr[i];
// }
// console.log(total);


// //Sum all nums in array: EASIEST
// function sumNums(arr) {
// return arr.reduce((sum, num) =>
//   sum + num, 0);
// }
// sumNums([2, 3, 4, 5, 6]);






// // Setup
// const myArray = [];

// // Only change code below this line

// for (let i = 0; i < 6; i++) {
// myArray.push(i);
// }
// console.log(myArray);




// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {

//     if (prop !== 'tracks' && value !== "") {
//         records[id][prop] = value;
//     }
//     else if (prop === 'tracks' && value !== "" && records[id].hasOwnProperty('tracks') === false) {
//         records[id][prop] = [value];
//     }
//     else if (prop === 'tracks' & value !== "") {
//         records[id][prop].push(value);
//     }
//     else if (value === '') {
//        delete records[id][prop];
//     }

//   return records;
// }

// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")


// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.





// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp) === true) {
//     return obj[checkProp];
//   }
//   else {return "Not Found";
//   }
//   // Only change code above this line
// }




// document.addEventListener("click", function(event) {
//     console.log(event);
// })




// function HouseKeeper(name, age, cleaningPrefs, location) {
//     this.name = name;
//     this.age = age;
//     this.cleaningPrefs= cleaningPrefs;
//     this.location = location;
//     this.clean = function () {
//         alert("May i clean your junk?");
//     }
// }

// var HouseKeeper2 = new HouseKeeper("Sandra", 471, "tubs only", "fruitvale");

// console.log(HouseKeeper2.clean());





// function countDown(n) {

//     var result = [];

//     if (n >= 0 && n <= 15) {
//     for (let i = n; i >= 0; i--) {
//          result.push(i);
//         }
//         return result;
//     } else if (n >= 16 && n <= 25) {
//         for (let i = n; i <= 25; i++) {
//         result.push(i);
//         }
//         return result;
//      }
//     return "No comprende";
// }

// //return string of nums that countdown to 0 from num
// function countdown(num) {
//   let result = [];
//   for (let i = num; i >= 0; i--) {
//     result.push(i);
//   }
//   return result.toString();
// }
// countdown(11)






//Produce fibonacci sequnce up to num of places provided
// function fibGen(n) {
// //start with empty array
//     var result = [];

// //if n = 1, it returns an array containing 0
//     if (n === 1) {
//          result = [0];
//     }
//         //or if n = 2 it returns an array containing 1, 2
//     else if (n === 2) {
//          result = [0,1];
//     }
//         //or if n > 2 it returns an array that begins with [0,1] then adds on the sum of the last 2 nums to the array
// // continue to loop until n = array.length
//     else if (n > 2) {
//         result = [0,1];
//         for (var i = 2; i < n; i++){
//         result.push(result[result.length - 2] + result[result.length -1])
//         }
//     }

// return result
// }

// fibGen(10)



// //Write a function to reverse provided string
// //How can we do this with slice/ splice/ concat???
// function reverseString(str) {
//   let result = []
//   for (let i = str.length - 1; i >= 0; i--) {
//     result.push(str[i]);
//   }
//   return result.join('')
// }
// reverseString("hello");





// // You are given two arrays and an index.
// // Copy each element of the first array into the second array, in order.
// // Begin inserting elements at index n of the second array.
// // Return the resulting array. The input arrays should remain the same after the function runs.
// function frankenSplice(arr1, arr2, n) {
//   //make copy of array
//   let newArr2 = arr2.slice();
//   //this doesn't work, not sure why:
//   //let newArr1 = [...arr1];
//   //newArr2.splice(n, 0, newArr1);
//   newArr2.splice(n, 0, ...arr1);
//   return newArr2;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);






// // Remove all falsy values from an array. Return a new array; do not mutate the original array.
// // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// // Hint: Try converting each value to a Boolean.
// function bouncer(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) result.push(arr[i])
//     }
//   return result;
// }

// bouncer([7, "ate", "", false, 9]);


// //Same as above
// //Let's use our brains:
// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
// bouncer([7, "ate", "", false, 9]);




// //Higher Order Function:
// const higherOrderFunc = param => {
//   param();
//   return `I just invoked ${param.name} as a callback function!`
// }

// const anotherFunc = () => {
//   return 'I\'m being invoked by the higher-order function!';
// }

// higherOrderFunc(anotherFunc);
// anotherFunc();




// function multiply(a){
//   return function(b){
//     return function(c){
//       return a*b*c;
//     };
//   };
// };
// const double = multiply(2);
// const triple = multiply(3);

// //triple(double(4)(5))(1);
// //double(2)(4);
// //double(double(2)(4))(1);




// function manipulateStudentRecord(obj, operation, prop, newValue) {
//   if (operation === 'delete' && obj.hasOwnProperty(prop)) {
//     delete obj[prop];
//     return obj;

//   } else if (operation === 'edit' && obj.hasOwnProperty(prop)) {
//       obj[prop] = newValue;
//       return obj;

//     } else return obj;
// }

// const obj = {
//   name: 'Mary',
//   lastName: 'Jones',
//   city: 'Austin'
// };

// console.log(manipulateStudentRecord(obj, "edit", "city", "Nashville"))




// //MY VERSION:::::
// //create inventory list:
// //addItem, removeItem, getList
// //return all functions as object

// //Setup:
// function inventoryList() {
//   //create blank list:
//   let result = [];

//   //add item to list
//   const addItem = (item) => {
//     //check if item exists, then push
//     if (result.indexOf(item) === -1) {
//     //if (item !== null && result.indexOf(item) === -1) {
//       //add item
//       result.push(item);
//     }
//   }
//   //to remove an item:
//   const removeItem = (item) => {
//     if (result.indexOf(item) > -1) {
//     //if (item !== null && result.indexOf(item) > -1) {
//       result.splice(result.indexOf(item), 1);
//     }
//   }
//   //to return the current version of list:
//   const getList = () => {
//     return result ? result : null;
//   }

//     return {
//       addItem: addItem,
//       removeItem: removeItem,
//       getList: getList
//   };
//  }

// //Now let's put the list to work
// function makeList(input) {

//   let list = inventoryList();
//  // let input = ['add watermelon', 'remove salt', 'getList'];
//   let taskCount = input.length;

//    for (let i = 0; i < input.length; i++) {

//      const trimmedInput = input[i].trim().split(' ');
//      //console.log(trimmedInput);

//       if (trimmedInput[0] === 'add') {
//           list.addItem(trimmedInput[1]);

//       } else if (trimmedInput[0] === 'remove') {
//           list.removeItem(trimmedInput[1]);

//       } else if (trimmedInput[0] === 'getList') {
//           const updatedList = list.getList();
//           return updatedList.length === 0 ? 'List is empty' :
//           updatedList.join(', ')
//         };
//       }
//     }

// makeList(['add juice', 'remove salt', 'add cucumber', 'remove cucumber', 'getList'])




//GENERIC VERSION
// function inventoryList() {

//       var items = [];
//       function add(item) {
//           if (item !== null && items.indexOf(item) === -1) {
//             //const index = items.indexOf(item);
//             //if (index === -1) {
//                 items.push(item);
//             //}
//           }
//       }
//       function remove(item) {
//           const index = items.indexOf(item);
//          // if (index > -1) {
//           if (items.indexOf(item) > -1) {
//               items.splice(index, 1);
//           }
//       }
//       function getList() {
//           if (items){
//              return items;
//           } else {
//              return null;
//           }
//       }

//       return {
//           add: add,
//           getList: getList,
//           remove: remove
//       };
//   }


//   function main() {

//     const obj = inventoryList();
//     const operationCount = 3;

//     let inputData = ['add Pineapple', 'remove Apple', 'getList'];

//     for (let k=1; k <= operationCount; k ++) {
//         for(let i = 0; i < inputData.length; i++) {
//             const operationInfo = inputData[i].trim().split(' ');

//             if (operationInfo[0] === 'add') {
//                 obj.add(operationInfo[1]);

//             } else if (operationInfo[0] === 'remove') {
//                 obj.remove(operationInfo[1]);

//             } else if (operationInfo[0] === 'getList') {
//                 const res = obj.getList();
//                 if (res.length === 0) {
//                 return 'No Items';

//                 } else {
//                     return res.join(',');
//                 }
//             }
//         }
//     }
// }

// main();





// function compareTriplets(a, b) {
//     let result = [];
//     let amyScore = 0;
//     let bobScore = 0;
//     for (let i = 0; i < 3; i++) {
//         if (a[i] > b[i]) {
//            amyScore ++;
//       } else if (b[i] > a[i]) {
//            bobScore ++;
//       }
//     }
//    result.push(amyScore);
//     result.push(bobScore);
//   return result;
// }
//   compareTriplets([17, 28, 30], [99, 16, 8])




// //Sum right diagonals and left diagonals of a square matrix and return the difference of the two
// function diagonalDifference(arr) {
//     // Write your code here
//     let rightDiag = 0, leftDiag = 0;

//     for (let i = 0; i < arr.length; i++) {
//       rightDiag += arr[i][i];
//      // console.log(rightDiag);
//       leftDiag += arr[arr.length - 1 -i][i];
//     }

//     return Math.abs(rightDiag - leftDiag);
// }

// diagonalDifference([
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]
// ]);



// //print ratio of pos nums, negative nums, and zeros to total nums, each printed on new line
// function plusMinus(arr) {
//   let negNums = 0, posNums = 0, zeros = 0;
//   let denom = arr.length;

//   for (let i = 0; i < denom; i++) {
//     if (arr[i] < 0) {
//       negNums ++;
//     } else if (arr[i] > 0) {
//       posNums ++;
//     } else if (arr[i] === 0) {
//       zeros ++
//      }
//   }
//     console.log((negNums / denom).toFixed(6));
//     console.log((posNums / denom).toFixed(6));
//     console.log((zeros / denom).toFixed(6));
// }

// plusMinus([-4, 3, -9, 0, 4, 1])





// // Build a stupid tree using only spaces and '#'. Must be right aligned.
// function buildTree(num) {
//   //make emptry array to push to
//     var stair = [];
//     var count = 0;
//     for (var i = 0; i < num; i++) {
//       //build new aray for each line
//         var horiz = [];
//         for (var j = 0; j < num; j++) {
//           //first array: Once this is complete, count is increased +1 and loop repeats
//             //i = 0 && 0 >= 6 - 1 - 0, push ' ',
//             //i = 1 && 1 >= 6 - 1 - 1, push ' ',
//             //i = 2 && 2 >= 6 - 1 - 2, push ' ',
//             //i = 3 && 3 >= 6 - 1 - 3, push ' ',
//             //i = 4 && 4 >= 6 - 1 - 4, push ' ',
//             //i = 5 && 5 >= 6 - 1 - 5, push '#',
//             if (i == count && j >= num - 1 - count) {
//                 horiz[j] = '#';
//             } else {
//                 horiz[j] = ' ';
//             }
//         }
//         //complete each line, then increase count +1
//         count++;
//         //finish array by pushing and joining;
//         stair.push(horiz.join(''));
//     }
//     //console log with new line added to each array
//     console.log(stair.join('\n'));
// }

// buildTree(6);


// //sort arr
// //then pop, reduce
// //then shift, reduce
// //console.log result on same line
// function miniMaxSum(arr) {
//   function compareNums(a, b) {
//     return a-b;
//   }
//     const sorted = arr.sort(compareNums);
//     const lilNum = sorted.slice(0, sorted.length -1).reduce((sum, num) => sum + num, 0);
//     const bigNum = sorted.slice(1).reduce((sum, num) => sum + num, 0);

//     let result = [];
//     result.push(lilNum);
//     result.push(bigNum);

//     console.log(result.join(' '));
// }

// miniMaxSum([1, 3, 9, 7, 5]);




// //return count of largest nums, n represents num of nums (lol)
// function birthdayCakeCandles(n, candles) {
//   let tallest = Math.max(...candles);
//   let count = 0;
//    candles.forEach((num) => {
//       if (tallest === num) count++
//     });
//   return count;
// }
// birthdayCakeCandles(4, [3, 3, 2, 1, 3])




// //convert time to military
// function timeConversion(s) {
//     // Write your code here
//   let hours = s.substring(0, 2);
//   let mins = s.substring(3,5);
//   let secs = s.substring(6,8);
//   let amOrPm = s.substring(8,10);

//   if (hours === '12' && amOrPm === 'AM') {
//     return `00:${mins}:${secs}`;
//   } else if (hours !== '12' && amOrPm === 'PM') {
//     return `${parseInt(hours) + 12}:${mins}:${secs}`;
//   } else {
//     return `${hours}:${mins}:${secs}`;
//   }
// }
// timeConversion('12:05:45AM')





// //Palindrome checker: basic, no regex for special chars.
// //DO NOT USE TERNARY-- loop needs to run thru entire array looking for ONLY false results.
// function palindrome(word) {
//   for (let i = 0; i < word.length / 2; i++) {
//     //console.log(word[i]);
//       if (word[i] !== word[word.length - 1 - i]) return false;
//     }
//   return true;
// }

// palindrome('raacecar')






// //Return sum of all multiples of 3 and 5 that are less than number
// //If the number is divisible by 15 then only include that number once
// //if the number is negative then return 0
// function solution(number){
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//   if (i % 3 === 0 || i % 5 === 0) sum += i;
//     //console.log(sum);
//     }
//   return sum;
// }
// solution(23)


// //Better solution to above:
// function solution(number){
//   return number < 1 ?
//     0 : [
//       ...new Array(number).keys()
//     ]
//     .filter(n => n % 3 == 0 || n % 5 == 0)
//     .reduce((a, b) => a + b);
// }
// solution(23)




// //Roman Numeral Generator, Fancy:
// //read about this here: https://javascript.info/map-set
// //Map preserves the order of key/value insertion, which is why we start with large nums;
// const romanToNum = new Map();
// //start with big nums:
// romanToNum.set('M', 1000)
//     .set('CM', 900)
//     .set("D", 500)
//     .set("CD", 400)
//     .set("C", 100)
//     .set("XC", 90)
//     .set("L", 50)
//     .set("XL", 40)
//     .set("X", 10)
//     .set("IX", 9)
//     .set("V", 5)
//     .set("IV", 4)
//     .set("I", 1);
// //console.log(romanToNum);
// //console.log(romanToNum.get('V'))

// const numLimit = 3999;

// const numToRom = (num) => {

//   //set constraints
//   if (num > numLimit) {
//     throw new Error(`Number is too high. Max is ${numLimit}.`);
//   } else if (num < 0) {
//   throw new Error('Number must be greater than 0.')
//   };

//   //Now let's get to work
//   let result = '';

//   //value is current value from romanToNum Map, and roman is the corresponding roman numeral
//   romanToNum.forEach((value, roman) => {
//     //console.log(value);
//   //while the number is greater than the current roman value, subtract value and add roman letter to result
//     while (num >= value) {
//       num -= value;
//       result += roman;
//       //console.log(value);
//     }
//   });
//   return result;
// }
// numToRom(1904)




// //Roman Numeral Converter, here we go:
// function roman(r) {
//   switch(r) {
//     case 1:
//       return 'I';
//       break;
//     case 5:
//       return 'V';
//       break;
//     case 10:
//       return 'X';
//       break;
//     case 50:
//       return 'L';
//       break;
//     case 100:
//       return 'C';
//       break;
//     case 500:
//       return 'D';
//       break;
//     case 1000:
//       return 'M';
//       break;
//   }
// }
// function numberToRoman(str) {

// }
// numberToRoman(1904)





// //Filter unique array members
// //Use Set: it does the work automatically
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

//   let values = [
//     "Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   /* your code */


// console.log(unique(values)); // Hare, Krishna, :-O




// //Filter potential anagrams (anagram = ear, are, rea) and return only one entry per anagram
// //Map is a collection of key:value pairs. Preserves type, unlike Object, which converts keys to strings.
// function anagramCleaned(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let sorted = word
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('');
//     //set key and value pairs, old word with new sorted word
//     map.set(sorted, word);
//   }
//   //iterate over map values (we don’t need keys in the result) and returns an array of values.
//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(anagramCleaned(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"



// //Alternative to above:
// //Can also use plain Object (not Map) becuase keys are already strings, so we don't have to worry about conversion
// function aclean(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }

//   return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));


// //We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
// //But that doesn’t work:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// // Error: keys.push is not a function
// // This is because map.keys() returns an iterable, but not an array.
// keys.push("more");
//console.log(keys);

// //How can we fix it?
// let map = new Map();
// map.set("name", "John");
// //this converts to an array, that we can then push to:
// let keys = Array.from(map.keys());
// keys.push("more");

// console.log(keys);
// console.log(map.get('name'))


// //And a further simplification:
// let map = new Map();
// map.set('name', 'John');
// let keys = [...map.keys(), 'more'];
// console.log(keys);


//Return Caesar cypher where provided letters need to each shift by 13 spaces.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// function rot13(str) {
// //Can we split words into new array by (' ') then replace them with updated words??
// //only select regex /[A-Z]/;
// //push .fromCharCode() -13 to an array
// //convert char back to letter with String.fromCharCode() then join('')
// //return

// let regex = /[A-Z]/;

// const cleanWords = ()

//   return str;

// }

// rot13("SERR PBQR PNZC");

// let value = 'v';
// let valNum = value.charCodeAt(0) -13;
// console.log(String.fromCharCode(valNum));






// function caesarCipher(str, key) {
//   return str
//     .replace(/[A-Z]/g, c => String
//       .fromCharCode((c.charCodeAt(0) -65 + key) % 26 + 65));
// }
// caesarCipher("SERR PBQR PNZC");
