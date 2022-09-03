import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faStar, faTrash, faTrashArrowUp, faTrashCanArrowUp} from "@fortawesome/free-solid-svg-icons";

const TodoFilter = ({filterState , status, restoreFunc, deleteCart}) => {
    return (
        <>
    {
        filterState.length === 0
        ? <p className='empty-todo'>here is empty</p>
     :  filterState.map((item)=>{
            return     <div key={item.id} className='todo-list-item'>
                 <div className='todo-list-item-left'> <button
                    className='todo-list-complated-btn'>
                        {item.completed ? "+" : ""}
                    </button>
                    <p>{item.text}</p></div>
                  <div className='todo-list-btns'>
                    <button className= {item.important ? "btn-important todo-list-important-btn" : "todo-list-important-btn"} ><FontAwesomeIcon icon={faStar} /></button>
                    {  status == "cart" ? <>
                 <button
                    className='todo-list-delete-btn'
                    onClick={()=>{
                        deleteCart(item.id)
                    }}><FontAwesomeIcon icon={faTrash} /></button>
                  <button
                   className='todo-list-restore-btn'
                  onClick={() => {
                     restoreFunc(item.id)
                 }}><FontAwesomeIcon icon={faTrashArrowUp} /></button> </>: ""  }
                   </div>
                </div>
             })
    }
        </>
    );
}

export default TodoFilter;
