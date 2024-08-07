let isStudent = true;
let hasValidID = false;
let hasParentalConsent = false;

let isEligibleForAdmission = (isStudent && hasValidID) || hasParentalConsent;

console.log("Is eligible for admission:", isEligibleForAdmission);
