
var arrConcerts = [];
arrConcerts[0] = {
  Artist: "Гурт 'Рок-зірки'",
  Venue: "Палац спорту",
  Date: "25.11.2023"
};

arrConcerts[1] = {
  Artist: "Соліст 'Мелодія'",
  Venue: "",
  Date: "2.11.2023"
};

arrConcerts[2] = {
  Artist: "Оркестр 'Гармонія'",
  Venue: "Міський парк",
  Date: "20.11.2023"
};


arrConcerts[3] = {
  Artist: "Дует 'Симфонія'",
  Venue: "Оперний театр",
  Date: "7.11.2023"
};

arrConcerts[4] = {
  Artist: "Співак 'Арія'",
  Venue: "Концерт-хол 'Кристал'",
  Date: "15.11.2023"
};


var html = "";

function ras_days_to_event(dateString) {
  var currentDate = new Date();
  currentDate.setHours(0,0,0,0); 
  var eventDate = new Date(dateString.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
  
  console.log("Current Date:", currentDate);
  console.log("Event Date:", eventDate);
  
  var timeDiff = eventDate - currentDate; 
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  
  return daysDiff;
}



function display_concert_info(concert, index) {
  var daysToEvent = ras_days_to_event(concert.Date);
  var message = daysToEvent === 5 ? "Сьогодні останній термін придбання квитка" : 
                 daysToEvent === 0 ? "Сьогодні концерт" : 
                 daysToEvent < 0 ? "Концерт уже відбувся" : 
                 daysToEvent + " днів до концерту";

  var unknownVenue = !concert.Venue ? "Невідома адреса проведення концерту" : concert.Venue;

  html += "<tr>";
  html += `<td>${concert.Artist}</td><td>${unknownVenue}</td><td>${concert.Date}</td><td>${message}</td>`;
  html += "</tr>";
}


function display_all_concerts() {
  html = "<table style='table'>";
  html += "<tr><th>Концертна група чи виконавець</th><th>Місце проведення</th><th>Дата проведення</th><th>Інформація</th></tr>";
  arrConcerts.forEach(display_concert_info);
  html += "</table>";
  document.getElementById('result1').innerHTML = html;
}

























































































// //Заповнимо масив даними
// var arrMails = [];
// arrMails[0] = {
//   Resp: "Іван",
//   Data: "25.10.2023",
//   Mail: "Ivan@gmail.com"
// };

// arrMails[1] = {
//   Resp: "Петро",
//   Data: "22.11.2023",
//   Mail: "Petro@gmail.com"
// };

// arrMails[2] = {
//   Resp: "Ольга",
//   Data: "23.10.2023",
//   Mail: "Olga@gmail.com"
// };

// arrMails[3] = {
//   Resp: "Іван Іванович",
//   Data: "19.10.2023",
//   Mail: "IvanI@gmail.com"
// };

// arrMails[4] = {
//   Resp: "Вікторія",
//   Data: "22.10.2023",
//   Mail: "Vika@gmail.com"
// };

// var html = "";

// //функція розрахунку терміну
// function ras_diff_Days(text) {
//   //отримуємо поточну дату
//   var currentDate = new Date();
//   // перетворюємо рядок text у дату у Європейському форматі
// var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
// // отримуємо різницю між датами в мілісекундах
// var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
// // переводимо результат в дні
// var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
// // віднімаємо один день, оскільки повний день ще не завершився
// return daysDiff;
// }

// // функція виведення окремого запису масиву
// function vivod(item, i, array) {
//   var text = item['Data'];
//   var diffDays = ras_diff_Days(text);
//   if (diffDays < 5 && diffDays > 0) {
//     html += "<tr>";
//   } else if (diffDays == 0) {
//     html += "<tr style='background:yellow;'>";
//   } else {
//     if (diffDays > 5) {
//       html += "<tr style='background:red;'>";
//       diffDays = "Термін закінчено";
//     }
//   }
  
//   // цикл виводимо окремий запис у таблицю
//   for (var key in item) {
//     html += "<td>" + item[key] + "</td>";
//   }

//   html += "<td>" + diffDays + "</td>";
//   html += "</tr>";
// }

// // функція розрахунку для всього масиву
// function ras() {
//     html = "<table style='table'>";
//     html += "<tr><td>Ім'я</td><td>Дата народження</td><td>Пошта</td><td>Термін відповіді</td></tr>";
//     arrMails.forEach(vivod);
//     html += "</table>";
//     document.getElementById('rezult').innerHTML = html;
//   }
  

