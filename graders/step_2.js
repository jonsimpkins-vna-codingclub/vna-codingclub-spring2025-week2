// Grading / prep methods for Step 2



function executeStep2() {
    let case1 = leftpad('pizza', 7);
    log('Case 1: leftpad("pizza", 7)')
    log('Expected:');
    log('"  pizza"');
    log('Actual:');
    log('"' + case1 + '"');
    
    if (case1 == '  pizza') {
        log('SUCCESS!');
        log('');
    } else {
        log('FAILURE');
        return;
    }

    let case2 = leftpad('foo', 7);
    log('Case 2: leftpad("foo", 7)')
    log('Expected:');
    log('"    foo"');
    log('Actual:');
    log('"' + case2 + '"');
    
    if (case2 == '    foo') {
        log('SUCCESS!');
        log('');
    } else {
        log('FAILURE');
        return;
    }

    let case3 = leftpad('foo', 3);
    log('Case 3: leftpad("foo", 3)')
    log('Expected:');
    log('"foo"');
    log('Actual:');
    log('"' + case3 + '"');
    
    if (case3 == 'foo') {
        log('SUCCESS!');
        log('');
    } else {
        log('FAILURE');
        return;
    }

    let case4 = leftpad('foo', 1);
    log('Case 4: leftpad("foo", 1)')
    log('Expected:');
    log('"ERROR"');
    log('Actual:');
    log('"' + case4 + '"');
    
    if (case4 == 'ERROR') {
        log('SUCCESS!');
        log('');
    } else {
        log('FAILURE');
        return;
    }


     success()
}



function assertSuccessStep2(logMsg) {
    // Not used
}