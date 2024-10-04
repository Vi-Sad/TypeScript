// Найдите все пары в массиве целых чисел, сумма которых равна данному числу.
// (findPairs([1,2,3,4,5,6], 6) => [[1,5], [2,4]])

function FindPairs(array, sum) {
    let sumNumbers = []
    array.forEach((value) => {
        array.map((valueMap) => {
            if (value + valueMap === sum && value !== valueMap) {
                sumNumbers.push([value, valueMap])
            }
        })
    })
    return sumNumbers.slice(0, sumNumbers.length / 2);
}

console.log(FindPairs([1, 2, 3, 4, 5, 6], 6))