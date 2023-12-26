function parseCount(number) {
    this.number = Number(parseFloat(number).toFixed(2));
    try {
        if (!isNaN(number)) {
            return parseInt(number);
        }
    } catch (error) {
       throw "невалидное значение";
    }
    
}

function validateCount(number) {
    this.number = parseCount(number)
    if (!isNaN(number)) {
        return Number(number);
    } else {
        throw "невалидное значение";
    }
}
