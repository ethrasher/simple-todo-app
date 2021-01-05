import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // From npm i uuid
import TodosList from "./TodosList-Class";
import Header from "./Header-Class";
import InputTodo from "./InputTodo-Class";

class TodoContainerClass extends React.Component {
  state = {
    todos: [],
    show: false
  }

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
      show: !this.state.show
    }));
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response =>
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id
          }),
        ],
      })
    )
  };

  addTodoItem = title => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    })
    .then(response =>
      this.setState({
        todos: [...this.state.todos, response.data]
      })
    )
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => this.setState({ todos: response.data }));
  }

  render() {
    return (
      <div className="container">
        <Header headerSpan={this.state.show}/>
        <InputTodo
          addTodoProps={this.addTodoItem}
        />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps = {this.delTodo}
        />
      </div>
    )
  }
}

export default TodoContainerClass
