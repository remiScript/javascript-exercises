const ftoc = function(fTemp) {

  //FORUMLA:   [°C] = ([°F] − 32) × 5⁄9 
  let step1 = fTemp - 32;
  let step2 = step1 * 5; 
  let step3 = step2 / 9;
  let step4 = step3.toFixed(1);
  let step5 = parseFloat(step4);
  return step5;
};






const ctof = function(cTemp) {
  //FORMULA:   [°F] = [°C] × 9⁄5 + 32 
  let step1 = cTemp * 9;
  let step2 = step1 / 5;
  let step3 = step2 + 32;
  let step4 = step3.toFixed(1);
  let step5 = parseFloat(step4);
  return step5;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
