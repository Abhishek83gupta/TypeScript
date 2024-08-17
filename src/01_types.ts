// .............. String -> "" or '' or ``, Number ...............

// explict annotate
let userName: string = "Abhishek";

// Implicit
let password = "abc@123";
 
let address:string;
address = "Thane";

let userAge : number = 46;

// address = 24354   // Error !!! // It's a string
 
userName.toUpperCase();  // Only string method 
// userAge.toUpperCase()   // Error !!  // It's a number,string method can't use

console.log(typeof userName);    // string
console.log(typeof password);    // string
console.log(typeof userAge);     // number

let isVariable = `Hello`
console.log(typeof isVariable)     // string

let userEmail = "abc@gmail.com"
const userDetailsDescription = `User is a programmer and it's email id ${userEmail}. user name is ${userName} `
console.log(userDetailsDescription);

// .............. Boolean  ...............

let isActive: boolean = true;
// isActive = 4325;       // Error // It's a boolean

let isAuthenticated = true;
// isAuthenticated = "Hello "   // again Error 
isAuthenticated = false;
console.log(typeof isAuthenticated); // boolean


