
function parseCount(number) {
    this.number = number;
    if (!isNaN(number)) {
        return parseFloat(number);
    } else {
        throw new Error("невалидное значение");
    }
}

function validateCount(number) {
  try {
    this.number = parseCount(number);
    if (!isNaN(number)) {
      return Number(number);
    }
  } catch (error) {
    return error;
  }
}
