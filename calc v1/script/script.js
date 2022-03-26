'use strict';
let num1=prompt('Первое число ');
num1=Number(num1);
let operator=prompt('Оператор(/,+,*,-)');

let num2=prompt('Второе число');
num2=Number(num2);
let result=0;

switch (operator) {
case'+':
result=num1 + num2;
break;
  
case '-':
result=num1 - num2;
break;

case '*':
result=num1 * num2;
break;

case '/':
result=num1 / num2;
break;


}
alert(num1 + operator + num2 +'=' + result ) 