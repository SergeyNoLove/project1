function removeDuplicates(arr, limit) {
    const map = new Map(); // создаем пустой объект Map

    // проходимся по всем элементам массива
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]; // текущий элемент массива

        if (map.has(item)) { // если элемент уже есть в Map
            map.set(item, map.get(item) + 1); // увеличиваем счетчик повторений на 1
        } else {
            map.set(item, 1); // иначе добавляем элемент в Map со счетчиком 1
        }

        if (map.get(item) > limit) { // если количество повторений больше заданного лимита
            arr.splice(i, 1); // удаляем элемент из исходного массива
            i--; // уменьшаем индекс на 1, чтобы не пропустить следующий элемент
        }
    }

    return arr; // возвращаем исходный массив без дубликатов
}


//   const arr = [1, 2, 3, 2, 3, 3, 4, 4, 5];
//   const limit = 2;

const result = removeDuplicates([7, 3, 3, 2, 3, 3, 4, 4, 5, 1, 2, 7, 9], 2);

console.log(result);
console.log('end');

