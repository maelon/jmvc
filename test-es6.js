class Person {
    constructor(name) {
        this._name = name || '';
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if(newName) {
            this._name = newName;
        }
    }
}

class TestPerson extends Person {
    constructor(name = 'test') {
        super(name);
    }
}

class TestWebpackPerson extends Person {
    constructor(name = 'webpacktest') {
        super(name);
    }
}

var a = new TestPerson();
console.log(a.name);

var b = new TestWebpackPerson();
console.log(b.name);
