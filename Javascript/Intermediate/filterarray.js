// var testArray = [2,4,3,6,5,9,8];

// console.log(testArray.fill("h" , 1,5)); // 1)what the replace with , 2)start point , 3) end point

// const myNumber = [23,24,25,55,66,77,87,98];

// const result = myNumber.filter((num) => num != 55 ); //filters out with the condition given

// console.log(result);

var users = ["Ted","Tim","Ton","Sam","Sor","Sod"];

// console.log(users.slice(1)); //slices and displays the first and excluded last

users.splice(1,4,"hi","bye"); //counts the first and how many should be deleted  and replaces it with given string array 
console.log(users); 
