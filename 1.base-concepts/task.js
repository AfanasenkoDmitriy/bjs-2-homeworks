"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr[0] = -b / (2 * a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;

  let bodyCredit = amount - contribution;

  let monthPayment = bodyCredit * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}

calculateTotalMortgage(10, 0, 50000, 12);


