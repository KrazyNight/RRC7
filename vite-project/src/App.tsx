import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";
// Below: this import allows 'hooks' to be used in react
import { useState } from "react";






function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  // By default we want the Popup to have 'false' by 'default'
  //let popupOpen = false
  // useState(false) 
  // Above: this will return an array with two values, so use array destructuring [], to directly grab those two values out of it 
  //
  // the 2nd value, setPopupOpen, is fuction used to change the value of the 1st variable, popupOpen, 
  // when the btn is clicked, the false turns into true. 

  // const [state, setState] = useState(false)
  // setSate: Function that changes the 'state'
  // fasle: is the dafault value





  return (
    <>
      <TodoTitle />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}
        />
        <button onClick={() => setPopupOpen(true)}>Add to do </button>
      </div>
      <Todo task="Learn React"
      />
      <Todo task="Finsih ASAP Frontend"
      />
      <Todo task="Land Junior Job"
      />
      <Todo task="Earn $100k+"
      />
      { popupOpen && <Popup title="Are you 100% sure?"/> }
      {/*{ popupOpen ? <Popup title="Are you 100% sure?"/> : null } */}
      {/* { popupOpen && <Popup title="Are you 100% sure?"/> } */}
      {/* Above: they do the same thing */}

    </>
  );
}

export default App;
