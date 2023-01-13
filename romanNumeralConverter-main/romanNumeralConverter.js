function convertToRoman(num) {
    const romanNumerals = {
      1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M', 5000: 'V̅'
    };
  
    let conversion = '';
    const decimalKeys = Object.keys(romanNumerals).reverse(); //this Object.key method returns an object into array
  
    decimalKeys.forEach(key => { //decimalKeys subtracts "num" argument from and subtracts from largest key
      while (key <= num){
        conversion += romanNumerals[key]; //converts largest integer key in line 3 into string containing and convert to Roman Numeral
        num -= key; //removes key to check for next largest integer key equal to original "num" argument
      }
    })
   return conversion;
  }
  
  console.log(convertToRoman(2));
  console.log(convertToRoman(3));
  console.log(convertToRoman(4));
  console.log(convertToRoman(5));
  console.log(convertToRoman(9));
  console.log(convertToRoman(12));
  console.log(convertToRoman(16));
  console.log(convertToRoman(29));
  console.log(convertToRoman(44));
  console.log(convertToRoman(45));
  console.log(convertToRoman(68));
  console.log(convertToRoman(83));
  console.log(convertToRoman(97));
  console.log(convertToRoman(99));
  console.log(convertToRoman(400));
  console.log(convertToRoman(500));
  console.log(convertToRoman(501));
  console.log(convertToRoman(649));
  console.log(convertToRoman(798));
  console.log(convertToRoman(891));
  console.log(convertToRoman(1000));
  console.log(convertToRoman(1004));
  console.log(convertToRoman(1006));
  console.log(convertToRoman(1023));
  console.log(convertToRoman(2014));
  console.log(convertToRoman(3999));
  console.log(convertToRoman(6000));
