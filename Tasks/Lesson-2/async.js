"use strict";
console.log('Start');
setTimeout(() => {
    console.log('Timeout 3');
}, 0);
const promiseFunc = () => new Promise((resolve, reject) => {
    console.log('I\'m inside promise Func');
    resolve('resolve Func');
});
const promiseFunc2 = () => new Promise((resolve, reject) => {
    console.log('I\'m inside promise Func 2');
    reject('reject Func 2');
    resolve('resolve Func 2');
});
const promise = new Promise((resolve, reject) => {
    console.log('I\'m inside promise');
    Math.random() > 0.5 ? resolve('Good') : reject('Bad');
});
promise.then((data) => {
    console.log(data.toUpperCase());
}).catch((err) => {
    console.warn(err);
}).finally(() => {
    console.log('Final');
});
console.log(Math.random());
// Macrotasks (setInterval and setTimeout)
setInterval(() => {
    console.log('Interval');
}, 5000);
setTimeout(() => {
    console.log('Timeout');
}, 2000);
setTimeout(() => {
    console.log('Timeout 2');
}, 1000);
console.log('End');
promiseFunc2().then((dataFunc2) => {
    console.log(dataFunc2);
}).catch((err2) => {
    console.warn(err2);
});
promiseFunc().then((dataFunc) => {
    console.log(dataFunc);
});
const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }
    catch (e) {
        console.warn('Error Async');
    }
    finally {
        console.log('Final Async');
    }
};
getData();
Promise.reject('Bad data').then((d) => {
    console.log(d);
}).catch((e) => {
    console.error(e);
});
Promise.resolve('Good data').then((d) => {
    console.log(d);
}).catch((e) => {
    console.log(e);
});
const promise2 = new Promise((resolve, reject) => {
    console.log('I\'m inside promise 2');
    Math.random() > 0.5 ? resolve('Good 2') : reject('Bad 2');
});
// Вывод первого быстрого промиса
Promise.race([promise2, getData]).then(console.log).catch(console.warn);
// Вывод первого успешного промиса
Promise.any([promise2, getData]).then(console.log).catch(console.warn);
// Общий результат успешных промисов
Promise.all([promise2, getData]).then(console.log).catch(console.warn);
