import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import {Form} from './components/Form'
import {TodosList} from './components/TodosList'
import { TodosCount } from './components/TodosCount'
import { Footer } from './components/Footer'
import useLocalStorage  from './hooks/useLocalStorage'
import './App.css'
import { TodoContext } from './context/TodoContext';

function TodoApp() {

  const [todos, setTodos] = useLocalStorage("todos", [
    { id:uuid(), task:'Lavar la ropa', completed: false},
    { id:uuid(), task:'Leer un libro', completed: true},
    { id:uuid(), task:'Cocinar pollo con verduras', completed: false},
  ])
  
  const [input, setInput] = useState('')

  const [editTodo, setEditTodo] = useState(null)

  return (

    <TodoContext.Provider value={{ todos, setTodos, input, setInput, editTodo, setEditTodo }}>
       <main className="App">
        <div className="container">
          <h1 className="mb-3 mt-2">ToDo App</h1>

          <div className="row">
            <Form />
            <TodosCount />
            <TodosList  />
            <Footer />
          </div>

        </div>
      </main>
    </TodoContext.Provider>

  )
}

export default TodoApp;
