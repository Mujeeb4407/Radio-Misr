let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  }
  else if (card >= 7 && card <= 9) {
    // do nothing

  }
  else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2));   // "1 Bet"
console.log(cc(2));   // "2 Bet"
console.log(cc("A")); // "1 Bet"