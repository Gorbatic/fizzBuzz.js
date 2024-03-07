const fizzBuzz = (begin, end) => {
  let i = 0;
  
  while (i + begin <= end) {
    if (begin > end) {
      return;
    }
    
    let nextNum = begin + i;
    if ((nextNum % 3 === 0) && (nextNum % 5 === 0)) {
      console.log('FizzBuzz');
    } else if (nextNum % 3 === 0) {
      console.log('Fizz');
    } else if (nextNum % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(nextNum);
    }
    
    i++;
  }
};
