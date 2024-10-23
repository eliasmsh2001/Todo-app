import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todosSlicer";

import { useRef } from "react";
import Todo from "./Todo";

const TodosContainer = () => {
  const todos = useSelector((state) => state.todos.todos);

  const filterTodos = useSelector((state) => state.todos.filter);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  const dispatch = useDispatch();
  let content;
  const dragTodo = useRef(0);
  const draggedOverTodo = useRef(0);
  if (filterTodos === "all") {
    content = todos;
  }

  if (filterTodos === "completed") {
    content = completedTodos;
  }

  if (filterTodos === "active") {
    content = activeTodos;
  }
  function onDeleteTodo(todoId) {
    dispatch(todoActions.onDeleteTodo(todoId));
  }

  function handleSortTodos() {
    dispatch(
      todoActions.onDragAndDrop({
        start: dragTodo.current,
        end: draggedOverTodo.current,
      })
    );
  }
  function onCheck(itemId) {
    dispatch(todoActions.onToggleCheckTodo(itemId));
  }
  function onClearCompleted() {
    dispatch(todoActions.onClearCompleted());
  }
  return (
    <ul className=" w-80 sm:w-96 md:w-[40vw] rounded-md overflow-hidden shadow-lg mt-1">
      {content.map((todo, index) => {
        return (
          <Todo
            key={todo.todoId}
            title={todo.todoTitle}
            onCheck={() => onCheck(todo.todoTitle)}
            checked={todo.completed}
            onDelete={() => onDeleteTodo(todo.todoId)}
            draggable
            onDragStart={() => (dragTodo.current = index)}
            onDragEnter={() => (draggedOverTodo.current = index)}
            onDragEnd={handleSortTodos}
            onDragOver={(e) => e.preventDefault()}
          />
        );
      })}
      {todos.length > 0 && (
        <li className=" w-full p-2 px-6 border-b-[1px] flex items-center justify-between  bg-contentBg text-text lg:hidden">
          <h4 className="text-xs">{activeTodos.length} items left</h4>
          <button className="text-xs cursor-pointer" onClick={onClearCompleted}>
            Clear Completed
          </button>
        </li>
      )}
    </ul>
  );
};

export default TodosContainer;
