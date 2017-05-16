let aritGeo = (a) => {
  let result;
  function checkAP(a){
      let commonDifference =a[1] - a[0];
      for(let i = 0;i<a.length-1;i++){
            if( (a[i+1] - a[i]) != commonDifference){
              return false;
            }
      }
      return true;
  }
  function checkGP(a){
       let commonRatio = a[1] / a[0];
       for(let i = 0 ; i<a.length-1;i++){
          if ( a[i+1] / a[i] != commonRatio){
            return false;
          }
       }
       return true;
  }
  if (checkAP(a)===true){
          result = "Arithmetic";
  }else if(checkGP(a)===true){
          result = "Geometric";
  }
  else if (!(checkAP==true) && !(checkGP==true){
      result = -1
  }
 return result;         
};