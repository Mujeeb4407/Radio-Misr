  //Random Password Generator

  function generatePassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allowedChars = '';
    let password = '';

    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    console.log(allowedChars);
    return '';
  }

  const passwordLength = 12;
  const includeUppercase = true;
  const includeLowercase = false;
  const includeNumbers = false;
  const includeSymbols = false;

const password = generatePassword(passwordLength, 
                                  includeUppercase, 
                                  includeLowercase,
                                  includeNumbers,
                                  includeSymbols)

console.log(`Generated Password: ${password}`);