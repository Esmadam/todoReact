import React, {useState} from "react";
import styles from './Todo.module.css'

function Todo({handleToggle, removeTask, todo, todoArr, handleTodo}) {
    const [text, setText] = useState(todo.task);
    const [edited, setEdited] = useState(false);
    const [inputData, setInputData] = useState('');

    const [updatedArr, setUpdatedArr] = useState(todoArr)

    const toggleEdit = () => {
        setEdited(true);
    }

    const toggleKeyDown = (e) => {
        if(e.keyCode === 13) {
            setEdited(false);
            handleTodo(todo.id, text)
        }
    }

    const hanleChange = (e) => {
        setInputData(e.target.value)
    }

    return (
        <div className={styles.todoItem} key={todo.id} >
            <div onChange={() => handleToggle(todo.id)}
                className={styles.checkbox}
                >
                <input type="checkbox" onChange={() => hanleChange}  checked={todo.complete} name="checkbox" id={styles.checkbox} />
            </div>
            <div
                className= {todo.complete ? `${styles.todoItemContent} rejected` : `${styles.todoItemContent} active`}
            >
                
                <div 
                    onDoubleClick={toggleEdit}
                >
                    {edited ? 
                        <input 
                            placeholder="wtite your task"
                            type='text'
                            onKeyDown={toggleKeyDown}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        : 
                        todo.task
                }
                </div>
                
            </div>
            <button className={styles.btnClose} onClick={() => removeTask(todo.id)}>x</button>
        </div>
    )
}

export default Todo;