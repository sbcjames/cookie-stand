'use strict';

var hoursOpenArray = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// from developer.mozilla.org random page
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var seattleStore = {
  minimumCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,

  cookieSalesEveryHour: function() {
    var result = 0;
    for (var i = 0; i < hoursOpenArray.length; i++){
      var oneHourSale = getRandomIntInclusive(this.minimumCustomers, this.maxCustomers) * this.averageCookies;
      oneHourSale = Math.ceil(oneHourSale);
      result += oneHourSale;
      var parent = document.getElementById('Seattle');
      var listitem = document.createElement('li');
      listitem.textContent = hoursOpenArray[i] + ': ' + oneHourSale;
      parent.appendChild(listitem);
    }
    var parent = document.getElementById('Seattle');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + result;
    parent.appendChild(listItem);
  }
}

seattleStore.cookieSalesEveryHour()


var tokyoStore = {
  minimumCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,

  cookieSalesEveryHour: function() {
    var result = 0;
    for (var i = 0; i < hoursOpenArray.length; i++){
      var oneHourSale = getRandomIntInclusive(this.minimumCustomers, this.maxCustomers) * this.averageCookies;
      oneHourSale = Math.ceil(oneHourSale);
      result += oneHourSale;
      var parent = document.getElementById('Tokyo');
      var listitem = document.createElement('li');
      listitem.textContent = hoursOpenArray[i] + ': ' + oneHourSale;
      parent.appendChild(listitem);
    }
    var parent = document.getElementById('Tokyo');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + result;
    parent.appendChild(listItem);
  }
}

tokyoStore.cookieSalesEveryHour()

var dubaiStore = {
  minimumCustomers: 11,
  maxCustomers: 38,
  averageCookies: 3.7,

  cookieSalesEveryHour: function() {
    var result = 0;
    for (var i = 0; i < hoursOpenArray.length; i++){
      var oneHourSale = getRandomIntInclusive(this.minimumCustomers, this.maxCustomers) * this.averageCookies;
      oneHourSale = Math.ceil(oneHourSale);
      result += oneHourSale;
      var parent = document.getElementById('Dubai');
      var listitem = document.createElement('li');
      listitem.textContent = hoursOpenArray[i] + ': ' + oneHourSale;
      parent.appendChild(listitem);
    }
    var parent = document.getElementById('Dubai');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + result;
    parent.appendChild(listItem);
  }
}

dubaiStore.cookieSalesEveryHour()

var parisStore = {
  minimumCustomers: 20,
  maxCustomers: 38,
  averageCookies: 2.3,

  cookieSalesEveryHour: function() {
    var result = 0;
    for (var i = 0; i < hoursOpenArray.length; i++){
      var oneHourSale = getRandomIntInclusive(this.minimumCustomers, this.maxCustomers) * this.averageCookies;
      oneHourSale = Math.ceil(oneHourSale);
      result += oneHourSale;
      var parent = document.getElementById('Paris');
      var listitem = document.createElement('li');
      listitem.textContent = hoursOpenArray[i] + ': ' + oneHourSale;
      parent.appendChild(listitem);
    }
    var parent = document.getElementById('Paris');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + result;
    parent.appendChild(listItem);
  }
}

parisStore.cookieSalesEveryHour()

var limaStore = {
  minimumCustomers: 2,
  maxCustomers: 16,
  averageCookies: 4.6,

  cookieSalesEveryHour: function() {
    var result = 0;
    for (var i = 0; i < hoursOpenArray.length; i++){
      var oneHourSale = getRandomIntInclusive(this.minimumCustomers, this.maxCustomers) * this.averageCookies;
      oneHourSale = Math.ceil(oneHourSale);
      result += oneHourSale;
      var parent = document.getElementById('Lima');
      var listitem = document.createElement('li');
      listitem.textContent = hoursOpenArray[i] + ': ' + oneHourSale;
      parent.appendChild(listitem);
    }
    var parent = document.getElementById('Lima');
    var listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + result;
    parent.appendChild(listItem);
  }
}

limaStore.cookieSalesEveryHour()
