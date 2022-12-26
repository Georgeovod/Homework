const arr = [1, 2, 3, -1, -2, -3];

const onlyPositiveNum = (arr) => {
    const newArr = [];
    let result = null;
    if (arr.length === 0) {
        result = "This massive is empty";
    } else {
        for (let i = 0; i < arr.length; ++i) {
            if (Math.sign(arr[i]) === 1) {
                newArr.push(arr[i]);
            };
        };
    };
    if (newArr.length !== 0) {
        return result = newArr;
    } else {
        return result;
    };
};
console.log(onlyPositiveNum(arr));