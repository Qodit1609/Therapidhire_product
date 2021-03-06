import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Log from "./Components/Login/Log"
import Signup from "./Components/Signup/Signup";
import Hr_Profile from "./Components/Hr_Dashboard/Hr_Profile";
import Interviewer_Profile from "./Components/Interviewer_Dashboard/Interviewer_Profile";
import Hr_Requirments from "./Components/Hr_Dashboard/Hr_Requirments";
import Hr_Company from "./Components/Hr_Dashboard/Hr_Company";
import Candiadate_Salary from "./Components/Candidate/Candiadate_Salary";
import Candidate_Acedemic from "./Components/Candidate/Candidate _Acedemic";
import Candidate_Profile from "./Components/Candidate/Candidate_Profile";
import Candidate_Dashboard from "./Components/Candidate/Candidate_Dashboard";
import Interviewer_Candidate from "./Components/Interviewer_Dashboard/Interviewer_Candidate";
import Verification from "./Components/Verification";
import Interview_Dashboard from "./Components/Interviewer_Dashboard/Interview_Dashboard";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/" component={Footer}></Route>
        <Route exact path="/login" component={Log}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/hr_profile" component={Hr_Profile}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/hr_requirment" component={Hr_Requirments}></Route>
        <Route exact path="/hr_company" component={Hr_Company}></Route>
        <Route exact path="/interviewer_profile" component={Interviewer_Profile}></Route>
        <Route exact path="/interviewer_candidate" component={Interviewer_Candidate}></Route>
        <Route exact path="/interviewer_dashboard" component={Interview_Dashboard}></Route>
        <Route exact path="/candidate_salary" component={Candiadate_Salary}></Route>
        <Route exact path="/candidate_acedemic" component={Candidate_Acedemic}></Route>
        <Route exact path="/candidate_profile" component={Candidate_Profile}></Route>
        <Route exact path="/candidate_dashboard" component={Candidate_Dashboard}></Route>
        <Route exact path="/verification" component={Verification}></Route>
      </Router>
    </div>
  );
}

export default App;
