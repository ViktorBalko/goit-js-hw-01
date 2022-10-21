//        задача#18B1
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = customerCredits - (pricePerDroid * orderedQuantity);
  if((pricePerDroid * orderedQuantity) > customerCredits) {
  message = "Insufficient funds!";
  } else {
  message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
  }
  // Change code above this line
  return message;
}
