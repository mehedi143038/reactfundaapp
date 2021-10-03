import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddStudent from "./Components/AddStudent";
import Student from "./Components/Student";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Student></Student>
        </Route>
        <Route path="/add-student">
          <AddStudent></AddStudent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
