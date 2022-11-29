import { useRecoilValue } from "recoil";
import { AddTodoItem } from "./AddTodoItem";
import { TodoItem } from "./TodoItem";
import { todoListAtom } from "../recoil/atoms/todoAtom";
import "./todo.css";

/*
1. Consume Data from Atom
2. Display Todo List
3. Allow user to update, delete or mark as complete
Note: useRecoilValue is a hook that only returns the current state of date in the atom 
*/

export const TodoMain = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <div className="parent-container">
      <div>
        <AddTodoItem />
        {todoList.length > 0 && (
          <div className="todos-list">
            {todoList.map((todoItem) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
