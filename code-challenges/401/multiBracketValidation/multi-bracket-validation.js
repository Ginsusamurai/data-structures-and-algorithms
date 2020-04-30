'use strict';



function multiBracketValidation(input){

  if(!input || input.length <= 1){
    return false;
  }

  let arr = input.split("");

  let openBrackets = ['{','(','['];
  let closeBrackets = ['}',')',']'];

  let cleanArr = [];

  for(let i = 0; i < arr.length; i++){
    if(openBrackets.includes(arr[i])){
      cleanArr.push(arr[i]);
    }else if(closeBrackets.includes(arr[i])){
      let popper = cleanArr.pop(); // {
      
      

      if(openBrackets.indexOf(popper)
      !== closeBrackets.indexOf(arr[i])){
        return false;
      }

    }
  }
  if(cleanArr.length !== 0){
    return false;
  }
  return true;

}

module.exports = multiBracketValidation;

// console.log(multiBracketValidation('{}'));
// console.log(multiBracketValidation('{}(){}'));
// console.log(multiBracketValidation('()[[Extra Characters]]'));
// console.log(multiBracketValidation('(){}[[]]'));
// console.log(multiBracketValidation('{}{Code}[Fellows](())'));
// console.log(multiBracketValidation('[({}]'));
// console.log(multiBracketValidation('(]('));
// console.log(multiBracketValidation('{(})'));

// console.log(multiBracketValidation('{'));
// console.log(multiBracketValidation(')'));
// console.log(multiBracketValidation('[}'));





