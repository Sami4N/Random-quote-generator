import React, { Component } from 'react'
import axios from 'axios';

import './App.css'


export default class App extends Component {
  state = { advice: ''};

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
        .then((response) => { 
           const { advice } = response.data.slip;

           this.setState({ advice })
        })
        .catch((error) =>{
          console.log(error);
        });
  }
  render() {
    const { advice } = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button onClick={this.fetchAdvice} className='btn'>Next</button>
        </div>
      </div>
    )
  }
}
