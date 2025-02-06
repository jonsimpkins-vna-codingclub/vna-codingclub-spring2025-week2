// Grading / prep methods for Step 0

function executeStep0() {
    step0();
}

let _step0_loggedWeek1 = false;
let _step0_loggedStep3 = false;
function assertSuccessStep0(logMsg) {
    if (logMsg.toLowerCase().includes('week 1')) {
        _step0_loggedWeek1 = true;
    }
    if (logMsg.toLowerCase().includes('step 3')) {
        _step0_loggedStep3 = true;
    }

    if (_step0_loggedWeek1 && _step0_loggedStep3) {
        success();
    }
}