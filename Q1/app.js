// Question1
 let exp = "faraz" || (true + false) + 5 && " " || "true";
// Answer: faraz

 let exp1 = (1 + 2) + ++b || 5 && 0 ; 
//  for b = 3;
// Answer: 7

 let exp2 = 32 && true - ++a && " " || "true"; 
//  for a = 5;
// Answer: " "

 let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
//  Answer: faraz5

 let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
 //Answer: 32abc

 let exp5 = false || (true + true) + 15 && "" || 50;
 //Answer: 50

 let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
 //Answer: 6

 let exp7 = "faraz" || false + 10 || "true";
 //Answer: faraz

 let exp8 = 12 + (false + false) + true && null || "faraz";
 //Answer: faraz

let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
//Answer: 3

 let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
 //Answer: 6

let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
//Answer: -13