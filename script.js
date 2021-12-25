const num =parseInt(prompt("write positive number"))
 function fibonacciGen (num) {
 
    let result = [0,1];
    if (num === 1){
        result = [0];

    } else {
          for (let i = 2; i < num; i++) {
              result.push(result[result.length - 2] + result[result.length - 1]);
              }
  
  
    }
      return result
  }
  //num=2      
  console.log(fibonacciGen(num)); 
  
  
  function fibonacciFinder (num) {
      const goldenRatio = 1.618034;
      //Math.pow :kuvvetini alır. math.sgrt karekokunu alır(console.log(Math.sqrt(5)) //5.232222)
      return  Math.round((Math.pow(goldenRatio, (num-1))-Math.pow((1-goldenRatio), (num-1)))/Math.sqrt(5));
  }
  
  console.log(fibonacciFinder(num)); 

 



   







