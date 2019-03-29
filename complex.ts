class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number){
        this.re = re;
        this.im = im;
    }

    add(obj: Complex){
        return new Complex(this.re + obj.re, this.im + obj.im);
    }

    subtract(obj: Complex){
        return new Complex(this.re - obj.re, this.im - obj.im);
    }

    abs(){
        return Math.sqrt((this.re * this.re) + (this.im * this.im));
    }

    toString(){
        return this.re  + " " + this.im;
    }

}

let com1 = new Complex(3,2);
let com2 = new Complex(2,3);

console.log(com1.add(com2));
console.log(com1.subtract(com2));
console.log(com1.abs());
console.log(com1.toString());






