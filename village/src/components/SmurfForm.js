import React, { Component } from 'react';
import axios from "axios";
import { NavLink} from 'react-router-dom';
import './Smurf';
import './Smurf.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
const newSmurFriend = {
  name:this.state.name,
  age:this.state.age,
  height:this.state.height
}

axios 
.post('http://localhost:3333/smurfs', newSmurFriend)

.then(response => {
  console.log( response);
  this.props.addNewSmurf(response.data)
  })

  .catch(error => {
    console.error('Error:', error);
  });

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input className="inputtext"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input className="inputtext"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input className="inputtext"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button  className="button" type="submit">Add to the village</button>

           <p><NavLink to ='/'>homepage </NavLink> </p>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
