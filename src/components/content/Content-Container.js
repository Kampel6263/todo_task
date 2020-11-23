import {connect} from "react-redux";
import Content from "../content/Content";
import {
    addTaskActionCreator,
    addToActiveActionCreator,
    addToCompletedActionCreator,
    changeThemeActionCreator,
    deleteTaskActionCreator,
    editModeAddTaskActionCreator,
    editModeEditTaskActionCreator,
    editModeThemeActionCreator,
    editTaskActionCreator, searchActionCreator,
    sidebarControlActionCreator
} from "../../redux/List-Reducer";


let mapStateToProps = (state) => {
    return {
        listData: state.list.listData,
        editModeAddTask: state.list.editModeAddTask,
        editModeEditTask: state.list.editModeEditTask,
        theme: state.list.theme,
        editModeTheme: state.list.editModeTheme,
        sidebarVisible: state.list.sidebarVisible,
        search: state.list.search
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addToCompletedActionCreator: (categoryId, taskId) => {
            dispatch(addToCompletedActionCreator(categoryId, taskId))
        },
        addToActiveActionCreator: (categoryId, taskId) => {
            dispatch(addToActiveActionCreator(categoryId, taskId))
        },
        editModeAddTaskActionCreator: (status) => {
            dispatch(editModeAddTaskActionCreator(status))
        },
        addTaskActionCreator: (name, categoryId) => {
            dispatch(addTaskActionCreator(name, categoryId))
        },
        deleteTaskActionCreator: (categoryId, taskId, isCompleted) => {
            dispatch(deleteTaskActionCreator(categoryId, taskId, isCompleted))
        },
        editTaskActionCreator: (categoryId, taskId, isCompleted, name) => {
            dispatch(editTaskActionCreator(categoryId, taskId, isCompleted, name))
        },
        editModeEditTaskActionCreator: (status, categoryId, taskId, isCompleted) => {
            dispatch(editModeEditTaskActionCreator(status, categoryId, taskId, isCompleted))
        },
        changeThemeActionCreator: (background, color, categoryId) => {
            dispatch(changeThemeActionCreator(background, color, categoryId))
        },
        editModeThemeActionCreator: (status) => {
            dispatch(editModeThemeActionCreator(status))
        },
        sidebarControlActionCreator: (status) =>{
            dispatch(sidebarControlActionCreator(status))
        },
        searchActionCreator: (name) =>{
            dispatch(searchActionCreator(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);