var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.re + obj.re, this.im + obj.im);
    };
    Complex.prototype.subtract = function (obj) {
        return new Complex(this.re - obj.re, this.im - obj.im);
    };
    Complex.prototype.abs = function () {
        return Math.sqrt((this.re * this.re) + (this.im * this.im));
    };
    Complex.prototype.toString = function () {
        return this.re + " " + this.im;
    };
    return Complex;
}());
var com1 = new Complex(3, 2);
var com2 = new Complex(2, 3);
console.log(com1.add(com2));
console.log(com1.subtract(com2));
console.log(com1.abs());
console.log(com1.toString());
