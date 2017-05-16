let aritGeo = (a) => {
  let result; //Declare a variable to hold the answer for each logic
  function checkAP(a){  //Checks if the input is Arithmetic progression and returns true.
      let commonDifference =a[1] - a[0];
      for(let i = 0;i<a.length-1;i++){
            if( (a[i+1] - a[i]) != commonDifference){
              return false;
            }
      }
      return true;
  }
  function checkGP(a){ //Checks if the input is Geometric progression and returns true.
       let commonRatio = a[1] / a[0];
       for(let i = 0 ; i<a.length-1;i++){
          if ( a[i+1] / a[i] != commonRatio){
            return false;
          }
       }
       return true;
  }
  
  if (typeof a[0] === 'undefined'){ // If position 0 in the array is undefined it means that the array ois empty so sets tesult to 0
      result = 0;
    }
  else if (checkAP(a)===true){ // Sets result to "Arithmetic" if checkAP() function is True
          result = "Arithmetic";
  }else if(checkGP(a)===true){ // Sets result to "Geometric" if checkGP() function is True
          result = "Geometric";
  }else if (!((checkAP(a)===true) && (checkGP(a)===true))){ // Sets result to -1 if checkGP() and check AP is not True.
      result = -1;
  }
  
 return result;     // Returns result.    
};