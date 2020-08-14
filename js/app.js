'use strict';

var hoursOpenArray = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];
var allStoreCities = [];
var parentElement = document.getElementById('table');

function generateHeader() {
  var tableRow = document.createElement('tr');
  var timeRow = document.createElement('td');
  tableRow.appendChild(timeRow);
  for (var i = 0; i < hoursOpenArray.length; i++) {
    var timeHeader = document.createElement('th');
    timeHeader.textContent = hoursOpenArray[i];
    tableRow.appendChild(timeHeader);
  }
  var time = document.createElement('th');
  time.textContent = 'location total';
  tableRow.appendChild(time);
  parentElement.appendChild(tableRow);
}

function StoreCities(location, minCustomers, maxCustomers, averageCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.salesCookieEachHour = [];
  this.result = 0;
  allStoreCities.push(this);
}

StoreCities.prototype.generateCookieSales = function() {
  this.result = 0;
  for(var i=0; i < hoursOpenArray.length; i++) {
    var createHourlySales = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.averageCookies;
    createHourlySales = Math.ceil(createHourlySales);
    this.result += createHourlySales;
    this.salesCookieEachHour.push(createHourlySales);
  }
  this.totalSales = this.result;
};
generateHeader();

StoreCities.prototype.renderTableList = function() {
  var parentElement = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var storeNames = document.createElement('th');
  storeNames.textContent = this.location;
  tableRow.appendChild(storeNames);
  parentElement.appendChild(tableRow);

  for(var i = 0; i < hoursOpenArray.length; i++) {
    var tableInput = document.createElement('td');
    tableInput.textContent = this.salesCookieEachHour[i];
    tableRow.appendChild(tableInput);
  }

  var totalDaySales = document.createElement('td');
  totalDaySales.textContent = this.result;
  tableRow.appendChild(totalDaySales);

  parentElement.appendChild(tableRow);
};

// function renderFooter() {
//   var footerRow = document.createElement('tr');

// }

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

var form = document.getElementById('form');
form.addEventListener('submit', newStoreForm);
function newStoreForm(event) {
  event.preventDefault();

  var location = event.target.location.value;
  var minCustomers = event.target.minCustomers.value;
  var maxCustomers = event.target.maxCustomers.value;
  var averageCookies = event.target.averageCookies.value;
  new StoreCities(location, +minCustomers, +maxCustomers, +averageCookies);
  location.generateCookieSales();
  location.renderTableList();
}




// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   var location = event.target.location.value;
//   var minCustomers = event.target.minCustomers.value;
//   var maxCustomers = event.target.maxCustomers.value;
//   var averageCookies = event.target.averageCookies.value;
//   var location = new StoreCities(location, minCustomers, maxCustomers, averageCookies);
//   location.salesCookieEachHour();
//   location.renderTableList();
// });

