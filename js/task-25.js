//        задача#25B1
function checkStorage(available, ordered) {
  let message;
// рефакторинг if
   if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
   }
  
  // з використанням тернарного оператора
  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}
