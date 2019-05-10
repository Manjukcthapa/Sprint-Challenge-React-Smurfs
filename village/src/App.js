import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from "axios";
import {Route, NavLink} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
 
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({smurfs: response.data})
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  addNewSmurf = data => {
    this.setState({smurfs:data})
  }


  render() {
    return (
      
      <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to = '/addSmurf'>Add Smurf</NavLink>
      </nav>

      <Route 
        exact path='/' 
        render=
            {props =>
                <Smurfs {...props} smurfs={this.state.smurfs} />
            }
     />
        
        <Route 
        path='/addSmurf' 
        render=
            {props =>
                <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />
            }
            />

      </div>
    );
  }
}

export default App;
