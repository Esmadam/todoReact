import React from "react";
import '../../App.css';
import styles from './ToDoResult.module.css';


function TodoResult ({length, all, active, completed, clearCompleted}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <span>{length} items left</span>

                <div className={styles.footer_content__filter}>
                    <button onClick={() => all()}>All</button>

                    <button onClick={() => active()}>Active</button>

                    <button onClick={() => completed()}>Completed</button>
                </div>
                
                
                <button onClick={() => clearCompleted()}>Clear completed</button>
            </div>
        </footer>
    )
}

export default TodoResult;