let x1,x2;
x1 = prompt("Введите первое число",'');
let num1 = parseInt(x1);
x2 = prompt("Введите второе число",'');
let num2 = parseInt(x2);
{
  while (num1!=0 && num2!=0)
     if(num1>num2){
     num1 = num1%num2;
     }
     else  {
     num2= num2%num1;
  }
 document.write("Наибольшим общим делителем чисел" + num1 + " и " + num2 + " является число..." );
}