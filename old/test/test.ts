var a: boolean = false;
var b: number[] = [1, 2, 3];
var c: string = 'aaa';

enum d {a, b , c};
var e: d = d.b;

var f: any = 123;
f = 'abc';
f = true;

function abc(): void {
    alert(123);
}

interface LabeledValue {
    label: string;
}
function printLabel(labelObj: LabeledValue) {
    console.log(labelObj.label);
}
var label = {size: 10, label: '123'};
printLabel(label);

interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(squareconfig: SquareConfig): {color: string, area: number} {
    var newSquare = {color: 'red', area: 100};
    if(squareconfig.color) {
        newSquare.color = squareconfig.color;
    }
    if(squareconfig.width) {
        newSquare.area = squareconfig.width * squareconfig.width;
    }
    return newSquare;
}
createSquare({color: 'black'});

interface MySearch {
    (source: string, subString: string): boolean;
}
var mySearch: MySearch = function(source:string , substring: string) {
    var result = source.search(substring);
    return result > -1;
}

interface Dictionary {
    [index: string]: string;
}
var dic: Dictionary = {};

class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(meters: number) {
        alert(this.name + ' moved ' + meters + ' m.');
    }
}

class Employee {
    private _fullName: string;
    get fullName() {
        return this._fullName;
    }
    set fullName(name: string) {
        this._fullName = name;
    }
}

class Grid {
    static origin = {x: 1.0, y: 1.0};
}

var strings: string[] = ['hello', '12312', '21ss'];
var validators: { [s: string]: Validation.StringValidator } = {};
validators['num validator'] = new Validation.NumberValidator();
validators['ltr validator'] = new Validation.LetterValidator();
strings.forEach(s => {
    for(var name in validators) {
        console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? ' matches ': ' does not matches ') + name);
    }
});
