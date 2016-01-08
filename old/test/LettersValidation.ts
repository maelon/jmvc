module Validation {
    var letterReg = /^[A-Za-z]+$/g;
    export class LetterValidator implements StringValidator {
        isAcceptable(s: string): boolean {
            return letterReg.test(s);
        }
    }
}
