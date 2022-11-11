const CourseList = {
    code: "COMM 1116", name: "Business Communications",
    code: "ACIT 1630", name: "Database Systems",
    code: "MATH 1310", name: "Technical Math"
}



let input;
do{
input = prompt ("Please enter a 4 digit pin");
//prompt always returns string
//convert input to number
// console.log(Number(input)); removed from previous activity
} while(input !== '1116' && input !== '1630' && input !== '1310');

for( 
    let code in CourseList
)
{
    if(input === "code")
}