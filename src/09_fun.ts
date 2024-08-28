// Type of Function 
// you can define the type of funtion
// Syntax :-
// (parametrs) => return type
// (a:number, b:number) => number

let x: (x:number, y:number) => number = function myAdd(a:number, b:number): number {
    return a+b;
}

let person : {
    firstName : string;
    lastName : string ;
    getFulName : () => string;
}

person = {
    firstName : "Abhishek",
    lastName : "Gupta",
    getFulName:function(){
        return this.firstName +" "+ this.lastName
    }
}

console.log(person.getFulName());



// Optional parameter
//    - Required parameter (must)
//    - Optional parameter (optional)

                                       // here optional
function sumOfThree(a:number, b:number, c?:number): number {
   console.log("Adding three numbers");
   if(c!=undefined){
    return a+b+c;
   }
   return a+b;
};

console.log(sumOfThree(2, 7))



// Rest parameter
function sumAtLeastTwo(a:number, b:number, ...rest : number[]):number {
  let sum = a + b;
 
  rest.forEach((n)=>{
    sum = sum + n;
  })
  console.log("Sum is",sum);
  
  return sum;
}

console.log(sumAtLeastTwo(10, 20, 30, 40))


