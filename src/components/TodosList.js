import React from "react";

export const TodosList = ({todos, setTodos, setEditTodo}) => {

    const elementCompleted = (todo) => (<span style={{fontSize: "23px" , color: "LimeGreen"}}>
                                <i  onClick={()=>handleCompleted(todo)}
                                    type="button" 
                                    className="fas fa-check"></i>  
                            </span>)

    const elementPending = (todo) => (<span style={{fontSize: "23px" , color: "red"}}>
                                <i  onClick={()=>handleCompleted(todo)}
                                    type="button" className="fas fa-times"></i>  
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
            todos.map(item => {
                if(item.id === id){
                    return {...item, completed: !item.completed}
                }
                return item
            }
        ))
    }

  return (
    <div className="card col-12 col-md-7 mx-auto">

      <div className="table-responsive">
        <table className="table align-middle table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody >
            {
                todos.map((todo,index) =>(
                        <tr key={todo.id}>
                            <th scope="row">{index+1}</th>
                            <td className={todo.completed ? 'text-decoration-line-through' : ''}>{todo.task}</td>
                            <td>{todo.completed ? 'Completado' : 'Pendiente'}</td>
                            <td> 
                                {todo.completed ? elementCompleted(todo): elementPending(todo)} &nbsp;

                                <span style={{fontSize: "20px" , color: "SteelBlue"}}>
                                    <i  type="button" className="fas fa-pen"
                                        onClick={()=>handleEditTodo(todo)} >
                                    </i> 
                                </span> &nbsp;

                                <span style={{fontSize: "20px" , color: "DimGray"}}>
                                    <i  type ="button" className="fas fa-trash" //si dejara solo: handleDeleteTodo(todo)  //se dispara a cada rato
                                        onClick={()=>handleDeleteTodo(todo)}> 
                                    </i> 

                                </span>
                            </td>
                        </tr>
                ))
            }
            </tbody>
            </table>

      </div>




    </div>

  );
};