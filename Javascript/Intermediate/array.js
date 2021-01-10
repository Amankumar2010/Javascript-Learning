var countries = ["India","usa","japan","russia"];
var states = new Array("rajasthan","delhi","mumbai","assam");
console.log(states[1]);

console.log(states.length);
states[0] = "punjab";

console.log(states);

var user = ["hitesh","hitesh@lco.dev" , 3 , 34 , true];
console.log(user);

user.pop(); // removes last value
console.log(user);

user.unshift("new value"); // adds value in the front of array
console.log(user);

user.shift() //removes the first value
console.log(user);

console.log(user.indexOf(5)); //notifies the location and if not available in array gives -1

console.log(Array.from("hitesh"));

