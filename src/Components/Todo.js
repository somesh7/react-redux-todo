import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { addTodo, delTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

export const Todo = () => {

    const [inputData, setInputData] = useState();
    const list = useSelector((state) => state.perform.list)
    const dispatch = useDispatch();
    return (
        <>
           <h1 className="head_div"> ToDo </h1>
         <div className="main_div">
      
    <div className="heading_div">
    <figure>
      <figcaption> Add Your List Here  </figcaption>
    </figure>
    </div>
    <ArrowDownwardIcon className="down_div" />
    <div className="add_items"> 

    <input className="input_div" type="text" placeholder=" ✍️ Add Items... "
    value={inputData} onChange={(event) => setInputData(event.target.value)} />
    <button className="btn_div" onClick={() => dispatch(addTodo(inputData), 
       setInputData('') )}>  <AddIcon /> </button>
     
    </div>
    <div className="show_items">

       {
           list.map((elem) => {
               return (
                <div className="each_item" key={elem.id}>
        <h3 className="data_div"> {elem.data} </h3>
       
    <button className="del_btn" onClick={() => dispatch(delTodo(elem.id))}>
           <DeleteIcon />
        </button> 
        </div>
     
        
               )
    })
       }

       <div className="last_div">
        <button className="last_btn" onClick={() => dispatch(removeTodo())}> <span> DELETE ALL</span>
           
        </button>
    </div>
    </div>
    </div>
 </>

    )
}
export default Todo;