function myFunction1() {
    var userFirstName = prompt("please enter your first name");
    var userLastName = prompt("please enter your last name");
    var UserFullName = "Greetings! " + userFirstName + " " + userLastName;
    document.getElementById("task-1-p").innerText = UserFullName;
}

function myFunction2() {
    var userInput = prompt("enter your favorite mobile phone brand");
    for (let x of userInput) {
        var inputLength = userInput.length;
    }
    document.getElementById("task-2-p").innerHTML = inputLength;
    // Another idea to achieve the task :
    // var userInput = prompt("enter your favorite mobile phone brand"); 
    // if(userInput) {
    //       var inputLength = userInput.length;
    //     }
    // else {
    //     alert("Make sure that you fill the input!")
    // }
    // document.getElementById("task-2-p").innerHTML = inputLength;

}

function myFunction3() {
    var string = "paskistani";
    var findTheINdexOFN = string.indexOf("n");
    document.getElementById("task-3-p").innerHTML = findTheINdexOFN;

}

function myFunction4() {
    var word = "Hello world";
    var findTheINdexOFl = word.lastIndexOf("l");
    document.getElementById("task-4-p").innerHTML = "The last index of 'l' is: " + findTheINdexOFl;
}
function myFunction5() {
    var task5Word = "pakistani";
    var findTheINdexOFl = task5Word.charAt(3);
    document.getElementById("task-5-p").innerHTML = "The word at index '3' is: " + findTheINdexOFl;
}
function myFunction6() {
    var city = "Hyderabad";
    var finalCItyValue = city.replace("Hyder", "Islam");
    document.getElementById("task-6-p").innerHTML = "The word 'Hyder' is changed to 'islam': " + finalCItyValue;
}
function myFunction7() {
    var paragraph = "“Ali and Sami are best friends. They play cricket and football together";
    var finalParagraph = paragraph.replaceAll("and", "&");
    document.getElementById("task-7-p").innerHTML = "The word 'and' is replaced with '&': " + finalParagraph;
}
function myFunction8() {
    var numberAsString = "472";
    var stringToNumber = parseInt(numberAsString);
    document.getElementById("task-8-1-p").innerHTML = "Value as String: " + numberAsString;
    document.getElementById("task-8-2-p").innerHTML = "Value as Number: " + stringToNumber;
    document.getElementById("task-8-3-p").innerHTML = "by clicking this button, typeof both vlaues is printed in the console to check the types.";
    console.log(typeof (numberAsString));
    console.log(typeof (stringToNumber));
}

function myFunction9() {
    var userInput = prompt("please write some text");
    var userInputToUppercase = userInput.toUpperCase();
    document.getElementById("task-9-1-p").innerText = userInputToUppercase;
    var userInputToLowerCase = userInput.toLowerCase();
    document.getElementById("task-9-2-p").innerText = userInputToLowerCase;
    var userInputToTitleCase = userInput.charAt(0).toLocaleUpperCase() + userInput.slice(1).toLocaleLowerCase();
    document.getElementById("task-9-3-p").innerText = userInputToTitleCase;
}

function myFunction10() {
    var inputByUser = prompt("please Enter text without any special character");
    const characterToAvoid = ["@", "#", "$", "!", ",", "%"]
    var finalUserInput = true;
    for (var i = 0; i < inputByUser.length; i++) {
        if (characterToAvoid.includes(inputByUser[i])) {
            finalUserInput = false;
            break;
        }
    }
    if (!finalUserInput) {
        alert("Please enter a valid input")
    }
    else {
        document.getElementById("task-10-p").innerHTML = inputByUser;
    }
}

function myFunction11() {
    var pasword = prompt("Please enter the pasword as per the requirments:");
    var firstPlace = pasword.charAt(0);
    var isvalid = true;
    var notToUse = ["@", "#", "$", "&"]

    if (!isNaN(firstPlace) || pasword.length < 6) {
        isvalid = false;
    }

    for (const specialchar of notToUse) {
        if (specialchar.includes(notToUse));
        isvalid = false;
        break;
    }

    if (isvalid) {
        alert("oops! it seems that your password is not according to the requirments")
    }
    else {
        document.getElementById("task-11-p").innerHTML = "This is your passwored: " + pasword
    }
}

function myFunction12() {
    var wordToChange = "university of karachi";
    const changedToArray = wordToChange.split("");

    var finalArray = ""
    for (let i = 0; i < wordToChange.length; i++) {
        finalArray += wordToChange[i] + "<br>";
    }
    document.getElementById("task-12-p").innerHTML = finalArray;
}

function myFunction13() {
    var task13Word = "paskitan";
    var finalWordToShow = task13Word.at(-1);
    document.getElementById("task-13-p").innerHTML = finalWordToShow;
}
function myFunction14() {
    var line = "The quick brown fox jumps over the lazy dog";
    var wordToCount = "the";
    var changeTheCase = line.toLowerCase();
    var splitTheLineInWords = changeTheCase.split(" ");
    var count = 0;

    for (const word of splitTheLineInWords) {
        if (word === wordToCount) {
            count++;
        }
    }

    document.getElementById("task-14-p").innerHTML =
        'The word "' + wordToCount + '" appears ' + count + ' times in the given string.';
}
