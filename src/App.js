import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import CommanRoute from "./routes/CommanRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  // const user = useSelector(state => state.user.isLoggedIn)
// console.log(user)
  return (
    <div className="container mt-3">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/signup" />
        </Route>
        <Route path="/signup">
          <CommanRoute>
            <Signup/>
          </CommanRoute>
        </Route>
        <Route path="/home">
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
