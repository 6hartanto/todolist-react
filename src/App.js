import React, { Component } from 'react';
import './App.css';
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: '',
      lists: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      lists: [...this.state.lists, this.state.todoList],
      todoList: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoList: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoList} onChange={this.handleChange}></input>
          <button>Add</button>
        </form>

        <List lists={this.state.lists} />
      </div>
    )
  }
}

export default App;
