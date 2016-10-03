/*Задание 3 (Калькулятор)

Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива когда ввод прекращен..*/
function calcSumm () {
  var calc, arrSumm = 0;
  var arr = [];
  for (var i = 0; ; i++) {
    calc = prompt('Enter number', '');
    if (calc !== '' && typeof +calc === "number" && calc !== null && !isNaN(+calc)) {
      arr.push(+calc);
    }else{
      break;
    }
    for (var item in  arr) {
      arrSumm += arr[item];
    }
  }
  return arrSumm;
}
console.log(calcSumm());