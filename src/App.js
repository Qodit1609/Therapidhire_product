import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/" component={Header}></Route>
      </Router>
    </div>
  );
}

export default App;
