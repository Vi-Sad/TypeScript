// Принимает массив чисел и возвращает самое большое число из массива

function BigNumber(array) {
    return Math.max(...array);
}

console.log(BigNumber([1, 2, 3, 4, 5]))