import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";



function App() {
  return (
    <>
      <TodoTitle />
      <Todo task="Learn React"
      description="Code along and take notes"
      />
      <Todo task="Finsih ASAP Frontend"
      description="3 hrs everyday"
      />
      <Todo task="Land Junior Job"
      description="Apply to jobs 2 hours everyday"
      />
      <Todo task="Earn $100k+"
      description="Live String and relax!"
      />
      {/* <Popup title="Are you 100% sure?"/> */}
    </>
  );
}

export default App;
