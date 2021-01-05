import React, { useState, useEffect } from "react"
import TodosList from "./TodosList-Hook"
import Header from "./Header-Hook"
import InputTodo from "./InputTodo-Hook"

import axios from "axios"
import { v4 as uuidv4 } from "uuid";

const TodoContainerHook = props => {
  const [todos, setTodos] = useState([])
  const [show, setShow] = useState(false)

  const handleChange = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
    setShow(!show)
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id != id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  useEffect(() => {
    console.log("test run")
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => setTodos(response.data))
  }, []);

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  )
}

export default TodoContainerHook
