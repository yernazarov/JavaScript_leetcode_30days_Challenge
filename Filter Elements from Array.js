/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = fn(arr[i], i);
        if (temp!=0) filteredArr.push(arr[i]);
    }
    return filteredArr;
};