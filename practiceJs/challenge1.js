let markWeight= 78 ,markHeight = 1.69 ;
let johnWeight = 92 , johnHeight = 1.95 ;

let markBmi , johnBmi ;
markBmi = markWeight / (markHeight * markHeight) ;
johnBmi = johnWeight / (johnHeight * johnHeight) ;

const markHigherBmi = markBmi > johnBmi ;

console.log(markBmi);
console.log(johnBmi);
console.log(markHigherBmi);