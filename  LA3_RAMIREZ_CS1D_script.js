// gradeAssignment_v2.js
// Prompt the user to enter a score
const score = parseInt(prompt("Enter your score: "), 10);
// Assign equivalent grade using ternary operators
const grade = score >= 97 ? "1.00 Excellent" :
 score >= 94 ? "1.25 Excellent" :
 score >= 91 ? "1.50 Above Average" :
 score >= 88 ? "1.75 Above Average" :
 score >= 85 ? "2.00 Average" :
 score >= 82 ? "2.25 Average" :
 score >= 79 ? "2.50 Below Average" :
 score >= 76 ? "2.75 Below Average" :
 score >= 75 ? "3.00 Below Average" :
 score >= 72 ? "4.00 Poor" :
 "5.00 Poor";
// Determine final remark using if-else-if statements
let finalRemark;
if (score >= 90) {
 finalRemark = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
 finalRemark = "ABOVE AVERAGE PASS";
} else if (score >= 75) {
 finalRemark = "LOW PASS";
} else {
 finalRemark = "FAILED, Needs Improvement";
}
// Log the output
console.log(`Your equivalent Grade is "${grade}"`);
console.log(`Final Remarks: ${finalRemark}`);
// iterationMapping.js
// Prompt user for the max limit
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "), 10);
// Iterate using double loops
for (let i = 0; i <= maxLimit; i++) {
 for (let j = 0; j <= maxLimit; j++) {
 console.log(`[${i}] [${j}] Added value is ${i + j}`);
 }
}