/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!'); 
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901232') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed'); 
    }
 };

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
 for (var prefix = 644; prefix <= 649; prefix++) { 
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(String(prefix) + '1234567890123').should.equal('Discover');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(String(prefix) + '1234567890123456').should.equal('Discover'); 
      }); 
    })(prefix)
  };

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011938476278904').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011234567123456789').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6581234567123456789').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6581234567123456').should.equal('Discover');
  });
  
});


describe('Maestro', function() {
  

  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501857890391').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018578903912').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50185789039123').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501857890391234').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018578903912345').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50185789039123456').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501857890391234567').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018578903912345678').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502057890391').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020578903912').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50205789039123').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502057890391234').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020578903912345').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50205789039123456').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502057890391234567').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020578903912345678').should.equal('Maestro');
  });

    it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503857890391').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038578903912').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50385789039123').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503857890391234').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038578903912345').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50385789039123456').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503857890391234567').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038578903912345678').should.equal('Maestro');
  });

    it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630457890391').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304578903912') .should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63045789039123').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630457890391234').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304578903912345').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63045789039123456').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630457890391234567').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304578903912345678').should.equal('Maestro');
  });

});

describe('should support Switch', function () {

   var arr = [4903, 4905, 4911, 4936, 6333, 6759];
   for (var i = 0; i < arr.length; i++) {  
    var prefix = arr[i];
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(String(prefix) + '123456789012').should.equal('Switch');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(String(prefix) + '12345678901234').should.equal('Switch'); 
      }); 

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(String(prefix) + '123456789012345').should.equal('Switch'); 
      }); 
    })(prefix)
  };

   var arr1 = [564182, 633110];
   for (var i = 0; i < arr1.length; i++) {  
    var prefix = arr1[i];
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(String(prefix) + '1234567890').should.equal('Switch');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(String(prefix) + '123456789012').should.equal('Switch'); 
      }); 

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(String(prefix) + '1234567890123').should.equal('Switch'); 
      }); 
    })(prefix)
  };
});

describe('should support China UnionPay', function() {
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

  for (var pre = 622126; pre <= 622925; pre++) { 
    (function(pre) {
      it('has a prefix of ' + pre + ' and a length of 16', function() {
        detectNetwork(String(pre) + '1234567890').should.equal('China UnionPay');
      });

      it('has a prefix of ' + pre + ' and a length of 17', function() {
        detectNetwork(String(pre) + '12345678901').should.equal('China UnionPay'); 
      }); 

      it('has a prefix of ' + pre + ' and a length of 18', function() {
        detectNetwork(String(pre) + '123456789012').should.equal('China UnionPay'); 
      });  

      it('has a prefix of ' + pre + ' and a length of 19', function() {
        detectNetwork(String(pre) + '1234567890123').should.equal('China UnionPay'); 
      }); 
    })(pre)
  };


  for (var pre = 624; pre <= 626; pre++) { 
    (function(pre) {
      it('has a prefix of ' + pre + ' and a length of 16', function() {
        detectNetwork(String(pre) + '1234567890123').should.equal('China UnionPay');
      });

      it('has a prefix of ' + pre + ' and a length of 17', function() {
        detectNetwork(String(pre) + '12345678901234').should.equal('China UnionPay'); 
      }); 

      it('has a prefix of ' + pre + ' and a length of 18', function() {
        detectNetwork(String(pre) + '123456789012345').should.equal('China UnionPay'); 
      });  

      it('has a prefix of ' + pre + ' and a length of 19', function() {
        detectNetwork(String(pre) + '1234567890123456').should.equal('China UnionPay'); 
      }); 
    })(pre)
  };

  for (var pre = 6282; pre <= 6288; pre++) { 
    (function(pre) {
      it('has a prefix of ' + pre + ' and a length of 16', function() {
        detectNetwork(String(pre) + '123456789012').should.equal('China UnionPay');
      });

      it('has a prefix of ' + pre + ' and a length of 17', function() {
        detectNetwork(String(pre) + '1234567890123').should.equal('China UnionPay'); 
      }); 

      it('has a prefix of ' + pre + ' and a length of 18', function() {
        detectNetwork(String(pre) + '12345678901234').should.equal('China UnionPay'); 
      });  

      it('has a prefix of ' + pre + ' and a length of 19', function() {
        detectNetwork(String(pre) + '123456789012345').should.equal('China UnionPay'); 
      }); 
    })(pre)
  };

});


