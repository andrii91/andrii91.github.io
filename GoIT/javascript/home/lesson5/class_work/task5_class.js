/*Задачка 5
Создайте функцию find(arr, value), которая ищет в массиве
arr значение value и возвращает его позицию, если найдено,
или -1, если не найдено.*/

function find(arr, value){
  for(var item in arr) {
    if(arr[item] == value){
      return item;
    }
  }
  return ('-1');
}
var arr1 = ["1", 2, 'val', 70];
var value = 'val';

console.log(find(arr1, value));