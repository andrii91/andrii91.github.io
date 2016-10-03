/*Задачка 6
Создайте фунцию filterRange(arr, a, b), которая принимает
массив чисел arr и возвращает новый массив, который
содержит только числа из arr из диапазона от a до b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция не должна менять arr.*/

function filterRange(arr, a, b) {
  var clone =[];
  for(var key in arr) {
    if(a<=arr[key] && arr[key]<=b) {
        clone.push(arr[key]);
    }
  }
  return clone;
}
var arr1 = [1,8,12,2,3,99];

console.log(filterRange(arr1, 1, 8));