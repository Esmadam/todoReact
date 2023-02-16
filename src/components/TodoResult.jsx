import React from "react";
import '../App.css';

function TodoResult ({length, all, active, completed, clearCompleted}) {
    return (
        <footer>
            <div className="footer_content">
                <span>{length} items left</span>
                <button 
                    className="all"
                    onClick={() => all()}
                    >
                        All</button>
                <button
                    className="active"
                    onClick={() => active()}
                    >
                        Active
                    </button>

                <button 
                    className="completed"
                    onClick={() => completed()}
                >
                    Completed
                </button>
                
                <button 
                    className="clear_completed"
                    onClick={() => clearCompleted()}
                    >
                        Clear completed
                </button>
            </div>
        </footer>
    )
}

export default TodoResult;