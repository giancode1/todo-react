import React,{useEffect} from 'react'
import { v4 as uuid } from 'uuid';

export const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    
    const updateTodo = (id, task, completed) => {
      const todosUpdated = todos.map( todo => 
        todo.id === id ? {id, task, completed} : todo 
      )
      setTodos(todosUpdated)
      setEditTodo("")
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if(!editTodo){   //si no hay editTodo haga esto:
          if(input.trim()){
              const newTodo = { id: uuid(), task: input, completed: false };
              setTodos([...todos, newTodo])
              //console.log(todos)
              setInput("")
          }
        }else{ //caso contrario
          updateTodo( editTodo.id, input,  editTodo.completed)
        }
      }

      useEffect(() => {
        if(editTodo){
          setInput(editTodo.task)
        }else{
          setInput("")
        }

      }, [setInput, editTodo])

    return (
        <form onSubmit={handleSubmit} className="col-12 col-lg-7 mx-auto">
          <div className="input-group mb-3">
            <input 
                className="form-control" 
                onChange={handleInputChange} 
                placeholder="Ingresa tarea"
                type="text" 
                value={input} 
                autoFocus
            />
            <button className="btn btn-primary" type="Submit">Agregar</button>
          </div>
        </form>
    )
}
