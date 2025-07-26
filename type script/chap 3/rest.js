function doSomething(a, ...others) {
    console.log(a, others, others[others.length - 1]);
}

doSomething(0,1,2,3,4,5,6,7,9);