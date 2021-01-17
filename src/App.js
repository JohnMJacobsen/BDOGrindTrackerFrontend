import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Global from "./pages/Global/Global";
import Personal from "./pages/Personal/Personal";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/global" component={Global} />
          <Route path="/personal" component={Personal} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
