import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Hr_Profile from "./Components/Hr_Dashboard/Hr_Profile";
import Interviewer_Profile from "./Components/Interviewer_Dashboard/Interviewer_Profile";
import Company_Profile from "./Components/Company_Profile";
import Hr_Requirments from "./Components/Hr_Dashboard/Hr_Requirments";
import Hr_Dashboard from "./Components/Hr_Dashboard/Hr_Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/" component={Header}></Route>
        <Route exact path="/" component={Footer}></Route>
        <Route exact path="/hr_profile" component={Hr_Profile}></Route>
        <Route exact path="/hr_dashboard" component={Hr_Dashboard}></Route>
        <Route exact path="/hr_requirment" component={Hr_Requirments}></Route>
        <Route exact path="/interviewer_profile" component={Interviewer_Profile}></Route>
        <Route exact path="/company_profile" component={Company_Profile}></Route>

      </Router>
    </div>
  );
}

export default App;
