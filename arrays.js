
//function invocation
answer1()
// answer2()
// answer3()
// answer4()
// answer5()
// answer6()
// answer7()
// answer8()
// answer9()
// answer10()


function answer1() {
    var eduQualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
    for (i = 0; i < eduQualifications.length; i++) {
        document.write(eduQualifications[i] + "<br>");
    }
}

function answer2() {
    var studentNames = ["Abdullah", "Hanif", "Zeeshan"]
    var studentScores = ["350", "390", "395"]

    studentNames.forEach(function (item, index) {
        console.log("Score of " + item + " is " + studentScores[index] + " Percentage: " + ((parseInt(studentScores[index]) / 500) * 100) + "%");
    });
}

function answer3() {
    var colors = ["Green", "yellow", "red"];
    alert(colors);

    var colorAtStart = prompt("Which color you want to add to the list at begining");
    colors.unshift(colorAtStart);
    alert(colors);
    colors.unshift("White", "Black");
    alert(colors);
    colors.shift();
    alert(colors);
    colors.pop();
    alert(colors);
    var indexPositionToAddNewElement = prompt("At what position you want to add new color?");
    var newElement = prompt("Which color you want to add?");
    colors.splice(indexPositionToAddNewElement, 0, newElement);
    alert(colors);
    var indexPositionToDeleteElements = prompt("At what position you want to delete the elements");
    var numbrOfElementsToDelete = prompt("How many elements to delete");
    colors.splice(indexPositionToDeleteElements, numbrOfElementsToDelete);
    alert(colors);
}

function answer5() {
    var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr1[i] === arr[j]) {
                arr1.splice(arr[j], arr[j + 1]);
            }
        }
    }
    console.log(arr);
}

function answer6() {
    var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
    var o = ["th", "st", "nd", "rd"];
    document.write("1" + o[1] + " choice is " + aCities[0] + "<br>");
    document.write("2" + o[2] + " choice is " + aCities[1] + "<br>");
    document.write("3" + o[3] + " choice is " + aCities[2]);
}

function answer7() {
    var a = [10, 20, 4, 40, 60, 70];
    var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var unionOfAB = [];
    unionOfAB = a.slice(0, a.length);
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < unionOfAB.length; j++) {
            if (b[i] > unionOfAB[j]) {
                unionOfAB.splice(unionOfAB[j], 0, b[i]);
            } else if (b[i] < unionOfAB[j]) {
                unionOfAB.splice(unionOfAB[j - 2], 0, b[i]);
            }
        }
    }
    document.write(unionOfAB);
}

function answer8(){
    var counting = [];
var reverseCounting = [];
var even = [];
var odd = [];
var series = [];
var num = 1;
revNum = 15;
for(var i=0; i<15; i++){
    counting[i] = num;
    reverseCounting[i] = revNum;
    num++;
    revNum--;
    if(counting[i] % 2 == 0){
        even[i] = counting[i];
        series[i] = counting[i]+"k";
    }else if(counting[i] % 2 == 1){
        odd[i] = counting[i];
    }   
}
document.write("Counting: " + counting);
document.write("<br>" + "Reverse Counting: " + reverseCounting);
document.write("<br>" + "Even: " + even);
document.write("<br>" + "Odd: " + odd);
document.write("<br>" + "Series: " + series);
}

function answer9(){
    var numbers = [24, 53, 78, 91, 12];
var largeNum = 0;
for(i = 0; i < numbers.length; i++){
    if(numbers[i] >= largeNum){
        largeNum = numbers[i];
    }else if(numbers[i] <= largeNum){
        largeNum = largeNum;
    }
}
document.write("Array items: " + numbers);
document.write("<br>" + "The Largest Number: " + largeNum);
}

function answer10(){
    var a = [20, 53, 78, 4, 91, 12];
    var arangedA = [];
    
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < arangedA.length; j++) {
            if (arangedA.length == 0) {
                arangedA.push(a[i]);
            } else if (a[i] >= arangedA[j]) {
                arangedA.splice(arangedA[j], 0, a[i]);
            } else if (a[i] < arangedA[j]) {
                arangedA.splice(arangedA[j - 1], 0, a[i]);
            }
        }
    }
    console.log(arangedA);
}