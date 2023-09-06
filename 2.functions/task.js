//задача 1

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);

  if (arr.length === 0) {
    return 0;
  }

  let avg = (min + max / arr.length).toFixed(2);

  return { min: min, max: max, avg: Number(avg) };
}

//задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((a, b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  if (arr.length === 0) {
    return 0;
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  if (arr.length === 0) {
    return 0;
  }

  return sumOddElement - sumEvenElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }

  if (arr.length === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

//задача 3

function makeWork(arrOfArr, func) {}
