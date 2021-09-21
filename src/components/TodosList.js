import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodosList = React.memo(({todos, setTodos, setEditTodo}) => {
    //console.log('TodosList me renderizo')

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
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                    />
                ))
            }
            </tbody>
            </table>

      </div>

    </div>
  )
})
