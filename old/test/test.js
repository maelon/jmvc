var Validation;
(function (Validation) {
    var letterReg = /^[A-Za-z]+$/g;
    var LetterValidator = (function () {
        function LetterValidator() {
        }
        LetterValidator.prototype.isAcceptable = function (s) {
            return letterReg.test(s);
        };
        return LetterValidator;
    })();
    Validation.LetterValidator = LetterValidator;
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    var numberReg = /^[0-9]+$/g;
    var NumberValidator = (function () {
        function NumberValidator() {
        }
        NumberValidator.prototype.isAcceptable = function (s) {
            return numberReg.test(s);
        };
        return NumberValidator;
    })();
    Validation.NumberValidator = NumberValidator;
})(Validation || (Validation = {}));
var a = false;
var b = [1, 2, 3];
var c = 'aaa';
var d;
(function (d) {
    d[d["a"] = 0] = "a";
    d[d["b"] = 1] = "b";
    d[d["c"] = 2] = "c";
})(d || (d = {}));
;
var e = d.b;
var f = 123;
f = 'abc';
f = true;
function abc() {
    alert(123);
}
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var label = { size: 10, label: '123' };
printLabel(label);
function createSquare(squareconfig) {
    var newSquare = { color: 'red', area: 100 };
    if (squareconfig.color) {
        newSquare.color = squareconfig.color;
    }
    if (squareconfig.width) {
        newSquare.area = squareconfig.width * squareconfig.width;
    }
    return newSquare;
}
createSquare({ color: 'black' });
var mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
var dic = {};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        alert(this.name + ' moved ' + meters + ' m.');
    };
    return Animal;
})();
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            this._fullName = name;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
})();
var Grid = (function () {
    function Grid() {
    }
    Grid.origin = { x: 1.0, y: 1.0 };
    return Grid;
})();
var strings = ['hello', '12312', '21ss'];
var validators = {};
validators['num validator'] = new Validation.NumberValidator();
validators['ltr validator'] = new Validation.LetterValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not matches ') + name);
    }
});
