import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import AddEvent from './components/AddEvent/AddEvent';
import Event from './components/Event/Event';
import VolunteerList from './components/VolunteerList/VolunteerList';

export const UserContext = createContext();

function App() {
  const[loggedInUser, setLoggedInUser] = useState({isSignIn: true});
  return (
      <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
        
        <Router>
        <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
               <Login></Login>   
            </Route>
            <PrivateRoute path="/addevents">
               <AddEvent></AddEvent>  
            </PrivateRoute>
            <PrivateRoute path="/admin">
               <VolunteerList></VolunteerList> 
            </PrivateRoute>
            <PrivateRoute path="/activity/:key">
                <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/events">
              <Event></Event>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
