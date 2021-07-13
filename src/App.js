import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    cep: {},
  }

  handleTextChange(e) {
    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cep: res,
        });
      });
  }

  render() {
    return (
      <div>
        <strong>Olá, {this.props.name}!</strong>
        <div>
          Digite o CEP: <input type='text' onChange={(e) => {this.handleTextChange(e)}}></input>
          {Object.entries(this.state.cep).map((values, key) => {
            return <h2 key={key}><strong>{values[0]}:</strong> {values[1]}</h2>
          })}
        </div>
      </div>
    )
  }
}
