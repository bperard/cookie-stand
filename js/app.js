'use strict';

const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const hourlyDataArray = [];
for (let i = 0; i < hoursArray.length; i++) {
  const newHour = {
    time: hoursArray[i],
    totalCookies: 0,
    trafficAdjust: null
  };
  hourlyDataArray.push(newHour);
}


function ShopLocation(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCookieTotals = [];
  this.totalDailyCookies = 0;
}

ShopLocation.prototype.generateHourlyCookies = function() {
  const hourlyCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  return Math.ceil(hourlyCustomers * this.avgCookiesPerCustomer);
};

ShopLocation.prototype.generateDailyCookies = function() {
  let totalCookies = 0;
  for (let i = 0; i < hoursArray.length; i++) {
    const hourlyCookies = this.generateHourlyCookies();
    this.hourlyCookieTotals.push(hourlyCookies);
    hourlyDataArray[i].totalCookies += hourlyCookies;
    totalCookies += hourlyCookies;
  }
  this.totalDailyCookies = totalCookies;
};

const locationDataArray = [
  {
    name: 'Seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiesPerCustomer: 6.3,
  },
  {
    name: 'Tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
  },
  {
    name: 'Dubai',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
  },
  {
    name: 'Paris',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
  },
  {
    name: 'Lima',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
  },
];

function renderDailySales(location) {
  const parentElement = document.querySelector('#location-sales');
  const headerElement = document.createElement('h3');
  headerElement.innerText = location.locationName;
  parentElement.appendChild(headerElement);
  const listElement = document.createElement('ul');
  for (let i = 0; i < hoursArray.length; i++) {
    const listItemElement = document.createElement('li');
    listItemElement.innerText = `${hoursArray[i]}: ${location.dailyCookies[i]}`;
    listElement.appendChild(listItemElement);
  }
  const finalListItemElement = document.createElement('li');
  finalListItemElement.innerText = `Total = ${location.dailyCookies[hoursArray.length]}`;
  listElement.appendChild(finalListItemElement);
  parentElement.appendChild(listElement);
}

// function renderTableHead(){

// }

for (let i = 0; i < locationDataArray.length; i++) {
  const location = locationDataArray[i];
  const currentShop = new ShopLocation(location.name, location.minHourlyCustomers, location.maxHourlyCustomers, location.avgCookiesPerCustomer);
  currentShop.generateDailyCookies();
  console.log(currentShop.name, currentShop.hourlyCookieTotals, currentShop.totalDailyCookies);

  // renderDailySales(location);
  // console.log(location.location, location.dailyCookies, `Total = ${location.dailyCookies[hoursArray.length]}`);
}
console.log(hourlyDataArray);

