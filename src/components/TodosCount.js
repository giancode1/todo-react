import React from 'react'

export const TodosCount = ({todos}) => {

    const numTodos = todos.length
    let numTodosCompleted = 0
    let numTodosPending = 0
    
    todos.forEach(todo => {
        if(todo.completed === true){
            numTodosCompleted +=1
        }else{numTodosPending+=1}
    });

    return (
        <p>
            Tareas: <span className="badge bg-info">{numTodos}</span>  &nbsp;
            Completadas: <span className="badge bg-success">{numTodosCompleted}</span>  &nbsp;
            Pendientes: <span className="badge bg-danger">{numTodosPending}</span> &nbsp;
        </p>
    )
}
