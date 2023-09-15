/**
 * @param {Function} fn
 */
function memoize(fn) {
    var map = {}
    return function(...args) {
        if (map[fn.name] != null) {
            if (map[fn.name][args] == null) {
                map[fn.name][args] = fn(...args);
            } 
        } else {
            map[fn.name] = {};
            map[fn.name][args] = fn(...args);
        }
        return map[fn.name][args];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */