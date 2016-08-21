// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n < 0){
    return null;
  }else{
    return n > 0 ? n * factorial(--n) : 1;
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if(!array.length){
    return 0;
  }else{
    return array[array.length - 1] + sum(array.slice(0, array.length - 1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    if(Array.isArray(array[i])){
      sum += arraySum(array[i]);
    }else{
      sum += array[i];
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n === 0){
    return true;
  }else if(n === 1 || n === -1){
    return false;
  }else{
    return n > 0 ? isEven(n - 2) : isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0){
    return 0;
  }else{
    return n > 0 ? sumBelow(--n) + n : sumBelow(++n) + n;
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var num = x < y ? x + 1 : x - 1;
  if((num < y || num > y) && x !== y){
    return [num].concat(range(num, y));
  }else{
    return [];
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(!exp){
    return 1;
  }else if(exp > 0){
    return base * exponent(base, --exp);
  }else if(exp < 0){
    return (1 / base) * exponent(base, ++exp);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
  // 2^x = n
  // 2^4 = 16
var powerOfTwo = function(n) {
  if(n === 1){
    return true;
  }else if(n < 1){
    return false;
  }else{
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if(!string.length){
    return '';
  }else{
    return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // strip spaces
  let str = string.replace(/\s/g, '').toLowerCase();
  let [first, rest, last] = [str[0], str.substring(1, str.length - 1), str[str.length - 1]];
  if(first !== last){
    return false;
  }else if(rest.length === 1 || (rest.length === 2 && first === last)){
    return true;
  }else if(first === last){
    return palindrome(rest); 
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// NOTE: this will not work for rational numbers
var modulo = function(x, y) {
  if((typeof x !== 'number' && typeof y !== 'number') || y === 0) return NaN;

  var X = x > 0 ? x : -x;
  var Y = y > 0 ? y : -y; 
  var ans = X - Y;
   
  if(X < Y){
    return x;
  }else{ 
    if(x < 0) ans = -ans;
    return modulo(ans, y);
  }
};

// var modulo = function(x, y) {
//   // if(x === 0 && y === 0) return NaN;
//   // if(x < y || (x < 0 && y < 0)){
//   //   return x;
//   // }else{
//   //   return modulo(x - y, y);
//   // }
// };

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
  // 2*3 === 2+2+2
  // -2-(-1) -> switches to positives
  // base case: y === 0
var multiply = function(x, y) {
  if(y === 0){
    return 0;
  }else{
    return y > 0 ? x + multiply(x, --y) : -(x) + multiply(x, ++y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
  // 8/2 === 8-2-2
  // 8/2 === count(2+2+2+2)
var divide = function(x, y) {
  if((typeof x !== 'number' && typeof y !== 'number') || y === 0) return NaN;
  var count = 0;
  var X = x > 0 ? x : -x;
  var Y = y > 0 ? y : -y;
  var ans = X - Y;

  if(X >= Y){
    if(x < 0) ans = -ans;
    if((x > 0 && y > 0) || (x < 0 && y < 0)){
      count = divide(ans, y) + 1; 
    }else{
      count = divide(ans, y) - 1;
    }
  }
  return count;
};


// var divide = function(x, y) {
//   if(x === 0 && y === 0) return NaN;

//   if(x < y || (y < 0 && x > y)){
//     return 0;
//   }else if(x === y){
//     return 1;
//   }else{
//     return y > 0 ? 1 + divide(x - y, y) : -1 + divide(x + y, y);
//   }
// };

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // return null for negative integers
  if(x < 0 || y < 0) return null;
    
  if(x > y){
    if(x % y === 0){
      return y;
    }else{
      return gcd(y, x % y);
    }
  }else{
    if(y % x === 0){
      return x;
    }else{
      return gcd(x, y % x);
    }
  }
};
// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1[0] !== str2[0]){
    return false;
  }else if(!str1 && !str2){
    return true;
  }else {
    return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if(!str){
    return [];
  }else{
    return [str[0]].concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if(!array.length){
    return [];
  }else{
    return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if(!length){
    return [];
  }else{
    return [value].concat(buildList(value, --length));
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  let inc = 0;
  if(!array.length){
    return inc;
  }else{
    if(array[0] === value) inc++;
    return inc + countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if(!array.length){
    return [];
  }else{
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {
//   'e': {
//     'x':'y'
//   }, 
//   't':{
//     'r': {
//       'e':'r'
//     }, 
//     'p': {
//       'y':'r'
//     }
//   },
//   'y':'e'
// };
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  for(let p in obj){
    if(p === key) count++;
    if(typeof obj[p] === 'object'){ 
      count += countKeysInObj(obj[p], key);
    }
  }
  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for(let p in obj){
    if(obj[p] === value) count++;
    if(typeof obj[p] === 'object'){ 
      count += countValuesInObj(obj[p], value);
    }
  }
  return count;

};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for(let p in obj){
    if(p === key) {
      let val = obj[key];
      delete obj[key];
      obj[newKey] = val;
    }
    if(typeof obj[p] === 'object'){ 
      replaceKeysInObj(obj[p], key, newKey);
    }
  }
  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  if(n < 0){
    return [];
  }else{
    return [nthFibo(n)].concat(fibonacci(n - 1).reverse()).reverse();
  }
};

//***************************************************************************
  // alternate solution - doesn't pass test because you have to recursively call fibonacci
    // var fibonacci = function(num) {
    //   let arr = [];
    //   let cache = {};

    //   (function fib(n){
    //     let value;
    //     if(cache[n]){
    //       value = cache[n];
    //     }else{
    //       if(n < 2){
    //         value = n;
    //       }else{
    //         value = fib(n - 1) + fib(n - 2);
    //       }
    //       cache[n] = value;
    //     }
    //     return value;
    //   })(num);

    //   for(let p in cache){
    //     arr.push(cache[p]);
    //   }

    //   return arr;
    // };
//***************************************************************************

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(!nthFibo.cache) nthFibo.cache = {};

  if(n < 0){
    return null;
  }else if(nthFibo.cache[n]){
    // is it cached?
    return nthFibo.cache[n];
  }else if(n < 2){
    // store 0 and 1 into cache
    return nthFibo.cache[n] = n;
  }else{
    // return the value inside the cache
    return nthFibo.cache[n] = nthFibo(n - 1) + nthFibo(n - 2);
  }
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if(!input.length){
    return [];
  }else{
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if(!array.length){
    return [];
  }else{
    return [array[0][0].toUpperCase() + array[0].substring(1).toLowerCase()]
           .concat(capitalizeFirst(array.slice(1)));
  }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for(let p in obj){
    if(obj[p] % 2 === 0) sum += obj[p];
    if(typeof obj[p] === 'object'){
      sum += nestedEvenSum(obj[p]);
    }
  }
  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  return arrays.reduce((acc, cur)=>{
    return Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur);
  }, []);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str) {
  let o = arguments[1] || {};
  if(!str.length){
    return o;
  }else{
    if(!o[str[0]]){
      o[str[0]] = 1;
    }else{
      o[str[0]]++;
    }
    return letterTally(str.slice(1), o);
  }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if(!list.length){
    return [];
  }else{
    return list[0] !== list[1] ? [list[0]].concat(compress(list.slice(1))) : compress(list.slice(1));
  }
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if(!array.length){
    return [];
  }else{
    return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
  }
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if(!array.length){
    return [];
  }else{
    return array[0] === array[1] ? minimizeZeroes(array.slice(1)) : [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if(!array.length){
    return [];
  }else{
    return [
      array.length % 2 === 0 ? Math.abs(array[0]) : -(Math.abs(array[0]))
    ].concat(alternateSign(array.slice(1)));
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let pool = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if(!str.length){
    return '';
  }else{
    let text = str[0].replace(new RegExp(str[0]), pool[+str[0]]);
    return Number.isInteger(+str[0]) && str[0] !== ' ' ? text + numToText(str.slice(1)) : str[0] + numToText(str.slice(1)); 
  }
};

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  if(!node) node = document.children[0]; // html tag
  var count = 0;

  if(node.localName === tag) count++;
  
  if(node.children.length){
    for(var i = 0; i < node.children.length; i++){
      count += tagCount(tag, node.children[i]);
    }
  }
  
  return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
// returns the index of the target. assume unique array and in order
var binarySearch = function(array, target, min, max) {
  if(!min && !max){
    var min = 0;
    var max = array.length - 1;
  }
  
  var mid = Math.floor((max + min) / 2);

  if(max - min === 1){
    if(array[max] === target){
      return max;
    }else if(array[min] === target){
      return min;
    }else{
      return null;
    }
  }
  
  if(array[mid] === target){
    return mid;
  }else if(array[mid] > target){
    return binarySearch(array, target, min, mid);
  }else if(array[mid] < target){
    return binarySearch(array, target, mid, max);
  }
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
   
};
