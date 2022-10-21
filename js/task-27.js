//        задача#27B1
//       IF       TO        SWITCH  
if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
function getSubscriptionPrice(type) {
  let price;

/////////////////////////////////////////////////

 switch (type) { 
    case "starter": 
      price = 0; 
      break;

    case "professional": 
      price = 20; 
      break;

    case "organization": 
      price = 50; 
      break;
  }
  return price;
}
///////////////////////////////////////////////////