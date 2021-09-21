import React from 'react'

export const TodoListItem = React.memo(({todo, index, todos, setTodos, setEditTodo}) => {
    //console.log('TodosListItem me renderizo')

    const elementCompleted = (todo) => (<span style={{fontSize: "23px" , color: "LimeGreen"}}>
                                        <i  onClick={ () => handleCompleted(todo) }
                                            type="button" 
                                            className="fas fa-check fa-fw"></i>  
                                        </span>)

    const elementPending = (todo) => (<span style={{fontSize: "23px" , color: "red"}}>
                                    <i  onClick={ () => handleCompleted(todo) }
                                         type="button" className="fas fa-times fa-fw"></i>  
                                </span>)

    const handleDeleteTodo = ({id}) => {
        setTodos(todos.filter(todo => todo.id !==id ))
    }

    const handleEditTodo = ({id}) => {
        const findTodo = todos.find(todo => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleCompleted = ({id}) => {
        setTodos(
            todos.map(item => 
                (item.id === id)
                   ? {...item, completed: !item.completed}
                   : item 
        ))
    }

    return (
        <tr key={todo.id}>
            <th scope="row">{index+1}</th>
            <td className={todo.completed ? 'text-decoration-line-through' : ''}>{todo.task}</td>
            <td>{todo.completed ? 'Completado' : 'Pendiente '}</td>
            
            <td> 
                {todo.completed ? elementCompleted(todo): elementPending(todo)} 

                <span style={{fontSize: "20px" , color: "SteelBlue"}}>
                    <i  type="button" className="fas fa-pen fa-fw"
                        onClick={ ()=>handleEditTodo(todo) } >
                    </i> 
                </span> 

                <span style={{fontSize: "20px" , color: "DimGray"}}>
                    <i  type ="button" className="fas fa-trash fa-fw" //si dejara solo: handleDeleteTodo(todo)  //se dispara a cada rato
                        onClick={ ()=>handleDeleteTodo(todo) }> 
                    </i> 
                </span>
            </td>

        </tr>
    )
})
