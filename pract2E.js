let student ={
 rollNo: 50,
 Name:"Aashu ",
 marks:86
};
console.log("original object:");
console.log(student);

//accessing properties 
console.log("/nAccessing properties:");
console.log("name",student.Name);
console.log("Marks",student.marks);

// updating a property
student.marks=90;
console.log("/nAfter updating marks:");
console.log(student);

// adding a new property
student.city ="mumbai";
console.log("\n adding a new property:");
console.log(student);

//delete a property
delete student.rollNo;
console.log("\ndelete a property");
console.log(student);
console.log("Aashu");