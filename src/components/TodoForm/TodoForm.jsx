import React, {useState} from "react";
import styles from './TodoForm.module.css';

function TodoForm({addTask}) {
    const [enterInput, setEnterInput] = useState('');

    const handleChange = (e) => {
        setEnterInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(enterInput);
        setEnterInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="enter your todo"
                value={enterInput}
                onChange={handleChange}
                type="text"
                className={styles.search_bar}
            />
        </form>
    )
}

export default TodoForm