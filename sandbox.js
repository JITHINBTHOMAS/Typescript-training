console.log("konichiwa");
var x = "keri vaada makkale...!";
x += " alle venda avde ninno";
console.log(x);
var y = 10.99;
console.warn("number type:", y);
var z = true;
console.error("boolean type:", z);
var a;
a = "da kocherukka";
console.warn(typeof a);
a = 102028232743659270356049163579426576405816027340569736405203795;
console.warn(typeof a);
var b;
b = "uhuhuh";
console.warn(typeof b);
var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
data.push(60);
console.log(data, data.length);
data.forEach(function (num) { return console.log(num); });
var data1 = ["veg", 12.33, 10, true];
console.log(data1, data1.length);
console.log(data1.join("<->"));
function print1(p, q) {
    return p * q;
}
function print2(p, q) {
    return p * q;
}
function print3(p, q) {
    if (q == undefined)
        return p;
    return p * q;
}
console.log(print1(1, 2) + print2(3, 4));
console.log(print3(1));
console.log(print3(1, 2));
var product = /** @class */ (function () {
    function product(pid, desc, price) {
        this.pid = pid;
        this.desc = desc;
        this.price = price;
    }
    product.prototype.setpid = function (p) {
        this.pid = p;
    };
    product.prototype.getpid = function () {
        return this.pid;
    };
    product.prototype.printall = function () {
        return this.pid + this.desc + this.price;
    };
    return product;
}());
var p = new product(1, "jithin", 200);
console.log(p.getpid());
console.log(p.printall());
