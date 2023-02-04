'use strict'

//Task1: Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
{
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    const arr = arr1.concat(arr2);
    console.log('Task1', arr);
}

//Task2: Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
{
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];

    arr1.reverse();
    console.log('Task2', arr1);
}

//Task3: Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
{
    const arr1 = [1,2,3];

    arr1.push(4, 5, 6)
    console.log('Task3', arr1);
}

//Task4: Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
{
    const arr1 = [1,2,3];

    arr1.unshift(4, 5, 6);
    console.log('Task4', arr1);
}

//Task5: Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран первый элемент.
{
    const arr1 = ['js', 'css', 'jq'];

    const firstElement = arr1.shift();
    console.log('Task5', firstElement);
}

//Task6: Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран последний элемент.
{
    const arr1 = ['js', 'css', 'jq'];

    const lastElement = arr1.pop();
    console.log('Task6', lastElement);
}

//Task7: Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
{
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = arr1.splice(0, 3);
    console.log('Task7', arr2);
}

//Task8: Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
{
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = arr1.splice(3, 2);
    console.log('Task8', arr2);
}

//Task9: Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
{
    const arr1 = [1, 2, 3, 4, 5];
    arr1.splice(1, 2);
    console.log('Task9', arr1);
}

//Task10: Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
{
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = arr1.splice(1, 4);
    console.log('Task10', arr2);
}

//Task11: Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].
{
    const arr1 = [1, 2, 3, 4, 5];
    arr1.splice(3, 0, 'a', 'b', 'c');
    console.log('Task11', arr1);
}

//Task12: Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].
{
    const arr1 = [1, 2, 3, 4, 5];
    arr1.splice(1, 0, 'a', 'b');
    arr1.splice(6, 0, 'c');
    arr1.push('e');
    console.log('Task11', arr1);
}

//Task13: Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
{
    const arr1 = [3, 4, 1, 2, 7];
    arr1.sort();
    console.log('Task12', arr1);
}

//Task14: Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
{
    const arr1 = [5, 6, 7, 8, 9];
    const result = arr1.reduce((sum, current) => sum + current, 0);
    console.log('Task14',   result);
}

//Task15: Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
{
    const arr1 = [5, 6, 7, 8, 9];
    const result = arr1.map((item) => Math.pow(item, 2));
    console.log('Task15', result);
}

//Task16: Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
{
    const arr1 = [1, -3, 5, 6, -7, 8, 9, -11];
    const result = arr1.filter((item) => item < 0);
    console.log('Task16', result);
}

//Task17: Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
{
    const arr1 = [1, -3, 5, 6, -7, 8, 9, -11];
    const result = arr1.filter((item) => item % 2 === 0);
    console.log('Task17', result);
}

//Task18: Дан массив со строками [‘aaa’, ‘aaaqqq’, ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]. Оставьте в нем только те строки, длина которых больше 5-ти символов.
{
    const arr1 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
    const result = arr1.filter((item) => item.length > 5);
    console.log('Task18', result);
}

//Task19: Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
{
    const arr1 = [1, 2, [3, 4], 5, [6, 7]];
    const result = arr1.filter((item) => Array.isArray(item));
    console.log('Task19', result);
}

//Task20: Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
{
    const arr1 = [5,-3, 6,-5, 0,-7, 8, 9];
    let result = arr1.filter((item) => item < 0);
    result = result.length;
    console.log('Task20', result);
}