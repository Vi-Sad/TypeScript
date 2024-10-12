"use strict";
// Примитивные типы данных
let age = 20;
let firstName = 'John';
let isMarried = false;
// Не примитивные типы данных
// Массивы
let names = ['John', 'Sara', 'Bill'];
// или
let names2 = ['John', 'Sara', 'Bill', 'Alex'];
// Кортежи
let person = ['John', 20];
// Перечисления
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["yellow"] = 1] = "yellow";
    colors[colors["green"] = 2] = "green";
})(colors || (colors = {}));
let color = Math.floor(Math.random() * 3);
if (color == colors.red) {
    console.log('Stop');
}
// Специальные типы
// any
let someValue = 'Hello!';
someValue = 20;
someValue = true;
// unknown
let someValue2 = 'hello';
let someValue3 = someValue2;
// void (используется для указания, что функция не возвращает значение)
function sayHello() {
    console.log('Hello');
}
// never (используется для указания, что функция не возвращает значение и не завершается)
function throwError() {
    throw new Error('Error!');
}
const func = function (id) {
    return id.toString();
};
// null и undefined (подтипы всех типов данных)
let age2 = null;
let ahe3 = undefined;
let user = { name: 'John', age: 20, isAdmin: false };
let user1 = {
    name: 'John',
    age: 20,
    isAdmin: false,
    friends: {
        amount: 2
    }
};
