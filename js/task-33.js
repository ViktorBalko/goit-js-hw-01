//        задача#33B1
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
 result = message.length > maxLength ?
   message.slice(0, maxLength) + "..." : message;
  /// Change code above this line
  return result;
}