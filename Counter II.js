/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentCount = init;
    const obj = {
        increment: function() {
            currentCount += 1;
            return currentCount;
        },
        reset: function() {
            currentCount = init;
            return currentCount;
        },
        decrement: function() {
            currentCount -= 1;
            return currentCount;
        }
    }
    return obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */