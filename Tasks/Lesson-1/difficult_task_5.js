// Найти все дубликаты в массиве. Если дубликаты отсутствуют,
// вернуть пустой массив (findDuplicates([1,2,3,4,5,1,2,6]) => [1,2])

function FindDuplicates(array) {
    let repeat = []
    let unique = []
    array.map((value) => {
        unique.includes(value) ? repeat.push(value) : unique.push(value)
    })
    return repeat;
}

console.log(FindDuplicates([1, 2, 3, 4, 5, 1, 2, 6]))
console.log(FindDuplicates([1, 2, 3]))