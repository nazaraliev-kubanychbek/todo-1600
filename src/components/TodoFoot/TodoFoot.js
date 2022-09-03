import React from 'react';

const TodoFoot = ({status, setStatus, setFilterState, todoAll, todoState , setTodoState}) => {
    const deleteCompletedFunc = ()=> {
        setTodoState(todoState.map((item) => {
            if(item.completed){
               return {...item , deleted: true}
            }else{
                return item
            }
        }))
    }
    return (
        <div className='todo-foot'>
        <p >{todoAll.length} items</p>


<div className='todo-foot-center'>
    <button
className={status==="all"?"active todo-foot-button" :"todo-foot-button" }
    onClick={()=>{
        setStatus("all")
    }}>all</button>
    <button
    className={status==="active"?"active todo-foot-button" :"todo-foot-button" }
     onClick={()=>{
        setStatus("active");
        setFilterState(todoAll.filter((item)=>{
            return !item.completed
        }))
    }}>active</button>
    <button
className={status==="completed"?"active todo-foot-button" :"todo-foot-button" }
    onClick={()=>{
        setStatus("completed");
        setFilterState(todoAll.filter((item)=>{
            return item.completed
        }))
    }}>completed</button>
    <button
className={status==="cart"?"active todo-foot-button" :"todo-foot-button" }
    onClick={()=>{
        setStatus("cart");
        setFilterState(todoState.filter((item)=>{
            return item.deleted
        }))
    }}>cart</button>
</div>

{
    status === "cart"
    ?<button
    className='todo-foot-button'
    onClick={() => {
       setTodoState(todoState.filter((item)=>{
        return !item.deleted
       }))
    }}>clear cart</button>
            :<button
className='todo-foot-button'
onClick={() => {
    deleteCompletedFunc()
}}>delete completed</button>
}
</div>);
}

export default TodoFoot;
