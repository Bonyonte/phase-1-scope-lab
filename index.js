// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = 'Fix the Scope'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
     bestCustomer = 'not bob';
}
console.log(bestCustomer());
function overwriteBestCustomer(){
       bestCustomer = 'maybe bob';
}
console.log(bestCustomer());


function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Fix the Scope';
}
console.log(changeLeastFavoriteCustomer());