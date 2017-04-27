window.onload = function() {
      initializeTimer(); // вызываем функцию инициализации таймера

    }

    function initializeTimer() {
      var currentDate = new Date(); // получаем текущую дату
      console.log(currentDate);
      console.log(currentDate.getDate());

      var endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 21, 50); // получаем дату истечения таймера
      var seconds = (endDate - currentDate) / 1000; // определяем количество секунд до истечения таймера
      if (seconds > 0) { // проверка - истекла ли дата обратного отсчета
        var minutes = seconds / 60; // определяем количество минут до истечения таймера
        var hours = minutes / 60; // определяем количество часов до истечения таймера
        minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
        hours = Math.floor(hours); // целое количество часов до истечения таймера
        seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
        minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе

        var hours2 = '';
        var minutes2 = '';
        var seconds2 = '';

        if (hours < 10) {
          hours2 = '0' + hours;
        } else {
          hours2 = hours;
        }
        if (minutes < 10) {
          minutes2 = '0' + minutes;
        } else {
          minutes2 = minutes;
        }
        if (seconds < 10) {
          seconds2 = '0' + seconds;
        } else {
          seconds2 = seconds;
        }

        setTimePage(hours2, minutes2, seconds2); // выставляем начальные значения таймера

        function secOut() {
          if (seconds == 0) { // если секунду закончились то
            if (minutes == 0) { // если минуты закончились то
              if (hours == 0) { // если часы закончились то
                showMessage(timerId); // выводим сообщение об окончании отсчета
              } else {
                hours--; // уменьшаем кол-во часов
                minutes = 59; // обновляем минуты
                seconds = 59; // обновляем секунды
              }
            } else {
              minutes--; // уменьшаем кол-во минут
              seconds = 59; // обновляем секунды
            }
          } else {
            seconds--; // уменьшаем кол-во секунд
          }

          if (hours < 10) {
            hours2 = '0' + hours;
          } else {
            hours2 = hours;
          }
          if (minutes < 10) {
            minutes2 = '0' + minutes;
          } else {
            minutes2 = minutes;
          }
          if (seconds < 10) {
            seconds2 = '0' + seconds;
          } else {
            seconds2 = seconds;
          }

          setTimePage(hours2, minutes2, seconds2); // обновляем значения таймера на странице
        }
        timerId = setInterval(secOut, 1000); // устанавливаем вызов функции через каждую секунду
      } else {
        //alert("Установленная дата уже прошла");
      }
    }

    function setTimePage(h, m, s) {
      var element = document.getElementById("timer");
      element.innerHTML = h + ":" + m + ":" + s;
      var h2, m2, s2;
      h2 = String(h).split("");
      m2 = String(m).split("");
      s2 = String(s).split("");
      var element2 = document.getElementById("schetchik");
      element2.innerHTML = '<div class="schetchik-block col-lg-4 col-md-4 col-sm-4 col-xs-4"><div class="schet-block col-lg-6 col-md-6 col-sm-6 col-xs-6"> <p>' + h2[0] + '</p> </div> <div class="schet-block col-lg-6 col-md-6 col-sm-6 col-xs-6"> <p>' + h2[1] + '</p> </div> </div> <div class="schetchik-block col-lg-4 col-md-4 col-sm-4 col-xs-4"> <div class="schet-block col-lg-6 col-md-6 col-sm-6 col-xs-6"> <p>' + m2[0] + '</p> </div> <div class="schet-block col-lg-6 col-md-6 col-sm-6 col-xs-6"> <p>' + m2[1] + '</p> </div> </div> <div class="schetchik-block col-lg-4 col-md-4 col-sm-4 col-xs-4"> <div class="schet-block col-lg-6 col-md-6 col-sm-6 col-xs-6"> <p>' + s2[0] + '</p> </div> <div class="schet-block col-lg-6 col-md-6 col-sm-6 col-xs-6"> <p>' + s2[1] + '</p> </div> </div>';

    }

    function showMessage(timerId) { // функция, вызываемая по истечению времени
      //alert("Время истекло!");
      clearInterval(timerId); // останавливаем вызов функции через каждую секунду
    }
    /*Таймер енд*/