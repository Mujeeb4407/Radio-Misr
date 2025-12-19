let year = 1900;

function isLeapYear(divis) {
  if (divis % 400 === 0) {
    return `${divis} is a leap year.`;
  } else if (divis % 100 === 0) {
    return `${divis} is not a leap year.`;
  } else if (divis % 4 === 0) {
    return `${divis} is a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);