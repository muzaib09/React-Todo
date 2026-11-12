import { useState } from "react";
import "../styles/todo.css";
// ======= Todo Component ======= //
const Todo = () => {
  const [inpValue, setInpValue] = useState("");
  const [list, setList] = useState([]);
  const [id, setId] = useState(null);

  // ========== Add Todo ========== //
  const addTodo = () => {
    if (id === null) {
      setList([...list, inpValue]);
      setInpValue("");
    } else {
      const updatedTodo = list.map((item, index) =>
        index === id ? inpValue : item,
      );

      setList(updatedTodo);
      setId(null);
      setInpValue("");
    }
  };

  // ========== Edit Todo ========== //
  const editTodo = (id, data) => {
    setId(id);
    setInpValue(data);
  };

  // ========== Del Todo ========== //
  const deleteTodo = (id) => {
    const updatedList = list.filter((_, index) => id !== index);
    setList(updatedList);
  };

  // ========== HTML with Js ========== //
  return (
    <>
      <h1 className="todo-heading">TODO APP</h1>

      <input
        type="text"
        placeholder="Enter your task?"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />

      <button className="add-btn" onClick={addTodo}>
        {id === null ? "Add Task +" : "Update Task"}
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => editTodo(index, item)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Del</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
