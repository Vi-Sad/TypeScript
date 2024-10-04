// Принимает массив объектов и возвращает новый массив, содержащий только те объекты,
// у которых имеется свойство “name” (filterByName([{name: 'John', age: 25}, {age: 30}]) => [{name: 'John', age: 25}])

function KeyName(array) {
    return array.filter((value) => {
        return typeof value.name === "string";
    });
}

console.log(KeyName([{name: 'Vicka', age: 22}, {name: 'John'}, {age: 30}]))