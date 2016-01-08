module Validation {
    var numberReg = /^[0-9]+$/g;
    export class NumberValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return numberReg.test(s);
        }
    }
}
