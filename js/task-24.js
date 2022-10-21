//        задача#24B1
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if(totalSpent >= 5000 && totalSpent <20000) {
 discount = 0.02;
} else if(totalSpent >= 20000 && totalSpent < 50000){
discount = 0.05;
} else if(totalSpent >= 50000){
discount = 0.1;
} else {
discount = 0;
}
  // Change code above this line
  return discount;
}
//?????????????????????????????????
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// switch(totalSpent) {
//   case BASE_DISCOUNT:
//     discount = 0;
//     break;
//   case BRONZE_DISCOUNT:
//         discount = totalSpent * 0.02;
//     break;
//   case SILVER_DISCOUNT:
//      discount = totalSpent * 0.05;
//     break;
//   case GOLD_DISCOUNT:
//          discount = totalSpent * 0.1;
//     break;
// }
//   // Change code above this line
//   return discount;
// }