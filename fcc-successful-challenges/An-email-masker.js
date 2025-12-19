function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  let firstChar = username[0];
  let lastChar = username[username.length - 1];
  let stars = "*".repeat(username.length - 2);
  
  let maskedEmail = firstChar + stars + lastChar;
  return maskedEmail + domain;
}
let email = "apple.pie@mail.com";
console.log(maskEmail(email));