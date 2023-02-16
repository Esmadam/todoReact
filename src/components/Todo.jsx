import React, {useState} from "react";
import '../App.css';

function Todo({handleToggle, removeTask, todo}) {
    const [text, setText] = useState(todo.task);
    const [edited, setEdited] = useState(false);
    const [inputData, setInputData] = useState('');

    const toggleEdit = () => {
        setEdited(true);
    }

    const toggleKeyDown = (e) => {
        if(e.keyCode === 13) {
            setEdited(false);
            setText(e.target.value)
        }
    }

    const hanleChange = (e) => {
        setInputData(e.target.value)
    }

    return (
        <div className="todoItem" key={todo.id} >
            <div onChange={() => handleToggle(todo.id)}
                className="checkbox"
                >
                <input type="checkbox" onChange={() => hanleChange}  checked={todo.complete} name="checkbox" id="checkbox" />
            </div>
            <div
                className= {todo.complete ? ' todoItemContent rejected' : 'todoItemContent active'}
            >
                
                <div 
                    onDoubleClick={toggleEdit}
                >
                    {edited ? 
                        <input 
                            placeholder="wtite your task"
                            type='text'
                            onKeyDown={toggleKeyDown}
                        />
                        : 
                        text
                }
                </div>
                
            </div>
            <button className="btnClose" onClick={() => removeTask(todo.id)}>x</button>
        </div>
    )

}

export default Todo;