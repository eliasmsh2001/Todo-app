import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todosSlicer";

const ContainerActions = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filterTodos = useSelector((state) => state.todos.filter);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const dispatch = useDispatch();

  function onFilter(type) {
    if (type === "all") {
      dispatch(todoActions.onShowAll());
    }
    if (type === "completed") {
      dispatch(todoActions.onShowCompleted());
    }
    if (type === "active") {
      dispatch(todoActions.onShowActive());
    }
  }
  function onClearCompleted() {
    dispatch(todoActions.onClearCompleted());
  }

  return (
    <>
      {todos.length > 0 && (
        <div className="w-64 sm:w-[40vw] h-12 bg-contentBg flex items-center justify-center my-4 rounded-md shadow-sm text-text relative">
          <h4 className="text-xs absolute left-5 hidden lg:block">
            {activeTodos.length} items left
          </h4>
          <button
            id={filterTodos === "all" && "activeFilter"}
            onClick={() => onFilter("all")}
            className="text-sm font-normal  mx-2 hover:text-mainText"
          >
            All
          </button>
          <button
            id={filterTodos === "active" && "activeFilter"}
            onClick={() => onFilter("active")}
            className="text-sm font-normal  mx-2 hover:text-mainText"
          >
            Active
          </button>
          <button
            id={filterTodos === "completed" && "activeFilter"}
            onClick={() => onFilter("completed")}
            className="text-sm font-normal  mx-2 hover:text-mainText"
          >
            Completed
          </button>
          <button
            className="text-xs cursor-pointer absolute right-5 hidden lg:block hover:text-mainText"
            onClick={onClearCompleted}
          >
            Clear Completed
          </button>
        </div>
      )}
    </>
  );
};

export default ContainerActions;
