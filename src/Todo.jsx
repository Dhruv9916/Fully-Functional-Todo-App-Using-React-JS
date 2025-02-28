import { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return; //First Validation

    if (task.includes(inputValue)) {
      //Second Validation
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue(""); //Third Validation
  };

  const handleOnDelete = (currTask) => {
    const updatedTask = task.filter((item) => {
      return item != currTask;
    });

    setTask(updatedTask);
  };

  const handleOnClear = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate dateTime={dateTime} setDateTime={setDateTime}></TodoDate>
      </header>

      <TodoForm
        inputValue={inputValue}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      ></TodoForm>
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask, index) => {
            return (
              <TodoList
                key={index}
                currTask={currTask}
                handleOnDelete={handleOnDelete}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleOnClear}>
          Clear All
        </button>
      </section>
    </section>
  );
}
export default Todo;
