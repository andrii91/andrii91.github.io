//если побьект пустой true
function isEmpty(obj){
  var count = 0; 
  for(var key in obj){
    count++;
  }
  if(count>0){
    console.log(true);
  }else{
    console.log(false);
  }
}function isEmpty1(obj){
  for(var key in obj){
    return false;
  }
  return true;
}


var zpa = {
  nsa: 1000,
  sdf: 2000,
  sdfs: 3000,
  safdsd: 4000
};

function summZP(obj){
 var zp = 0;
  for(var key in obj){
      zp += obj[key];
  }
  return zp;
}

console.log(summZP(zpa));

var arr1 = [1,2,3,4,5,'6'];


/*Задачка 1
Написать функцию которая принимает на вход
массив и возвращает последний элемент массива.*/
function popped(arr){
 var pop1 = arr.pop();
  return pop1;
}
console.log(popped(arr1));

/*Задачка 2
Написать функцию которая принимает на вход
 2 параметра: массив, и элемент (любого типа).
Этот элемент нужно добавить в конец массива.
Функция должна вернуть массив с добавленным
новым элементом.*/
function arrPush(arr, value){
  var arr2 = [];
  for(var key in arr){
    arr2[key] = arr[key];
  }
  arr2.push(value);
  
  return arr2;
}

console.log(arrPush(arr1, "9"));
console.log(arr1);


/*
Задачка 3
*/
//1. Создайте массив fruits с элементами «apple», «orange».
var fruits = ['apple', 'orange'];
//2. Добавьте в конец значение «kiwi»
fruits.push('kiwi');
/*3. Замените предпоследнее значение с конца на «pear». Код
замены предпоследнего значения должен работать для
массивов любой длины.*/
fruits[fruits.length - 2] = '«pear»';
//4. Удалите первое значение массива и выведите его console.
var delFirstValue = fruits.shift();
console.log(delFirstValue);
//5. Добавьте в начало значения «apricot» и «peach».
fruits.unshift('apricot', 'peach');

/*Задачка 4
Написать функцию которая принимает на вход массив и
возвращает случайное значение из этого массива.*/

function randomArrayValue(arr){
  var rand = Math.floor(Math.random() * Math.abs(arr.length-1));
  return arr[rand];
}
var arr2 = ['sd','функцию','принимает',4,5,'6'];
console.log(randomArrayValue(arr2));