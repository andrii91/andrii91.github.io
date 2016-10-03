/*Задание 2 (Изменение численных свойств)

Напишите функцию multiplyNumeric которая принимает на вход 
объект и возвращает объект в котором все числовые значения у свойств умножены на 2.*/
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
  for(var item in obj) {
    if(typeof obj[item]=="number"){
      obj[item] *=2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(image));