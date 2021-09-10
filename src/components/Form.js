import React,{useEffect} from 'react'
import { v4 as uuid } from 'uuid';

export const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim()){
            const newTodo = { id: uuid(), task: input, completed: false };
            setTodos([...todos, newTodo])
            //console.log(todos)
            setInput("")
        }

      }

      useEffect(() => {
        console.log('editTodo',editTodo)

      }, [editTodo])

    return (
        <form onSubmit={handleSubmit} className="col-12 col-md-7 mx-auto">
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
