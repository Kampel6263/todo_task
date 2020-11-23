import React, {useState} from "react";
import classes from './Content.module.css';
import hide from '../../assets/img/up.png'
import Tasks from "./tasks/Tasks";
import SidebarControl from "./sidebarControl/SidebarControl";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import EditTheme from "./editTheme/EditTheme";

const Content = (props) => {
    const [name, setName] = useState('');

    const handleFocus = (event) => event.target.select();

    let state = props.listData.filter(listData => listData.active)

    let stateActive
    let stateCompleted

    if (state.length > 0 && props.search.length > 0) {
        stateActive = state[0].todoActive.filter(u => {
            for (let i = 0; i < props.search.length; i++) {
                if (u.name[i].toUpperCase() !== props.search[i].toUpperCase()) {
                    return false
                }
            }
            return true
        })

        stateCompleted = state[0].todoCompleted.filter(u => {
            for (let i = 0; i < props.search.length; i++) {
                if (u.name[i].toUpperCase() !== props.search[i].toUpperCase()) {
                    return false
                }
            }
            return true
        })
    }

    if (state.length === 0) {
        if (props.sidebarVisible) {
            return (
                <div className={classes.content + ' background8'}>
                    <img onClick={() => props.sidebarControlActionCreator(false)} src={hide} alt={''}
                         className={classes.sidebar__control}/>
                </div>
            )
        } else {
            return (
                <div className={classes.content + ' background8'}>
                    <img style={{transform: 'scale(0.7) rotate(90deg)', borderRadius: '10px 10px 0 0'}}
                         onClick={() => props.sidebarControlActionCreator(true)} src={hide} alt={''}
                         className={classes.sidebar__control}/>
                </div>
            )
        }

    }

    return (

        <div className={classes.content + ' ' + state[0].background}>
            <SidebarControl sidebarVisible={props.sidebarVisible}
                            sidebarControlActionCreator={props.sidebarControlActionCreator}/>
            <Header state={state}
                    searchActionCreator={props.searchActionCreator}
                    search={props.search}
                    editModeTheme={props.editModeTheme}
                    editModeThemeActionCreator={props.editModeThemeActionCreator}
            />



            <div className={classes.task}>
                <Tasks
                    isCompleted={false}
                    handleFocus={handleFocus}
                    name={name}
                    setName={setName}
                    state={state}
                    stateStatus={stateActive}
                    addTo={props.addToCompletedActionCreator}
                    editTaskActionCreator={props.editTaskActionCreator}
                    editModeEditTaskActionCreator={props.editModeEditTaskActionCreator}
                    deleteTaskActionCreator={props.deleteTaskActionCreator}
                    statusClass={classes.active_name}
                    statusIcon={classes.uncompleted}
                />

                {stateCompleted.length > 0 ? <h2 className={classes.header_completed}>Completed</h2> : ''}
                <Tasks
                    isCompleted={true}
                    handleFocus={handleFocus}
                    name={name}
                    setName={setName}
                    state={state}
                    stateStatus={stateCompleted}
                    addTo={props.addToActiveActionCreator}
                    editTaskActionCreator={props.editTaskActionCreator}
                    editModeEditTaskActionCreator={props.editModeEditTaskActionCreator}
                    deleteTaskActionCreator={props.deleteTaskActionCreator}
                    statusClass={classes.complete_name}
                    statusIcon={classes.completed}
                />
            </div>
            <Footer
                editModeAddTask={props.editModeAddTask}
                name={name}
                setName={setName}
                handleFocus={handleFocus}
                state={state}
                addTaskActionCreator={props.addTaskActionCreator}
                editModeAddTaskActionCreator={props.editModeAddTaskActionCreator}
            />


            {props.editModeTheme ? <div className={classes.style__control}>

                <h2 style={{color: state[0].color + 'aa'}}>Color</h2>

                <EditTheme number1={0} number2={3}
                           theme={props.theme} state={state}
                           changeThemeActionCreator={props.changeThemeActionCreator}
                           changeColor={true}
                />
                <EditTheme number1={3} number2={6}
                           theme={props.theme} state={state}
                           changeThemeActionCreator={props.changeThemeActionCreator}
                           changeColor={true}/>
                <EditTheme number1={6} number2={9}
                           theme={props.theme} state={state}
                           changeThemeActionCreator={props.changeThemeActionCreator}
                           changeColor={true}/>


                <h2 style={{color: state[0].color + 'aa'}}>Background</h2>

                <EditTheme number1={0} number2={3}
                           theme={props.theme} state={state}
                           changeThemeActionCreator={props.changeThemeActionCreator}
                           changeColor={false}/>
                <EditTheme number1={3} number2={6}
                           theme={props.theme} state={state}
                           changeThemeActionCreator={props.changeThemeActionCreator}
                           changeColor={false}/>
                <EditTheme number1={6} number2={9}
                           theme={props.theme} state={state}
                           changeThemeActionCreator={props.changeThemeActionCreator}
                           changeColor={false}/>

            </div> : ''}
        </div>
    )
}

export default Content;