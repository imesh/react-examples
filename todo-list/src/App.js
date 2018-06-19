import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      todos: [],
      title: "Todo List"
    }
  }

  addTodo(event) {
    event.preventDefault();
    let key = this.state.todos.length + 1;
    let name = this.refs.name.value;
    let completed = false;

    let todo = {
      key,
      name,
      completed
    }
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos: todos});
    this.refs.todoForm.reset();
  }

  removeTodo(key) {
    let todos = this.state.todos;
    todos.splice(key - 1, 1);
    this.setState({ todos: todos});
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="todoForm">
          <input type="text" ref="name" placeholder="The Todo Item" />
          <button onClick={this.addTodo}>Add</button>
        </form>
        <ul>
          {this.state.todos.map((todo => 
            <li key={todo.key}>
              {todo.name}
              <button onClick={this.removeTodo.bind(null, todo.key)}>Remove</button>
            </li>))}
        </ul>
      </div>
    );
  }
}

export default App;
