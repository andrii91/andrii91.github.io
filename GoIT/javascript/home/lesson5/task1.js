/*Задание 1 (Кто первым решил больше всех задач)
Напиште код который выведет сотрудника который выполнил больше всех задач.*/

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
function moreAllTasks (obj) {
  var max = 0;
  var name = '';
  for(var item in obj) {
    if (obj[item]>max){
      max = obj[item];
      name = item;
    }
  }
return name;
}
console.log(moreAllTasks(tasksCompleted));