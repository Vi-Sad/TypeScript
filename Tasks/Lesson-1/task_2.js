// Принимает массив объектов и сортирует его по возрастанию значения свойства “age”

function ArrayOfObjects(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

console.log(ArrayOfObjects([{name: 'Victoria', age: 22}, {name: 'Dmitry', age: 30}, {name: 'Anastasia', age: 19}]))