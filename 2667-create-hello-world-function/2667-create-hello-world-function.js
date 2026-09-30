/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return "Hello World"
        
    }
};

console.log(createHelloWorld(1,2))

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */