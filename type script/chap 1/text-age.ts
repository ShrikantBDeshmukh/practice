interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log("User name is " + usr.name);
    if (usr.age >= 18) {
        console.log("Allow to drive");
    } else {
        console.log("Not allow to drive");
    }
}

const tom: User = {
    name: "Shrikant",
    age: 35
}

canDrive(tom);