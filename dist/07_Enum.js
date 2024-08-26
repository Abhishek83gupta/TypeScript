"use strict";
// enum
// Group of named constant values
var days;
(function (days) {
    days[days["MON"] = 0] = "MON";
    days[days["TUE"] = 1] = "TUE";
    days[days["WED"] = 2] = "WED";
    days[days["THU"] = 3] = "THU";
    days[days["FRI"] = 4] = "FRI";
    days[days["SAT"] = 5] = "SAT";
    days[days["SUN"] = 6] = "SUN";
})(days || (days = {}));
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["Mar"] = 2] = "Mar";
    Months[Months["Apr"] = 3] = "Apr";
    Months[Months["May"] = 4] = "May";
    Months[Months["Jun"] = 5] = "Jun";
    Months[Months["Jul"] = 6] = "Jul";
    Months[Months["Aug"] = 7] = "Aug";
    Months[Months["Sep"] = 8] = "Sep";
    Months[Months["Oct"] = 9] = "Oct";
    Months[Months["Nov"] = 10] = "Nov";
    Months[Months["Dec"] = 11] = "Dec";
})(Months || (Months = {}));
console.log(Months);
console.log(Months.Jan); // 0
console.log(Months.Feb); // 1
function myfunction(value) {
    switch (value) {
        case Months.Jan:
            console.log("This is first month of year");
            break;
        case Months.Feb:
            console.log("This is second month of year");
        default:
            console.log("Not valid month");
    }
}
myfunction(Months.Jan);
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["PENDING"] = 0] = "PENDING";
    orderStatus[orderStatus["DELIVERED"] = 1] = "DELIVERED";
    orderStatus[orderStatus["DISPATCH"] = 2] = "DISPATCH";
})(orderStatus || (orderStatus = {}));
// console.log(orderStatus);
let order;
order = {
    title: "Samsung",
    price: 3400.56,
    status: orderStatus.PENDING,
    date: new Date(),
};
console.log(order);
order.status = orderStatus.DISPATCH;
console.log(order);
