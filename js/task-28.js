//        задача#28B1
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;


  //  if (password === null) {
  //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }

  // Change code below this line
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
}

  // Change code above this line
  return message;
}