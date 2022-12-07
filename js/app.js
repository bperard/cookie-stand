'use strict';

const hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const Seattle = {
  location: 'Seattle',
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
  location: 'Tokyo',
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
  location: 'Dubai',
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
  location: 'Paris',
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
  location: 'Lima',
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
  locationsArray[i].cookiesPerDay();
  console.log(locationsArray[i].location, locationsArray[i].dailyCookies, `Total = ${locationsArray[i].dailyCookies[hoursArray.length]}`);
}
