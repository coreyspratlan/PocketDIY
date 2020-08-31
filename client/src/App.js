import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
import { useStoreContext } from './utils/GlobalStore';
import Footer from './components/Footer/Footer'

function App() {
  
    const [state] = useStoreContext();
   
    return (

        <Router>
            <div className="appbackground">
                <Switch>
                    {
                        !state.userLoggedIn ? (
                            // These routes are only avaialable to LOGGED OUT users
                            <>
                                <Route exact path="/" component={Login} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={Signup} />
                            </>
                        ) : (
                            // These routes are only available to LOGGED IN users
                            <>
                                <Route exact path={["/login","/signup","/"]}>
                                    {/* If you are logged in, going to the login/signup page will take you to the members page */}
                                    <Redirect to="/members" />
                                </Route>
                                <Route exact path="/members" component={Members} />
                            </>
                            )
                    }
                    <Route>
                        <Redirect to="/members" />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
