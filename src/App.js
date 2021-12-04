import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from './Components/Signup/Signup'
import Login from "./Components/Login/Login";
import Private from './Components/Private/Private';
import Courses from "./Components/Courses/Courses";
import Task from "./Components/Task/Task";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Private" component={Private}/>
                <Route path="/Courses" component={Courses}/>
                <Route path="/Task" component={Task}/>
            </Switch>
        </Router>
    )
}

export default App