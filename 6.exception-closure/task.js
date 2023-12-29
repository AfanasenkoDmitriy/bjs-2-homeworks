// Задача №1

function parseCount(number) {
  if (!isNaN(number)) {
    return parseFloat(number);
  } else {
    throw new Error("Невалидное значение");
  }
}

function validateCount(number) {
    return parseCount(number);
}

// Задача №2

