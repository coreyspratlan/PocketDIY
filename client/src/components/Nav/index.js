import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Nav/nav.css'
import API from '../../utils/API';
import { useStoreContext } from '../../utils/GlobalStore';

import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "../../utils/actions";

function Nav() {

  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
    API.checkUserInfo().then(response => {
      const { email } = response.data;
      dispatch({
        type: AUTH_SET_LOGGED_IN,
        data: {
          email
        }
      })
    }).catch(err => {
      dispatch({
        type: AUTH_SET_LOGGED_OUT
      })
    })
  }, []);

  const logout = () => {
    API.logout().then(() => {
      dispatch({
        type: AUTH_SET_LOGGED_OUT
      })
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      {!state.userLoggedIn ? (
        <>
          <b>Welcome Guest!</b> &nbsp;&nbsp;&nbsp;
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </>
      ) : (
          <>
            <Link className="navbar-brand" to="/members">
              Home
            </Link>
            <Link className="navbar-brand" to="/projects">
              Projects
            </Link>
            <a className="navbar-brand" onClick={() => logout()} href="/login">Logout</a>
          </>
        )
      }
    </nav>
  );
}

export default Nav;
