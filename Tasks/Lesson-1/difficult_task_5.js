// Найти все дубликаты в массиве. Если дубликаты отсутствуют,
// вернуть пустой массив (findDuplicates([1,2,3,4,5,1,2,6]) => [1,2])

function FindDuplicates(array) {
    const duplicatesNumbers = []
    array.forEach((value) => {
        if (array.filter((valueFilter) => {
            return value === valueFilter
        }).length !== 1) {
            duplicatesNumbers.push(value)
        }
    })
    return Array.from(new Set(duplicatesNumbers));
}

console.log(FindDuplicates([1, 2, 3, 4, 5, 1, 2, 6]))