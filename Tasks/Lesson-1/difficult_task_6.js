// Удалить все дубликаты из массива целых чисел (removeDuplicates([1,2,3,4,5,1,2,6]) => [1,2,3,4,5,6])

function RemoveDuplicates(array) {
    return Array.from(new Set(array));
}

console.log(RemoveDuplicates([1, 2, 3, 4, 5, 1, 2, 6]))
