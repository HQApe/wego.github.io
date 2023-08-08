function createSingnal(fn) {
    var singnal = null;
    return function() {
        if (!singnal) {
            singnal = fn.apply(this, arguments);
        }
        return singnal;
    };
}


let Person = function(name) {
    this.name = name;
    this.age = 0;
}

var createPerson = function() {
    console.log('Call only once!');
    let suyan = new Person('suan');
    return suyan;
}

var createPersonSingnal = createSingnal(createPerson);
let suyan = createPersonSingnal();

export default suyan;