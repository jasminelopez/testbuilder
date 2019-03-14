// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
    //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

    //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
    //Heads up! Switch and Visa seem to have some overlapping card numbers
    //in any apparent conflict, you should choose the network with the longer prefix.

  if (cardNumber.slice(0, 4) == 4903 || 
      cardNumber.slice(0, 4) == 4905 || 
      cardNumber.slice(0, 4) == 4911 || 
      cardNumber.slice(0, 4) == 4936 ||
      cardNumber.slice(0, 6) == 564182 ||
      cardNumber.slice(0, 6) == 633110 ||
      cardNumber.slice(0, 4) == 6333 ||
      cardNumber.slice(0, 4) == 6759) {
    if (cardNumber.length === 16 || cardNumber.length === 19 || cardNumber.length === 18) {
      return "Switch";
    }
   }   

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

   if ((cardNumber.slice(0, 3) >= 624 && 
       cardNumber.slice(0, 3) <= 626) ||
       (cardNumber.slice(0, 6) >= 622126 && 
       cardNumber.slice(0, 6) <= 622925) ||
       (cardNumber.slice(0, 4) >= 6282 && 
       cardNumber.slice(0, 4) <= 6288)) {
     if (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
       return "China UnionPay";
     }
   }

   if (cardNumber.slice(0, 2) == 38 || cardNumber.slice(0, 2) == 39) {
     if (cardNumber.length === 14) {
       return "Diner's Club";
     }
   }  
   if (cardNumber.slice(0, 2) == 34 || cardNumber.slice(0, 2) == 37) {
   	 if (cardNumber.length === 15) {
       return "American Express";
   	 }
   }
   if (cardNumber.slice(0, 1) == 4) {
     if (cardNumber.length === 13 ||
         cardNumber.length === 16 || 
         cardNumber.length === 19 ) {
       return "Visa";
     }
   }

   if (cardNumber.slice(0, 2) == 51 ||
       cardNumber.slice(0, 2) == 52 ||
       cardNumber.slice(0, 2) == 53 || 
       cardNumber.slice(0, 2) == 54 || 
       cardNumber.slice(0, 2) == 55) {
     if (cardNumber.length === 16) {
       return "MasterCard";
     }
   }

   //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
   if (cardNumber.slice(0, 4) == 6011 ||
      (cardNumber.slice(0, 3) >= 644 && 
       cardNumber.slice(0, 3) <= 649) ||
       cardNumber.slice(0, 2) == 65) {
     if (cardNumber.length === 16 || cardNumber.length === 19) {
       return "Discover";
     }
   }
    // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  if (cardNumber.slice(0, 4) == 5018 ||
      cardNumber.slice(0, 4) == 5020 || 
      cardNumber.slice(0, 4) == 5038 || 
      cardNumber.slice(0, 4) == 6304) {
    if (cardNumber.length >= 12 && cardNumber.length <= 19) {
      return "Maestro";
    }
  }

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


