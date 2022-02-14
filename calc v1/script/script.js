'use strict';
let num1=prompt('Первое число ');
num1=Number(num1);

let num2=prompt('Второе число');
num2=Number(num2);

let operator=prompt('Оператор(/,+,*,-)');

switch (operator) {
case'+':
alert(num1 + num2);
break;
  
case '-':
alert(num1 - num2);
break;

case '*':
alert(num1 * num2);
break;

case '/':
alert(num1 / num2);
break;


}