let students =[
    {
        rollNo: 50,
        name: "Aashu",
        marks: 85
    },
    {
        rollNo: 17,
        name:"Radhika",
        marks: 90
    },
    {
        rollNo: 2,
        name:"Asmitha",
        marks: 80
    }
];
function display(s)
{
    console.log("Student details");
    console.log("-------------------------------------");
    for (let stud of s)
    {
        console.log(`Roll no : ${stud.rollNo}`);
        console.log(`name : ${stud.name}`);
        console.log(`Marks : ${stud.marks}`);
        console.log(`--------------------------------`);
        
    }
}
display(students);
console.log("Aashu");