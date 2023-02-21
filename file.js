let numeralNums = [
    { arabicNum: 1000, romanNum: "M" },
    { arabicNum: 900, romanNum: "CM" },
    { arabicNum: 500, romanNum: "D" },
    { arabicNum: 400, romanNum: "CD" },
    { arabicNum: 100, romanNum: "C" },
    { arabicNum: 90, romanNum: "XC" },
    { arabicNum: 50, romanNum: "L" },
    { arabicNum: 40, romanNum: "XL" },
    { arabicNum: 10, romanNum: "X" },
    { arabicNum: 9, romanNum: "IX" },
    { arabicNum: 5, romanNum: "V" },
    { arabicNum: 4, romanNum: "IV" },
    { arabicNum: 1, romanNum: "I" }
  ];
  function convertToRoman(num) {
  let romanLetter = "";
  for(let i = 0; i < numeralNums.length; i++) {
    if(numeralNums[i].arabicNum <= num) {
      num = num - numeralNums[i].arabicNum;
      romanLetter = romanLetter + numeralNums[i].romanNum;
      i--;
    }
  }
 return romanLetter;
}
