import React , {useEffect , useState}  from 'react';
import TodoFilter from '../TodoFilter/TodoFilter';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({todoAll, setTodoAll, completedFunc, status, filterState, setTodoState, todoState , setFilterState } ) => {

    const [saveText , setSaveText ] = useState("");
    const deleteCart = (id)=>{
        setTodoState(todoState.filter((item)=>{
             return item.id!=id
        }))
    }
    const saveCorrectFunc = (id) => {
        setTodoState(todoState.map((item)=>{
            if(item.id === id){
                return {...item , text: saveText , correct: false}
            } else{
                return item
            }
        }));
    }
    const correctFunc = (id) => {
        setTodoState(todoState.map((item)=>{
            if(item.id === id){
                return {...item , correct: !item.correct}
            } else{
                return item
            }
        }));
    }
    const importantFunc = (id) => {
        setTodoState(todoState.map((item)=>{
            if(item.id === id){
                return {...item , important: !item.important}
            } else{
                return item
            }
        }));
    }
    const restoreFunc = (id) => {
        setTodoState(todoState.map((item)=>{
            if(item.id === id){
                return {...item , deleted: false}
            } else{
                return item
            }
        }));

    }
        const deleteFunc = (id)=>{
        setTodoState(todoState.map((item)=>{
            if(item.id === id){
                return {...item , deleted: true}
            } else{
                return item
            }
        }))
    }

    useEffect(() => {
        if(status == "cart"){
            setFilterState(todoState.filter((item) => {
                return item.deleted
            }))
        }

    }, [todoState]);
    return (
        <div className='todo-list'>
            {
                status != "all" ? <TodoFilter deleteCart = {deleteCart} todoState = {todoState} restoreFunc = {restoreFunc} status = {status} setTodoState = {setTodoState} filterState = {filterState} />
: todoAll.length === 0 ? <p className='empty-todo'>here is empty</p>
                : todoAll.map((item)=>{


               return    <div key={item.id} className='todo-list-item'>
                {
                    item.correct ? <>
    <input  value={saveText} onChange = {(event) => {
        setSaveText(event.target.value)
    }} type={"text"} />
    <button onClick={() => {
        saveCorrectFunc(item.id)
    }} >save</button>
    <button onClick={() => {
                        correctFunc(item.id)
                    }}>cancel</button>
                    </> : <>
                   <div className='todo-list-item-left'> <button
                    onClick={()=>{
                        completedFunc(item.id)
                    }}
                    className='todo-list-complated-btn'>
                        {item.completed ? "+" : ""}
                    </button>
                    <p>{item.text}</p></div>
                  <div className='todo-list-btns'>  <button className='todo-list-correct-btn' onClick={() => {
                        correctFunc(item.id);
                        setSaveText(item.text)
                    }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button className= {item.important ? "btn-important todo-list-important-btn" : "todo-list-important-btn"} onClick={() => {
                        importantFunc(item.id)
                    }} ><FontAwesomeIcon icon={faStar} /></button>
                    <button
                    className='todo-list-delete-btn'
                    onClick={()=>{
                        deleteFunc(item.id)
                    }}><FontAwesomeIcon icon={faTrash} /></button></div>
                    </>
                }

                   </div>
                })
            }

        </div>
    );
}

export default TodoList;
