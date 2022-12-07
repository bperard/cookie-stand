'use strict';

const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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

const Seattle = {
  locationName: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  dailyCookies: [],
  cookiesPerHour: function (){
    const hourlyCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
    return Math.ceil(hourlyCustomers * this.averageCookiesPerCustomer);
  },
  cookiesPerDay: function (){
    let totalCookies = 0;
    for (let i = 0; i < hoursArray.length; i++) {
      const hourlyCookies = this.cookiesPerHour();
      this.dailyCookies.push(hourlyCookies);
      totalCookies += hourlyCookies;
    }
    this.dailyCookies.push(totalCookies);
  }
};

const Tokyo = {
  locationName: 'Tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  dailyCookies: [],
  cookiesPerHour: function (){
    const hourlyCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
    return Math.ceil(hourlyCustomers * this.averageCookiesPerCustomer);
  },
  cookiesPerDay: function (){
    let totalCookies = 0;
    for (let i = 0; i < hoursArray.length; i++) {
      const hourlyCookies = this.cookiesPerHour();
      this.dailyCookies.push(hourlyCookies);
      totalCookies += hourlyCookies;
    }
    this.dailyCookies.push(totalCookies);
  }
};

const Dubai = {
  locationName: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  dailyCookies: [],
  cookiesPerHour: function (){
    const hourlyCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
    return Math.ceil(hourlyCustomers * this.averageCookiesPerCustomer);
  },
  cookiesPerDay: function (){
    let totalCookies = 0;
    for (let i = 0; i < hoursArray.length; i++) {
      const hourlyCookies = this.cookiesPerHour();
      this.dailyCookies.push(hourlyCookies);
      totalCookies += hourlyCookies;
    }
    this.dailyCookies.push(totalCookies);
  }
};

const Paris = {
  locationName: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  dailyCookies: [],
  cookiesPerHour: function (){
    const hourlyCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
    return Math.ceil(hourlyCustomers * this.averageCookiesPerCustomer);
  },
  cookiesPerDay: function (){
    let totalCookies = 0;
    for (let i = 0; i < hoursArray.length; i++) {
      const hourlyCookies = this.cookiesPerHour();
      this.dailyCookies.push(hourlyCookies);
      totalCookies += hourlyCookies;
    }
    this.dailyCookies.push(totalCookies);
  }
};

const Lima = {
  locationName: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  dailyCookies: [],
  cookiesPerHour: function (){
    const hourlyCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
    return Math.ceil(hourlyCustomers * this.averageCookiesPerCustomer);
  },
  cookiesPerDay: function (){
    let totalCookies = 0;
    for (let i = 0; i < hoursArray.length; i++) {
      const hourlyCookies = this.cookiesPerHour();
      this.dailyCookies.push(hourlyCookies);
      totalCookies += hourlyCookies;
    }
    this.dailyCookies.push(totalCookies);
  }
};

const locationsArray = [Seattle, Tokyo, Dubai, Paris, Lima];

for (let i = 0; i < locationsArray.length; i++) {
  const location = locationsArray[i];
  location.cookiesPerDay();
  renderDailySales(location);
  // console.log(location.location, location.dailyCookies, `Total = ${location.dailyCookies[hoursArray.length]}`);
}
