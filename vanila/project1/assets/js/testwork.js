

// ****
// ***
// **
// *

function displayPattern(ppps) {
    for (let i = ppps; i > 0; i--) {
        let row = "";
        for(let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

displayPattern(4);