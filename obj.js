let testObject = {
    key1: 40,
    key2: 491,
    key3: 991,
    key4: 819,
    key5: 138,
    key6: 481
}

function logger(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} ${value}`);
    }
}

function sum(obj) {
    let sum = 0;
    for (const [, value] of Object.entries(obj)) {
        sum += value;
    }
    console.log(sum);
}

logger(testObject);
sum(testObject);