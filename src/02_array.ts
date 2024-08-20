// Syntax 
//  let arrayName : type[] :

// Example
let numberArray : number[] = [23,45,66,54,33];
console.log(numberArray);
console.log(numberArray[0]);
numberArray[1] = 100;
console.log(numberArray[1]);


let friends : string[];
friends = ["Sahil", "Daksh", "Sujal", "Banti"];
console.log(friends)

// Array methods
// length
for(let i=0;i<friends.length;i++){
    console.log(friends[i]);
}

// push
let newLength = friends.push("Akash");
console.log("Array number length: "+ newLength);
console.log(friends);

console.log(typeof numberArray);      // object
console.log(typeof numberArray[0]);   // number
console.log(typeof friends[0])        // string

// jion
console.log(friends.join("----"))

// foreach
friends.forEach((value)=>{
  console.log(value.toUpperCase())
})

// map
let newFriends = friends.map((value)=>{
  console.log(value)
  return value.toUpperCase()
})
console.log(newFriends)


// ............... Union Type ...................

let mixedArray :(string | number)[];
mixedArray = ["One" , 45.78, "Two", 99];

mixedArray.forEach((value)=>{
  if(typeof value == "string"){
    console.log(value.toUpperCase());
  }else{
    console.log(value.toFixed());
  }
})
