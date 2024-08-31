// .................... Type Alias ........................
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



// ..................................... Interfaces ...................................
// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
    height : number;
    width : number
}

let rectangle : Rectangle = {
    height : 20 ,
    width : 1
}

interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
  }

  const exampleUser: User = {
    id: 1,
    name: "Abhi",
    email: "Abhi@gmail.com",
    isAdmin: true,
  };
  