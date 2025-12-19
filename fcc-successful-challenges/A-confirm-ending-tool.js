function confirmEnding(str, target) {
  let ending = str.slice(-target.length);
  if(ending === target) {
    return true;
  }
  else{
    return false;
  }
}
console.log(confirmEnding("hello world", "world"));