// Найдите число, которое встречается два раза в массиве целых чисел.
// Если все числа встречаются 1 раз — вернуть false. (findDuplicate([1,2,3,4,5,1,2,6]) => 1)

function RepeatedNumber(array) {
    let res = false;
    array.forEach((value) => {
        if (array.filter((valueFilter) => {
            return value === valueFilter
        }).length !== 1) {
            res = value
        }
    })
    return res;
}

console.log(RepeatedNumber([1, 2, 3, 4, 5]))
console.log(RepeatedNumber([1, 2, 3, 3, 4, 5]))
