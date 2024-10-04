// Принимает массив чисел и возвращает новый массив, в котором все элементы умножены на их индекс

function MultiplicationByIndex(array) {
    return array.map((value, index) => value * index);
}

console.log(MultiplicationByIndex([1, 2, 3, 4, 5]))