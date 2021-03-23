import React from 'react';
import Navbar from './components/Navbar';
import PrivateRoute from './hocs/PrivateRoute';
import NonPrivateRoute from './hocs/NonPrivateRoute';
import Home from './components/Home';
import GoogleLogin from './components/GoogleLogin/GoogleLogin';
import ContactsList from './components/Contacts/ContactsList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <NonPrivateRoute exact path="/googleLogin" component={GoogleLogin}/>
        <PrivateRoute exact path="/contactsList" component={ContactsList}/>
        <Route path="*" component={()=>"404 Not Found"} />
      </Switch>
    </Router>
  );
}

export default App;
