import React from 'react'

export const TodosCount = React.memo(({todos}) => {
    
    //console.log('TodosCount me renderizo')

    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => todo.completed).length
    const pendingTodos = totalTodos - completedTodos
    

    return (
        <p>
            Tareas: <span className="badge bg-info">{totalTodos}</span>  &nbsp;
            Completadas: <span className="badge bg-success">{completedTodos}</span>  &nbsp;
            Pendientes: <span className="badge bg-danger">{pendingTodos}</span> &nbsp;
        </p>
    )
})
