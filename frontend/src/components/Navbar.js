import React, {useContext} from 'react';
import {Link, withRouter } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import * as AuthService from '../services/AuthService';
import {AuthContext} from '../context/AuthContext';

const Navbar = (props) =>{

    const {isAuthenticated, user, roleId, setIsAuthenticated, setUser, setRoleId} = useContext(AuthContext);

    const logout = ()=>{
        AuthService.logout().then(() =>{
            setUser(null);
            setIsAuthenticated(false);
            props.history.push('/googleLogin');
        })
    }

    const unauthenticatedNavbar = () =>{
        return(
            <>
                <Link to='/googleLogin'>
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>
            </>
        )
    }

    const authenticatedNavbar = () =>{
        return(
            <>
                <Link to='/contactsList'>
                    <li className="nav-item nav-link">
                        Contacts
                    </li>
                </Link>

                <div className="float-right">
                    <GoogleLogout
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                        >
                    </GoogleLogout>
                </div>
            </>
        )
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <div className ="navbar-brand">HIPAA</div>
                </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        { !isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);