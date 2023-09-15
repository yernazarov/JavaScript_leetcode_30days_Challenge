/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let res = [];
    let temp = [];
    let count = 0;
    for (let i of arr) {
        if (count < size) {
            temp.push(i);
            count = count+1;
        } 
        if (count >= size) {
            res.push(temp);
            temp = [];
            count = 0;
        }
    }
    if (temp.length!=0) res.push(temp);
    return res;
};
