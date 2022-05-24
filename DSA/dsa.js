//   Coding question asked to TejashriCheck if 2 given strings are anagrams of
//   one another Eg. str1: bart, str2: brat returns: True Eg. str1: bart, str2: cart
//   returns: False Follow up: will this work this with Astronomer and Moon starer

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let arr1 = str1.split("").sort().join("");
  let arr2 = str2.split("").sort().join("");
  return arr1 === arr2;
}

console.log(checkAnagram("bart", "brat"));
console.log(checkAnagram("bart", "cart"));

//   Program 2 Given a one-dimensional array representing a single lane
//   with vehicles moving in either directions, write a function to determine
//   how many pairs of vehicles are moving towards each other. Input: [>, <, <, >, >] Output: 2
//   Input: [>, <, >, >, <] Output: 4calculate the number of times there will be a collision between left and right

function checkLane(arr) {
  let j = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ">") count += 1;
    if (arr[i] === "<") j = count + j;
  }
  return j;
}

console.log(checkLane([">", "<", "<", ">", ">"]));
console.log(checkLane([">", "<", ">", ">", "<"]));
