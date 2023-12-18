function parseCount(number) {
  try {
    this.number = Number.parseFloat(number);
    return number;
  } catch (error) {
    if (number === NaN) {
      return new Error("Невалидное значение");
    }
  } finally {
    return Math.floor(number);
  }
}

function validateCount(number) {
  this.number = number;
  let result = 0;
  try {
    result = parseCount(number);
  } catch (error) {
    if (result === NaN) {
      return new Error("Невалидное значение");
    }
  } finally {
    return result.toFixed(2);
  }
}
