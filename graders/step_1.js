// Grading / prep methods for Step 1

let firstString = '';
let secondString = '';
let hasStartedStep1 = false;

let _hasLoggedFirstString = false;
let _hasLoggedFirstStringLength = false;
let _hasLoggedSecondString = false;
let _hasLoggedSecondStringLength = false;
let _hasLoggedCombinedString = false;
let _hasLoggedCombinedStringLength = false;



function executeStep1() {
     firstString = randomElement(['Hello', 'Potato', 'Valor']);
     secondString = randomElement(['World', 'Garden', 'Education']);

     log("Value of firstString is: '" + firstString + "'");
     log("Value of secondString is: '" + secondString + "'");
     log("");
     log("---------");
     log("");

     hasStartedStep1 = true;
     step1(firstString, secondString);

     setTimeout(() => {
        logEndCriteria( new Map([
            ['Logged firstString on a line by itself', _hasLoggedFirstString],
            ['Logged length of firstString', _hasLoggedFirstStringLength],
            ['Logged secondString on a line by itself', _hasLoggedSecondString],
            ['Logged length of secondString', _hasLoggedSecondStringLength],
            ['Logged combined value of firstString and secondString', _hasLoggedCombinedString],
            ['Logged length of combined value of firstString and secondString', _hasLoggedCombinedStringLength],
        ]));
     }, 250);
}

function assertSuccessStep1(logMsg) {
    if (!hasStartedStep1) return;

    if (logMsg == firstString) {
        _hasLoggedFirstString = true;
    }
    if (logMsg == secondString) {
        _hasLoggedSecondString = true;
    }
    if (logMsg == (firstString + secondString)) {
        _hasLoggedCombinedString = true;
    }

    if (logMsg.includes('' + firstString.length)) {
        _hasLoggedFirstStringLength = true;
    }
    if (logMsg.includes('' + secondString.length)) {
        _hasLoggedSecondStringLength = true;
    }
    if (logMsg.includes('' + (firstString.length + secondString.length))) {
        _hasLoggedCombinedStringLength = true;
    }

    
}