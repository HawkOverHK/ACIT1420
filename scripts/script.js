const CourseList = 
// [{ code: ["ACIT 1630", "MATH 1310", "COMM 1116"],  name: ["Database Systems", "Technical Math", "Business Communications"]}]
[{
    code:"ACIT 1630", name:"Databse Systems",
    code:"MATH 1310", name:"Technical Math",
    code: "COMM 1116", name: "Business Communications"
}]

let input;
do{
input = prompt ("Please enter a 4 digit pin");
if (input !== '1116' && input !== '1630' && input !== '1310')
{console.log('Must be a 4 Digit Class Number'),
CourseList.push({code:input, name:null})}

//prompt always returns string
//convert input to number
// console.log(Number(input)); removed from previous activity
} while(input !== '1116' && input !== '1630' && input !== '1310');


// let CourseList = {
//     code:"ACIT 1630", name:"Databse Systems",
//     code:"MATH 1310", name:"Technical Math",
//     code: "COMM 1116", name: "Business Communications"
// }
if (input === "1630" && CourseList.code.includes(input))
{
console.log ('Yes I am taking the course: ACIT 1630 Database Systems');
}
else if (input === "1116" && CourseList.code.includes(input))
{
console.log('Yes I am taking the course: COMM 1116 Business Communications');
}
else if (input === "1310" && CourseList.code.includes(input))
{
console.log('Yes I am taking the course: MATH 1310 Technical Math');
}
console.log(CourseList)


// for( 
//     let code in CourseList
// )
// {
//     if (CourseList.code.includes(input === '1116'),
//     console.log ('Yes I am taking this course')
// );
//     break;
// } original code I worked with and defunct 