const sum = (a, b) => a + b;
  
  const subtract =  (a, b) => a - b;
  
  const multiply =  (a, b) => a * b;
  
  const divide =  (a, b) => a / b;
  
  const log =  (value) => console.log(value);
  
 
const operation = (a,b) => log(divide(subtract((sum(a,b) * sum(a, (b + 1))), a) , sum(a, (b - 1))));

operation(2,4);