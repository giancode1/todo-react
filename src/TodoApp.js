import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import {Form} from './components/Form'
import {TodosList} from './components/TodosList'
import './App.css';

function TodoApp() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([
    { id:uuid(), task:'Lavar la ropa', completed: false},
    { id:uuid(), task:'Leer un libro', completed: true},
    { id:uuid(), task:'Cocinar pollo asado', completed: false},
    
  ])
  const [editTodo, setEditTodo] = useState(null)


  return (
    <main className="App">

      <div className="container">
        <h1 className="mb-3 mt-2">ToDo App</h1>

        <div className="row">
          <Form 
            input={input} 
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />

          <TodosList 
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />

        </div>


      </div>

    </main>
  );
}

export default TodoApp;