// Tuple
// Number of elements are fixed
// types of elements are known and same

let skill:[string, number] = ["programming", 34];
console.log(skill);
console.log(skill[0]);


// (rgba)                          
let color : [number, number, number, number] = [255, 255, 0, 0.4];
console.log("Current color is ",color);

// optional Tuple:                  // optional
let colors : [number, number, number, number?] = [255, 255, 0];
