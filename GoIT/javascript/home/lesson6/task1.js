/*Задание 1 (Удаление css клссов)

У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

var obj = {
	className: 'open menu'
};
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
	className: 'my menu menu'
};

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'
Лишних пробелов после функции образовываться не должно.*/

var obj = {
	className: 'open menu menu open'
};
 function removeClass(obj, cls) {
	var arr = obj.className.split(' ');
   var clone = [];
	for (var i = 0; i < arr.length; i++) {
	 if (arr[i] === cls) {
       arr.splice(arr[i], 1);
	 }else{
       clone.push(arr[i]);
     }
	}

	obj.className = clone.join(' ');
  
  return obj;

}
console.log(obj);
console.log(removeClass(obj, 'open'));
