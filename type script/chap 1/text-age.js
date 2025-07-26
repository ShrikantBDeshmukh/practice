function canDrive(usr) {
    console.log("User name is " + usr.name);
    if (usr.age >= 18) {
        console.log("Allow to drive");
    }
    else {
        console.log("Not allow to drive");
    }
}
var tom = {
    name: "Shrikant",
    age: 35
};
canDrive(tom);
