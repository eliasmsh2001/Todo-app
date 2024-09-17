import { useRef } from "react";

import { todoActions } from "./store/todosSlicer";
import { useDispatch } from "react-redux";
import TodosContainer from "./components/TodosContainer";
import ContainerActions from "./components/ContainerActions";
import Header from "./components/Header";

function App() {
  const value = useRef();
  const dispatch = useDispatch();

  function onSubmitTodo(e) {
    e.preventDefault();
    dispatch(
      todoActions.onAddTodo({
        title: value.current.value,
        completed: false,
      })
    );
    value.current.value = "";
  }

  return (
    <>
      <main className="min-h-screen w-screen relative flex justify-center flex-col items-center">
        <Header />
        <form onSubmit={onSubmitTodo} className="block">
          <div className="md:my-6 w-64 sm:w-[40vw] bg-contentBg min-h-12 rounded-md flex items-center justify-start">
            <span className="size-5 border-[1px] rounded-full bg-transparent border-border mx-3 "></span>
            <input
              ref={value}
              type="text"
              placeholder="Create a new todo..."
              className="min-h-full focus:outline-none w-full text-xs font-semibold py-4 bg-transparent text-mainText"
            />
          </div>
        </form>
        <TodosContainer />
        <ContainerActions />
      </main>
      <h1 className="w-full text-center my-6 font-bold text-text text-xs md:teaxt-base">
        Drag and drop to reorder list
      </h1>
    </>
  );
}

export default App;
