var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };

})();


console.log(counter.value());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
counter.decrement();
console.log(counter.value());

// function name(c,d) {
//     return d+c
// }
// console.log(name(2, 4));
// name(2, 4) 