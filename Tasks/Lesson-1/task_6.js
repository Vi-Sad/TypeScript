// Принимает массив чисел и возвращает новый массив, в котором все элементы увеличены на 1

function Increase(arr) {
    return arr.map((value) => value + 1);
}

console.log(Increase([1, 2, 3]))