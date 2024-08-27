// Type Alias
// Create Temp name of type 
// Temporary name
// Abhishek --> (Abhi)


type xyz = string;
let homeAddress : xyz = "Thane";
console.log(typeof homeAddress);  // String

// Using Union
type numStr = string | number;
let pass : numStr ;
pass = 3445543;
pass = "abc2323";
console.log(typeof pass);


type Order = {
 title : string;
 price : number;
 status : string;
}

let order1 : Order;
order1 = {
    title :"This is title of order",
    price : 234455,
    status : "This is Status"
};

// String literals
let myName:"Abhishek  "