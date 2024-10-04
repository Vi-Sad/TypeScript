// Найти пропущенное число в данном массиве целых чисел от 1 до 100 (findMissing([1,2,4,5,6]) => 3)

function MissingNumber(array) {
    return Number(array.filter((value, index) => {
        return value + 1 !== array[index + 1] && array[index + 1] !== undefined;
    }).join('')) + 1;
}

console.log(MissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]))