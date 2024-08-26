// enum
// Group of named constant values

enum days {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}

enum Months {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

console.log(Months);
console.log(Months.Jan); // 0
console.log(Months.Feb); // 1



function myfunction(value : Months){
    switch(value){
     case Months.Jan :
        console.log("This is first month of year");
        break;

     case Months.Feb :
        console.log("This is second month of year");
           
      default :
         console.log("Not valid month");
    }
}
myfunction(Months.Jan)



enum orderStatus {
    PENDING,
    DELIVERED,
    DISPATCH
}

// console.log(orderStatus);


let order : {
    title : string,
    price : number,
    status: orderStatus,
    date : Date
};

order = {
    title : "Samsung",
    price : 3400.56,
    status : orderStatus.PENDING,
    date : new Date(),
};

console.log(order)
order.status = orderStatus.DISPATCH
console.log(order);
