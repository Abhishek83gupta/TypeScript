"use strict";
// Syntax :-
// let myvar: string | number = "my value"
// let names: (string | number)[] = []
let userId = "jnurguerwghrerg";
userId = 4564645;
function displayUserId(userId) {
    console.log("user Id is ", userId);
    if (typeof userId === "string") {
        console.log(userId.toUpperCase());
    }
    return userId;
}
displayUserId(userId);
let myArray;
myArray = ["Hello", 56, true, "Good Morning", 456];
let newLen = myArray.length;
console.log(newLen);
let bioData = {
    yourName: "Daksh",
    yourAge: 23,
    currentAddress: "Dombivali",
    qualification: "Degree Completed"
};
let { yourName, yourAge, currentAddress, qualification } = bioData;
console.log(yourName, yourAge, currentAddress, qualification);
// ................. void ....................
// void is used when function does not have return statement 
// void --> no data
// explicit : void
function myFun(a, b) {
    console.log("Sum is ", a + b);
    // return 45      // Error !!!!!
}
// implicit
function myFun2() {
    return 5;
}
// ................. never ....................
// represent value that will never occur,when function never return value 
function error() {
    throw new Error("This is error");
}
// ................. unknown ....................
function myfun4() {
    return "this is value";
}
let value = myfun4(); // type safety enable
let value1 = myfun4(); // type safety disable
// console.log(value.toUpperCase()); // Error !!!
// console.log(value1.toUpperCase());   
let valueInString = value;
console.log(valueInString.toUpperCase());
