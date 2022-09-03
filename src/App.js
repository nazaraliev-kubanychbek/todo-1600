import { useState , useEffect } from "react";
import TodoFoot from "./components/TodoFoot/TodoFoot";
import TodoHead from "./components/TodoHead/TodoHead";
import TodoList from "./components/TodoList/TodoList";
import "./style.css";


function App() {
  const [todoState, setTodoState ] = useState(localStorage.getItem("todoState") ? JSON.parse(localStorage.getItem("todoState")): []);
  const [filterState, setFilterState] = useState([]);
  const [status , setStatus] = useState("all");
  const [todoAll , setTodoAll] = useState([]);
  const completedFunc = (id )=>{
    setTodoState(todoState.map((item)=>{
      if(id === item.id){
        return {...item, completed: !item.completed}
      }else{
        return item
      }
    }))
  }
  useEffect(() => {
    setTodoAll(todoState.filter((item)=>{
      return !item.deleted
    }));
    localStorage.setItem("todoState", JSON.stringify(todoState));
  }, [todoState]);
  return (
    <div className="bg">

      <div className="todo">
        <h1 className="title">TODO</h1>
        <TodoHead status={status} todoState = {todoState}  setTodoState = {setTodoState} />
        <TodoList status = {status} todoAll={todoAll} setTodoAll={setTodoAll} completedFunc = {completedFunc} filterState={filterState} setTodoState ={setTodoState} todoState = {todoState} setFilterState = {setFilterState} />
        <TodoFoot
todoState={todoState}
        todoAll={todoAll} setTodoAll={setTodoAll}
        status = {status} setStatus = {setStatus} setFilterState = {setFilterState}  setTodoState = {setTodoState}  />

      </div>

    </div>
  );
}

export default App;
