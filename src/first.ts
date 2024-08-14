// let num = 10;
// num = "Abhi";            // Error  // js can run 
// console.log(num);

// 1 way....(most prefer)
// let myName:string = "Abhishek"
// let surName:string = "Gupta"
// console.table([myName,surName]);

// 2 way....
let age =<number>20;
console.log(age);

let num_a;   // any 
let check;  // any
let car; // any


// let programmingLanguage = "python";
// programmingLanguage.             // give only string method 


// let num = 50;
// num.              // give only number method 


let surName:string | number;
surName = 56;


 
const fun1 = (n:number,m:number)=> {           // auto detect type is number
    return n*m;                            
}
const fun2 = (n:number,m:number):number=> {
  return n*m;
}

// const fun3 = (n:number,m:number):number=> {       
//     return String(n*m);                           // Error
// }


//type 
type userName = string | number
let a:userName = 35;


type userName1 = (n:number, m:number) => number;
const func:userName1 = (n,m)=>{
  return n+m;
}

type userName2 = (n:string, m:string) => string;
const func1:userName1 = (n,m)=>{
  return n+m;
}

//.............................  Array  .............................. //

//1 way....
// const numberArray = [35, 45, 53, 53];                   // number
// const arrNumber1:number [] = [35, 45, 53, 53];
// const arrNumber2:number [] = ["hello", 45, 53, 53];    // error

// const stringArray: string [] = ["Abhishek", "IT", "Hello"]  // string

//2 way.....
const arrayNum:Array<number> = [45, 56, 67];         // number
const arrayString:Array<string> = ["Hello", "Bro"];   // string
const arrayStringNumber:Array<string | number> = ["typescript", "Python", "Javascript"]









