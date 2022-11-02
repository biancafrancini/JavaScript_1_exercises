function multiplyByTwo(value) {
  let number = 2;
  return function inner(){
    return number * value;
  };
};

console.log(multiplyByTwo(4)());
