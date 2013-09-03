var util = {};

/**
 * @author Robert Heckels
 * @function Creates utility namespace of core functions
 */
(function() {
  console.log('util namespace created');

  /**
    * @function Generates random number from 1 to var size
    */
  this.generateRandomNum = function(min, max, quantity) {
    console.log('util.generateRandomNum');

    var arr = new Array();

    if (quantity === undefined) {
      quantity = 3;
    };
        
    while(arr.length < quantity) {
      var randNo = Math.floor((Math.random()*max)+min);    
      var found = false;
            
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] == randNo) {
          found = true;
          break;
        }
      }
            
      if(!found)arr[arr.length] = randNo;
    }
        
    console.log(arr);
    return arr;
  };
}).apply(util);