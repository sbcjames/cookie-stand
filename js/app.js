'use strict';

var hoursOpenArray = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
var allStoreCities = [];

function StoreCities(location, minimumCustomers, maxCustomers, averageCookies) {
  this.cityLocation = location;
  this.mincust = minimumCustomers;
  this.maxcust = maxCustomers;
  this.aveCookies = averageCookies;
  this.salesCookieEachHour = [];
  this.totalSales = 0;
  allStoreCities.push(this);
}

StoreCities.prototype.generateCookieSales = function() {
  var result = 0;
  for(var i=0; i < hoursOpenArray.length; i++) {
    var createHourlySales = getRandomIntInclusive(this.mincust, this.maxcust) * this.aveCookies;
    createHourlySales = Math.ceil(createHourlySales);
    result += createHourlySales;
    this.salesCookieEachHour.push(createHourlySales);
  }
  this.totalSales = result;
};

StoreCities.prototype.renderTableList = function() {
  var parentElement = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var storeNames = document.createElement('th');
  storeNames.textContent = this.cityLocation;
  tableRow.appendChild(storeNames);
  parentElement.appendChild(tableRow);

  for(var i = 0; i < hoursOpenArray.length; i++) {
    var tableInput = document.createElement('td');
    tableInput.textContent = this.salesCookieEachHour[i];
    tableRow.appendChild(tableInput);
  }
  parentElement.appendChild(tableInput);
};

var seattle = new StoreCities('Seattle', 23, 65, 6.3);
seattle.generateCookieSales();
seattle.renderTableList();

var tokyo = new StoreCities('Tokyo', 3, 24, 1.2);
tokyo.generateCookieSales();
tokyo.renderTableList();

var dubai = new StoreCities('Dubai', 11, 38, 3.7);
dubai.generateCookieSales();
dubai.renderTableList();

var paris = new StoreCities('Paris', 20, 38, 2.3);
paris.generateCookieSales();
paris.renderTableList();

var lima = new StoreCities('Lima', 2, 16, 4.6);
lima.generateCookieSales();
lima.renderTableList();

// from developer.mozilla.org random page
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
