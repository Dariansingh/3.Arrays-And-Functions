/* Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from 
the value in the last element of the array 
Do not use numbers to reference the last element, find it programmatically, 
ages[7] – ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. 
(works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.*/

/*var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var sum = 0
var first = ages[0]
var last = ages[ages.length - 1];

for (var number of ages){
 sum += number;
}

average = sum / ages.length

console.log(average)
    
console.log(last - first);*/







/*Create an array called names 
that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
Use a loop to iterate through the array 
and calculate the average number of letters per name. 
Use a loop to iterate through the array again 
and concatenate all the names together, separated by spaces.*/

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
var sum = 0
var counter = 0
for(let i = 0; i < names.length; i++){
    sum = sum + names[i].length
    console.log(names[i].length)
    
}
console.log(sum)

average = sum / names.length

console.log(average)

for




/*//How do you access the last element of any array?
console.log("the last element is accessed by using the length property and subtracting 1 from the length")

//How do you access the first element of any array?
console.log("the first element in an array is accessed by using index 0")*/

