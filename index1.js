let a=1;
b=2;

console.log(a<3&&b<3); 
console.log(a>3&&b<3);
console.log(a>3||b<3);
console.log(!(a<3));
console.log(!(a<3)||!(b>3));
// Ternary operation
let age=17;
const isAdult = (age>20)? "Yes" : "No";
console.log(isAdult)
// Bitwise operations
console.log(5 << 1); 
console.log(5<<2) ;
console.log(5<<3) ;
console.log(40 >> 1);
console.log(40 >> 2);
console.log(40 >> 3);

// The typeof Operator
let name = "David Nwanosike";
console.log(typeof(name));
const happened = false;
console.log(typeof(happened));
let sum = 10 + 10;
console.log(typeof(sum));
console.log(typeof(33));

//Decisions- if-else statement
let minimumVotingAge = 18;
age = 17;
// This code should output 'Not Eligible to vote'
if (age < minimumVotingAge) {
    console.log("Not eligible to vote");
}
else {
    console.log("Eligible to vote");
}
// This switch statements should print out Pre-teen

let ageRange = "below 13";
switch (ageRange){
    case "below 1":
    console.log("Infant");
    break;
    case "below 13":
    console.log("Pre-teen");
    break;
    case "below 20":
    console.log("Teenager");
    break:
    default:
        console.log("Adult");
}

const dayOftheWeek = 1;
switch(dayOftheWeek) {
    case 1:
    console.log("Sunday");
    break;
    case 2:
    console.log("Monday");
    break;
    case 3: 
    console.log("Tuesday");
    break;
    case 4:
    console.log("Wednesday");
    break;
    console.log("Thursday");
    break;
    case 5:
    
}



// The for-loop statement

for(let i =0; i<11; i++ ) {
    console.log("Current counter =="+i);
}

// The for-loop with 'break' statement
for (let c = 1; c < 11; c++) {
    if (c==7) break;
    console.log("The current counter before break=="+c);
}

// The for-loop with 'continue' statement
for (let j = 1; j < 11; j++) {
    if (j == 7) continue;
    console.log("The curren counter with continue =="+j);
}
