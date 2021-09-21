import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoListItem } from "./TodoListItem";

export const TodosList = React.memo(() => {
    //console.log('TodosList me renderizo')
    const {todos} = useContext(TodoContext)

  return (
    <div className="card col-12 col-lg-7 mx-auto">

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
                    <TodoListItem 
                        key={todo.id}
                        index={index}
                        todo={todo}
                    />
                ))
            }
            </tbody>
            </table>

      </div>

    </div>
  )
})
