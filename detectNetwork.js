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
  
  	//if cardNumber.slice(0, 2) === 38 || cardNumber.slice(0, 2) === 39
  		//AND
      //if cardNumber.length === 14
      //return a string that states 'Diner's Club'
      //Number('string') ===> //

   if (cardNumber.slice(0, 2) == 38 || cardNumber.slice(0, 2) == 39) {
     if (cardNumber.length === 14) {
       return "Diner's Club";
     }
   }  
     //if cardNumber.slice(0, 2) '34' == 34 || cardNumber.slice(0, 2) === 37
  		//AND
      //if cardNumber.length === 15
      //return a string that states 'American Express'

   if (cardNumber.slice(0, 2) == 34 || cardNumber.slice(0, 2) == 37) {
   	 if (cardNumber.length === 15) {
       return "American Express";
   	 }
   }
   if (cardNumber.slice(0, 1) == 4) {
     if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 ) {
       return "Visa";
     }
   }

   if (cardNumber.slice(0, 2) == 51 || cardNumber.slice(0, 2) == 52 || cardNumber.slice(0, 2) == 53 || cardNumber.slice(0, 2) == 54 || cardNumber.slice(0, 2) == 55) {
     if (cardNumber.length === 16) {
       return "MasterCard";
     }
   }
   if (cardNumber.slice(0, 4) == 6011 || (cardNumber.slice(0, 3) >= 644 && cardNumber.slice(0, 3) <= 649) || cardNumber.slice(0, 2) == 65) {
     if (cardNumber.length === 16 || cardNumber.length === 19) {
       return "Discover";
     }
   }

    //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
    // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


