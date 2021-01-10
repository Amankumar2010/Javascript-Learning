//Creating an object 
var user = {
    firstName : "Aman" ,
    lastName : "Kumar" ,
    role : "Admin" ,
    loginCount: 32,
    facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.table(user); //Shows inside table


//Fun Assignment 

var iphone13 = {
    phoneName : "Iphone 13",
    priceValue : "rs 1,30,000",
    ramSpec : "6 Gb",
    internalStorage : "128 Gb",
    colour : "Red"
};

console.table(iphone13);
