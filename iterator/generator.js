let jsondata = {
    name: "ahao",
    age: 18
};

function printnameandage() {
    console.log(JSON.stringify(jsondata));
}
function printname() {
    console.log(jsondata.name);
}
function printage() {
    console.log(jsondata.age);
}