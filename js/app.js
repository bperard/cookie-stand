'use strict';

// PROVIDED DATA

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

// CONSTRUCTOR

function ShopLocation(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCookieTotals = [];
  this.totalDailyCookies = 0;
}

// CONSTRUCTOR METHODS

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

ShopLocation.prototype.renderShopData = function() {
  const parentEl = document.querySelector('tbody');
  const rowEl = document.createElement('tr');

  const locationNameEl = document.createElement('th');
  locationNameEl.innerText = this.name;
  rowEl.appendChild(locationNameEl);

  for (let i = 0; i < this.hourlyCookieTotals.length; i++) {
    const newHourEl = document.createElement('td');
    newHourEl.innerText = this.hourlyCookieTotals[i];
    rowEl.appendChild(newHourEl);
  }

  const shopTotalEl = document.createElement('th');
  shopTotalEl.innerText = this.totalDailyCookies;
  rowEl.appendChild(shopTotalEl);

  parentEl.appendChild(rowEl);
};

// RENDER METHODS

function renderLocation(location){
  const currentShop = new ShopLocation(location.name, location.minHourlyCustomers, location.maxHourlyCustomers, location.avgCookiesPerCustomer);
  currentShop.generateDailyCookies();
  currentShop.renderShopData();
}

function renderTableHead(){
  const parentEl = document.querySelector('thead');
  const rowEl = document.createElement('tr');

  const emptyCorner = document.createElement('td');
  rowEl.appendChild(emptyCorner);

  for (let i = 0; i < hoursArray.length; i++) {
    const newHourEl = document.createElement('th');
    newHourEl.innerText = hoursArray[i];
    rowEl.appendChild(newHourEl);
  }

  parentEl.appendChild(rowEl);
}

function renderTableFoot(){
  const parentEl = document.querySelector('tfoot');
  parentEl.innerHTML = '';

  const rowEl = document.createElement('tr');

  const totalLabel = document.createElement('th');
  totalLabel.innerText = 'TOTAL';
  rowEl.appendChild(totalLabel);

  let totalDailyCookies = 0;
  for (let i = 0; i < hourlyDataArray.length; i++) {
    const newHourEl = document.createElement('th');
    newHourEl.innerText = hourlyDataArray[i].totalCookies;
    rowEl.appendChild(newHourEl);

    totalDailyCookies += hourlyDataArray[i].totalCookies;
  }

  const totalDailyCookiesEl = document.createElement('th');
  totalDailyCookiesEl.innerText = totalDailyCookies;
  rowEl.appendChild(totalDailyCookiesEl);
  parentEl.appendChild(rowEl);
}

// EVENT LISTENERS

const form = document.querySelector('form');
form.addEventListener('click', function(event) {
  event.preventDefault();

  // **ADD VALIDATION FOR INPUTS (PRESENT), MIN < MAX, AND AVG > 0?**

  if (event.target.name === 'submit') {
    const location = {
      name: form['location-name'].value,
      minHourlyCustomers: form['min-hourly-customers'].value,
      maxHourlyCustomers: form['max-hourly-customers'].value,
      avgCookiesPerCustomer: form['avg-cookies-per-customer'].value
    };
    renderLocation(location);
    renderTableFoot();
  }
});

// RENDER HTML

renderTableHead();

for (let i = 0; i < locationDataArray.length; i++) {
  const location = locationDataArray[i];
  renderLocation(location);
}

renderTableFoot();
