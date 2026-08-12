a)
npm install react-router-dom
b)

App.jsx
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
    <h1>My React Application </h1>
    <nav>
      <Link to="/"> Home </Link>
      <br/>
       <Link to="/about"> about </Link>
      <br/>
       <Link to="/contact"> Contact </Link>
      <br/>
    </nav>
    <br/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
     </BrowserRouter>
  );
}
export default App;




Home.jsx
function Home(){
    return(
        <div>
        <h1>Home Page</h1>
        <p>Welcome to our React Application</p>
    </div>

    );

}
export default Home;
About.jsx 
function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>this page contains information about our application .</p>
        </div>
    );
}
export default About;
Contact.jsx 
function Contact(){
    return(
        <div>
            <h1>Contact Page</h1>
            <p>Email: aashyada6@gmail.com</p>
        </div>
    );
}export default Contact;

c)

function Dashboard(){
    return(
        <div>
            <h1>Placement Dashvboard </h1>
            <p>Welcome to the Student placement portal .</p>
            <hr/>
            <h2>Placement Summary</h2>
            <p>Total Companies: 25</p>
            <p>Student placed : 120</p>
            <p>Highest Package ₹12 LPA</p>
        </div>
    );
}
export default Dashboard;

App.jsx
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Statistics from "./pages/Statistics";
function App() {
  return(
    <BrowserRouter>
      <h1>M . V. L. U. Student Placement Portal</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        {" | "}
        <Link to="/profile">Profile</Link>
        {" | "}
        <Link to="/jobs">Jobs</Link>
        {" | "}
        <Link to="/statistics">Statistics</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/"element={<Dashboard/>} />
        <Route path="/profile"element={<Profile/>} />
        <Route path="/jobs"element={<Jobs/>} />
        <Route path="/statistics"element={<Statistics/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

 Profile.jsx
function Profile(){
    return(
        <div>
            <h1>Student Profile</h1>
            <hr/>
            <h2>Name:Aashu Yadav</h2>
            <p>Course: B.Sc.IT</p>
            <p>CGPA: 8.90</p>
            <p>Skills: JavaScript, React ,Node.js</p>
        </div>
    );
}
export default Profile;
Jobs.jsx

function Jobs(){
    return(
        <div>
            <h1>Job Opportunities</h1>
            <hr/>
            <h2>SoftWare Developer</h2>
            <p>Company: ABC Technologies</p>
            <p>Package: ₹6 LPA</p>
            <hr/>
            <p>Web Developer </p>
            <p>Company: XYz Technologies</p>
            <p>Package: ₹6 LPA</p>
        </div>
    );
}
export default Jobs;

Statistics.jsx
function Statistics(){
    return(
        <div>
            <h1>Placement Statistics</h1>
            <hr/>
            <h2>Students Registered: 200</h2>
            <h2>Students placed: 120</h2>
            <p>placement percentage : 60%</p>
            <p>Average Package:₹5.5 LPA</p>
        </div>
    );
}
export default Statistics;

