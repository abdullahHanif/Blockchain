var stdin = process.openStdin();
var array = new Array()

stdin.addListener("data", function (d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 

    array.push(d.toString().trim())

    array.forEach(deal)
});

function deal(value) {
    if (value === "25") {
        console.log("Found")
    }
    else {
        console.log("Not Found")
    }
}

function doSplice(){}