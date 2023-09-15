/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let jsonObj = JSON.stringify(obj);
    return jsonObj=="{}" || jsonObj=="[]";
};