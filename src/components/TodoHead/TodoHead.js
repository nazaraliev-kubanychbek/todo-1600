import React, { useState } from 'react';


const TodoHead = ({todoState, setTodoState, status}) => {
    const [text , setText]=useState("");
    const addTodo  = ()=>{
        if(text.length > 0 && status === 'all'){
            setTodoState([{
                text,
                completed: false,
                important: false,
                correct: false,
                deleted: false,
                id: Math.random()

            }, ...todoState]);

        }
        setText("")

    };
    return (
        <div className='todo-head'>
            <button onClick={()=>{
                addTodo()
            }}>+</button>

            <input
            placeholder={status === 'all' ? 'Create a new todo...'
             : 'Click "all" for a create todo'}
             disabled={status === "all" ? false : true}
            type="text" value={text}
            onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                    addTodo()
                }
            }}
            onChange={(event)=>{
                setText(event.target.value)
            }} />
        </div>
    );
}

export default TodoHead;
