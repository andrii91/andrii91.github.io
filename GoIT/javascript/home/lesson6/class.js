/*Задачка 1
В объекте есть свойство className, которое содержит
список «классов» – слов, разделенных пробелом.
Создайте функцию addClass(obj, cls), которая добавляет в
список класс cls, но только если его там еще нет.
Ваша функция не должна добавлять лишних пробелов.*/

var obj = {
 className: 'open menu'
};

function addClass(obj, cls) {
  var arr = obj.className.split(' ');
  for (var i = 0; i < arr.length; i++) {
       if (arr[i] == cls) return;
  }
 arr.push(cls);
 return obj.className = arr.join(' ');
}


/*function addClass(obj, cls) {
  var arr = obj.className.split(' ');
  if(arr.indexOf(cls) == -1){
  	arr.push(cls);
  }
  return obj.className = arr.join(' ');
}*/

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений
addClass(obj, 'me'); // obj.className='open menu new me'
console.log( obj.className ); // "open menu new me"

/*Задачка 2
Напишите функцию toCamelCase(str), которая преобразует
строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают
заглавную букву.
Например:
toCamelCase('background-color'); // 'backgroundColor';
toCamelCase('list-style-image'); // 'listStyleImage';
toCamelCase('-webkit-transition'); // 'WebkitTransition';*/

function toCamelCase(str) {
 var arr = str.split('-');
 for (var i = 1; i < arr.length; i++) {
 // преобразовать: первый символ с большой буквы
 arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
 }
 return arr.join('');
}
