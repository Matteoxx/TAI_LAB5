"use strict";
class Complex {
    constructor(re, im) {
        this.re = re;
        this.im = im;
    }
    add(obj) {
        return new Complex(this.re + obj.re, this.im + obj.im);
    }
    subtract(obj) {
        return new Complex(this.re - obj.re, this.im - obj.im);
    }
    abs() {
        return Math.sqrt((this.re * this.re) + (this.im * this.im));
    }
    toString() {
        return String(this.re) + " + " + String(this.im) + "i";
    }
}
let com1 = new Complex(3, 2);
let com2 = new Complex(2, 3);
console.log(com1.add(com2));
console.log(com1.subtract(com2));
console.log(com1.abs());
console.log(com1.toString());
