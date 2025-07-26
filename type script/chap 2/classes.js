var Human = /** @class */ (function () {
    function Human(msg) {
        this.msg = msg;
    }
    // msg: string;
    Human.prototype.speak = function () {
        console.log(this.msg);
    };
    return Human;
}());
var tom = new Human("HI");
// tom.msg = "hello";
tom.speak();
