


function pyramidToptoBottom(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= rows - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

function printPrymid(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= rows - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }
}

printPrymid(5);
pyramidToptoBottom(5);
4   