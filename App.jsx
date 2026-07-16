//1b
function App()
{
  return (
    <div>
    <h1> Welcome to MERN Stack Development</h1>
    <h3> Aashu Yadav </h3>
    </div>

  );
}
export default App

//practical 3b 
function App()
{
  const emp = "Aashu";
  const dept = "IT";
  const sal=50000;
  return(
<div>
  <h1> Employee Details</h1>
  <p>Name :{emp}</p>
<p> Department : {dept}</p>
<p>Salary :₹{sal}</p>
<h3> Aashu Yadav </h3>
</div>
  );
}
export default App

// practical 3 c
function App()
{
  const studentName= "Aashu";
    const totalClasses = 60;
    const attendedClasses=54;
    const attendance = (attendedClasses/totalClasses)*100;
    return(
  <div>
    <h1>Attendance Deshbord </h1>
    <hr />
  <p>Name :{studentName}</p>
  <p> total classes  : {totalClasses}</p>
  <p> class Attendence : {attendedClasses}</p>
  <p>Attendance :{attendance.toFixed(2)}%</p>
  <h3>
    Status :{attendance >= 75? "Eligible for exam ": "Not Eligible" }
  </h3>
  <h3> Aashu Yadav </h3>
  </div>
    );
  }
 export default App
// // practical  3 c
function App(){
  const maths = 85;
  const sci =90;
  function calculate(mark1,mark2) { return mark1 + mark2;}
  return(
    <div>
      <h1> Student Marks </h1>
      <hr />
      <p>Mathematic Marks : {maths}</p>
      <p>Science Marks: {sci}</p>
      <hr />
      <h2>Total Marks {calculate(maths,sci)}</h2>
      <h4> Aashu Yadav </h4>
    </div>
  );
}
export default App
//practical 3 f

function App(){
  const currentDate=new Date();
  return(
    <div>
      <h1>Current Date And Time </h1>
      <hr />
      <p>Date:{currentDate.toLocaleDateString()}</p>
      <p>Time: {currentDate.toLocaleTimeString()}</p>
      <h3>Aashu Yadav </h3>

    </div>
  );
}
export default App
3d practical
import "./App.css";
function App(){
  return(
  <div ClassName="container">
    <h1>Student Deshbord </h1>
    <hr/>
    <p>Name: Aashu Yadav</p>
    <p>Roll no: T050</p>
    <p>Course: MCA</p>
    <p> semester: V</p>
    <button>View Result</button>
  </div>
);
}
 export default App;
//3e
import Student from "./components/Student"
function App()
{
  return(
    <div>
      <h1>This is functional components practical</h1>
      <hr/>
      <Student/>
    </div>
  );
}
export default App;

import Header from "./components/header";
import Student from "./components/Student";
import Attendance from "./components/Attendance";
import Result from "./components/Result";
import Footer from "./components/Footer";
function App(){
  return (
    <div>
      <Header/>
      <Student/>
      ------------------------------------------------------------------------------------
      <Attendance/>
      ------------------------------------------------------------------------------------
      <Result/>
      <Footer/>
    </div>
  );
}
export default App;
