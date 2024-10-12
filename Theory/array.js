"use strict";
// Не мутирующие методы массива
// map - итерированное по массиву и возврат нового массива, не изменяя исходный массив
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((value, index, array) => value ** 2);
console.log(newArr);
// filter - итерированное по массиву и возврат нового массива с элементами, которые прошли проверку
let arr2 = [1, 2, 3, 4, 5];
let newArr2 = arr2.filter((value) => value % 2 === 0);
console.log(newArr2);
// forEach - итерированное по массиву и выполнение функции для каждого элемента
let arr3 = [1, 2, 3, 4, 5];
let newArr3 = arr3.forEach((value) => console.log(value));
console.log(newArr3);
// reduce - итерированное по массиву и возврат единственного значения
let arr4 = [1, 2, 3, 4, 5];
let newArr4 = arr4.reduce((acc, index) => acc + index, 0);
console.log(newArr4);
// join - собирает массив в строку
let arr7 = [1, 2, 3, 4, 5];
let res7 = arr7.join('');
console.log(res7);
// find - возвращает первый элемент, который прошел проверку. Если ничего не найдено, то возвращает undefined
let arr8 = [1, 2, 3, 4, 5];
let res8 = arr8.find((value) => value > 3);
console.log(res8);
// findIndex - возвращает индекс первого элемента, который прошел проверку. Если ничего не найдено, то возвращает -1
let arr9 = [1, 2, 3, 4, 5];
let res9 = arr9.findIndex((value) => value > 3);
console.log(res9);
// some - проверяет, проходит ли хотя бы один элемент проверку. Возвращает true или false
let arr10 = [1, 2, 3, 4, 5];
let res10 = arr10.some((value) => value > 3);
console.log(res10);
// every - проверяет, проходят ли все элементы проверку. Возвращает true или false
let arr11 = [1, 2, 3, 4, 5];
let res11 = arr11.every((value) => value > 3);
console.log(res11);
// includes - проверяет, содержит ли массив указанный элемент. Возвращает true или false
let arr12 = [1, 2, 3, 4, 5];
let res12 = arr12.includes(3);
console.log(res12);
// slice - возвращает новый массив, содержащий копию части исходного массива
let arr17 = [1, 2, 3, 4, 5];
let newArr17 = arr17.slice(1, 3);
console.log(newArr17);
// Мутирующие методы массива
// sort - сортировка элементов массива (toSorted - обновленный вариант)
let arr5 = [3, 4, 2, 1, 5];
arr5.sort((a, b) => a - b);
console.log(arr5);
// reverse - изменяет порядок элементов массива на обратный
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6);
// push - добавляет элемент в конец массива
let arr13 = [1, 2, 3, 4, 5];
arr13.push(6);
console.log(arr13);
// pop - удаляет последний элемент массива
let arr14 = [1, 2, 3, 4, 5];
let delEl = arr14.pop();
console.log(arr14, delEl);
// unshift - добавляет элемент в начало массива
let arr15 = [1, 2, 3, 4, 5];
arr15.unshift(0);
console.log(arr15);
// shift - удаляет первый элемент массива
let arr16 = [1, 2, 3, 4, 5];
let delEl2 = arr16.shift();
console.log(arr16, delEl2);
// splice - добавляет или удаляет элемент в массиве (toSpliced - обновленный вариант)
let arr18 = [1, 2, 3, 4, 5];
let delEl3 = arr18.splice(1, 3, 8); // 8 - новый добавленный элемент (заменяет место удаленных)
console.log(arr18, delEl3);
