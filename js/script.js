let rain = prompt("How many inches of rain fell?");

let inches = "*"
console.log("Rainfall: " + inches.repeat(rain));

let yeild = 50
if (rain >= 20) {
    yield = yield*.9
}
if (rain < 10) {
    yield = yield*.8
}

let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "no") {
    console.log("The yield should be " + yield)
}
if (fertilizer === "yes") {
    var type = prompt("did you use premium or regular fertilizer?");
}
if (type === "premium") {
    yield = yield*1.15
    console.log("The yield should be " + yield)
}
if (type === "regular") {
    yield = yield*1.10
    console.log("The yield should be " + yield)
}