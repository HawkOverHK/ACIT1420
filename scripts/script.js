const CourseList = 
[{ code: ["ACIT 1630", "MATH 1310", "COMM 1116"],  name: ["Database Systems", "Technical Math", "Business Communications"]}]


let input;
do{
input = prompt ("Please enter a 4 digit pin");
if (input !== '1116' && input !== '1630' && input !== '1310')
{console.log('Must be a 4 Digit Class Number');
CourseList.push({code:input, name:null})}

//prompt always returns string
//convert input to number
// console.log(Number(input)); removed from previous activity
} while(input !== '1116' && input !== '1630' && input !== '1310');


if (input === "1630")
{
console.log ('Yes I am taking the course: ACIT 1630 Database Systems');
}
if (input === "1116")
{
console.log('Yes I am taking the course: COMM 1116 Business Communications');
}
if (input === "1310")
{
console.log('Yes I am taking the course: MATH 1310 Technical Math');
}
else (input !== "1630" || input !== "1116" || input !== "1310")
{
Array.push(input)
}


for( 
    let code in CourseList
)
{
    if (CourseList.code.includes(input === '1116'),
    console.log ('Yes I am taking this course')
);
    break;
}