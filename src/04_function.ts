// Funtion
// Syntax :-
// function nameOfFunction(a:type, b:type):returntype
                                               
                        // return type // void -> no data
function birthdayWish(name : string ,age : number): void {
  console.log(` Happy Birthday ${name} you have completed your ${age} years `)
}


birthdayWish("Abhishek", 21);



function add(num1:number , num2:number):number{
  return num1+num2;
}

let result = add(65,56)
console.log(result);
