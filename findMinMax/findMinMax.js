module.exports = {
      findMinMax: (a) => {
      let arr = a;
      let result =[] //Created an empty array to hold the answer
      Array.prototype.max = function() { //Used prototype constructor to add Math.Max method to the Array() object.
        maxValue = Math.max.apply(null, this);
        return maxValue;
      };

      Array.prototype.min = function() { //Used prototype constructor to add Math.Max method to the Array() object.
        minValue = Math.min.apply(null, this);
        return minValue;
      };
      
       // Called my method inside Array Push.
      if (arr.min() === arr.max() ){
        result.push(arr.min());
      }else{
        result.push(arr.min(),arr.max());
      }
      return result
    }
};