// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  console.log(customerName.toUpperCase());
}
//
function setBestCustomer() {

    globalThis.bestCustomer = 'not bob'; 
    console.log(bestCustomer); 
  }
  //
  function overwriteBestCustomer() {

    globalThis.bestCustomer = 'maybe bob';
    console.log(bestCustomer); 
  }
  //
  const leastFavoriteCustomer = 'kip';

function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'orah';
  console.log(leastFavoriteCustomer); 
}
upperCaseCustomerName();
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();


