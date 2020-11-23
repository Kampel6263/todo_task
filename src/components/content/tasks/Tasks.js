import React from "react";
import classes from "../Content.module.css";

const Tasks = ({
                   isCompleted,
                   handleFocus,
                   name,
                   setName,
                   state,
                   stateStatus,
                   addTo,
                   editTaskActionCreator,
                   editModeEditTaskActionCreator,
                   deleteTaskActionCreator,
                   statusClass,
                   statusIcon
               }) => {

    return (
        <>
            {stateStatus.map((s, id) => (
                <li className={classes.list} key={id}>
                        <span onClick={() => {
                            addTo(state[0].id, s.id)
                        }} className={classes.icon + ' ' + statusIcon}> </span>

                    {s.editModeEditTask ? <form action="" onSubmit={()=>{
                        if(name.length !== 0 && name[0] !== ' '){
                            editTaskActionCreator(state[0].id, s.id, isCompleted, name)
                            editModeEditTaskActionCreator(false, state[0].id, s.id, isCompleted)
                        } else {
                            editTaskActionCreator(state[0].id, s.id, isCompleted, 'Untitled task')
                            editModeEditTaskActionCreator(false, state[0].id, s.id, isCompleted)
                        }
                    }
                    }><input
                        style={{color: '#ddd'}}
                        autoFocus={true}
                        onFocus={handleFocus}
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onBlur={() => {
                            if(name.length !== 0 && name[0] !== ' '){
                                editTaskActionCreator(state[0].id, s.id, isCompleted, name)
                                editModeEditTaskActionCreator(false, state[0].id, s.id, isCompleted)
                            } else {
                                editTaskActionCreator(state[0].id, s.id, isCompleted, 'Untitled task')
                                editModeEditTaskActionCreator(false, state[0].id, s.id, isCompleted)
                            }
                        }
                        }
                    /></form> : <span className={statusClass}>{s.name}</span>}
                    <span onClick={() => {
                        setName(s.name)
                        editModeEditTaskActionCreator(true, state[0].id, s.id, isCompleted)
                    }} className={classes.control + ' ' + classes.edit}> &#9998;</span>
                    <span onClick={() => {
                        deleteTaskActionCreator(state[0].id, s.id, isCompleted)
                    }} className={classes.control + ' ' + classes.delete}>&times;</span>
                </li>
            ))}
        </>
    )

}

export default Tasks