// Задача №1

function parseCount(number) {
  if (!isNaN(number)) {
    return parseFloat(number);
  } else {
    throw new Error("Невалидное значение");
  }
}

function validateCount(number) {
  try {
    return parseCount(number);
  } catch (error) {
    return error;
  }
}

// Задача №2

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }

  get perimeter() {
    const p = this.a + this.b + this.c;
    return p;
  }

  get area() {
    let s = (this.a + this.b + this.c) / 2;
    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    let trg = new Triangle(a, b, c);
    return trg;
  } catch (error) {
    let err = {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
    return err;
  }
}
