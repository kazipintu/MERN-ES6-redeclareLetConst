// var is for older version of js
// variables, which can be re-declarable, sometimes written with let

{
  let balance = 50;
  console.log(balance);
  balance = 40;
  console.log(balance);
}

{
  const userName = 'Adolf Hitler'
  console.log(userName);
  // userName = 'Modi'   /*  ~ const variables are non-declarable ~  */
}

{
  const numbers = [50, 40, 23, 41, 45];
  console.log(numbers);
  numbers[1] = 555;
  console.log(numbers);
  //numbers = [60, 30, 25, 56, 58, 'jahan', 'null']; 
  /*  ~ const array variables are non-declarable, however inside data/value can be changed ~  */
}

{
  let numbers = [52, 61, 16, 87, 35, 52];
  console.log(numbers);
  numbers = [60, 30, 25, 56, 58, 'jahan', 'null'];
  console.log(numbers);
  /*  ~ let array variables are declarable ~  */

}