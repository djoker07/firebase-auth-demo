import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import {AuthProvider} from "./context/AuthContext"
import Home from "./views/Home"
import Login from "./views/Login"
import SignUp from "./views/Signup"
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            {/* <h1>Hello</h1> */}
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
