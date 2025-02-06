
let step3Expected = {
    'numWords': 0,
    '3rdWord': '',
    'andCount': 0,
};

let _step3_loggedNumWords = false;
let _step3_logged3rdWord = false;
let _step3_loggedAndCount = false;

let _startedStep3 = false;

function executeStep3() {
    _startedStep3 = false;

    let inputString = '';
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            inputString = 'This is an example sentence';
            step3Expected = {
                'numWords': 5,
                '3rdWord': 'an',
                'andCount': 0,
            };
            break;
        case 1:
            inputString = 'Pizza and cookies and ice cream';
            step3Expected = {
                'numWords': 6,
                '3rdWord': 'cookies',
                'andCount': 2,
            };
            break;
        default:
            inputString = 'Coding and challenges'
            step3Expected = {
                'numWords': 3,
                '3rdWord': 'challenges',
                'andCount': 1,
            };
    }

    log("Value of inputString:");
    log('"' + inputString + '"');
    log('-----------');
    log("");

    _startedStep3 = true;

    step3(inputString);

    setTimeout(() => {
        logEndCriteria( new Map([
            ['Logged that number of words was ' + step3Expected['numWords'], _step3_loggedNumWords],
            ['Logged that third word was "' + step3Expected['3rdWord'] + '"', _step3_logged3rdWord],
            ['Logged that "and" was used ' + step3Expected['andCount'] + ' times', _step3_loggedAndCount],
        ]));
     }, 250);
}



function assertSuccessStep3(logMsg) {
    if (!_startedStep3) {
        return;
    }

    if (logMsg.includes('' + step3Expected['numWords'])) {
        _step3_loggedNumWords = true;
    }

    if (logMsg.includes(step3Expected['3rdWord'])) {
        _step3_logged3rdWord = true;
    }

    if (logMsg.includes('' + step3Expected['andCount'])) {
        _step3_loggedAndCount = true;
    }
}