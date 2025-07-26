class Human {
    constructor(private readonly msg : string) { }
    // msg: string;
    speak() {
        this.msg = "Speak "+ this.msg;
        console.log(this.msg);
    }
}
const tom = new Human("HI");
// tom.msg = "hello";
tom.speak();