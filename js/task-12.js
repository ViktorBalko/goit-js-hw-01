//        задача#12B1
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  let message;
  let totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
  return message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// Change code above this line
  return message;
}