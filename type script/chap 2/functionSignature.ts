type Signt = (miles: number) => boolean;
let runner: Signt = function (miles: number): boolean {
    if (miles > 10) {
        return true;
    } else {
        return false;
    }
}
console.log(runner(9));

let jump: Signt = function (count: number): boolean {
    if (count > 50) {
        return true;
    } else {
        return false;
    }
}
console.log(jump(60));
