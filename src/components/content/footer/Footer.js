import React from 'react'
import classes from "../Content.module.css";
import active from "../../../assets/img/o.png";
import addTask from "../../../assets/img/add.png";

const Footer = ({
                    editModeAddTask,
                    name,
                    setName,
                    handleFocus,
                    addTaskActionCreator,
                    state,
                    editModeAddTaskActionCreator
                }) => {
    return (
        <div className={classes.task + ' ' + classes.footer}>
            {editModeAddTask[0].edit
                ? <li className={classes.list + ' ' + classes.footer}>
                    <img className={classes.add_icon} src={active}
                         alt=""/>
                    <form action="" onSubmit={()=>{
                        if (name.length > 0 && name[0] !== ' ') {
                            addTaskActionCreator(name, state[0].id)
                            editModeAddTaskActionCreator(false)
                        } else {
                            editModeAddTaskActionCreator(false)
                        }
                    }
                    }><input style={{color: '#ddd', width: '100%'}} value={name} autoFocus={true} onFocus={handleFocus}
                                           onChange={e => setName(e.target.value)} onBlur={() => {
                        if (name.length > 0 && name[0] !== ' ') {
                            addTaskActionCreator(name, state[0].id)
                            editModeAddTaskActionCreator(false)
                        } else {
                            editModeAddTaskActionCreator(false)
                        }

                    }
                    } type="text"/></form></li>
                : <li onClick={() => {
                    setName('Untitled task')
                    editModeAddTaskActionCreator(true)
                }} className={classes.list + ' ' + classes.footer_list}>
                    <img className={classes.add_icon} src={addTask} alt=""/>
                    <span className={classes.active_name}>Add task</span>
                </li>}
        </div>
    )
}

export default Footer