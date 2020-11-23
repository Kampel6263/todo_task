import {updateObjectInArray} from "../utils/updateObjectInArray";
import {filterTasks} from "../utils/filterTasks";

const DELETE_LIST = "DELETE_LIST"
const CHOOSE_LIST = "CHOOSE_LIST"
const ADD_CATEGORY = "ADD_CATEGORY"
const EDIT_MODE = "EDIT_MODE"
const ADD_TO_COMPLETED = "ADD_TO_COMPLETED"
const ADD_TO_ACTIVE = "ADD_TO_ACTIVE"
const EDIT_MODE_ADD_TASK = "EDIT_MODE_ADD_TASK"
const ADD_TASK = "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const EDIT_TASK = "EDIT_TASK"
const EDIT_MODE_EDIT_TASK = "EDIT_MODE_EDIT_TASK"
const CHANGE_THEME = "CHANGE_THEME"
const EDIT_MODE_CHANGE_THEME = "EDIT_MODE_CHANGE_THEME"
const SIDEBAR_CONTROL = "SIDEBAR_CONTROL"
const SEARCH = "SEARCH"


let initialState = {
    listData: [
        {
            name: 'Front-end',
            isCompleted: true,
            id: 1,
            active: false,
            background: 'background8',
            color: '#d9d9d9',
            todoActive: [],
            todoCompleted: [
                {
                    name: 'Task 1',
                    id: 1,
                    editModeEditTask: false
                },
                {
                    name: 'Task 2',
                    id: 2,
                    editModeEditTask: false
                }
            ]
        },
        {

            name: 'React.ts',
            isCompleted: true,
            id: 2,
            active: false,
            background: 'background7',
            color: '#d9d9d9',
            todoActive: [
                {
                    name: 'Task 1',
                    id: 1,
                    editModeEditTask: false
                },
                {
                    name: 'Task 2',
                    id: 2,
                    editModeEditTask: false
                }
            ],
            todoCompleted: []
        },
        {

            name: 'JS',
            isCompleted: true,
            id: 3,
            active: false,
            background: 'background6',
            color: '#d9d9d9',
            todoActive: [
                {
                    name: 'Task 1',
                    id: 1,
                    editModeEditTask: false
                },
                {
                    name: 'Task 2',
                    id: 2,
                    editModeEditTask: false
                }
            ],
            todoCompleted: [
                {
                    name: 'Task 5',
                    id: 5,
                    editModeEditTask: false
                },
                {
                    name: 'Task 6',
                    id: 6,
                    editModeEditTask: false
                },
                {
                    name: 'Task 7',
                    id: 7,
                    editModeEditTask: false
                },
                {
                    name: 'Task 8',
                    id: 8,
                    editModeEditTask: false
                }
            ]
        }
    ],
    editMode: [
        {
            edit: false
        }
    ],
    newCategory: [
        {
            name: ''
        }
    ],
    editModeAddTask: [
        {
            edit: false
        }
    ],
    newTask: [
        {
            name: 'Untitled task'
        }
    ],
    theme: [
        {
            id: 1,
            background: 'background1',
            color: '#F08080'
        },
        {
            id: 2,
            background: 'background2',
            color: '#FF6347'
        },
        {
            id: 3,
            background: 'background3',
            color: '#F0E68C'
        },
        {
            id: 4,
            background: 'background4',
            color: '#98FB98'
        },
        {
            id: 5,
            background: 'background5',
            color: '#8A2BE2'
        },
        {
            id: 6,
            background: 'background6',
            color: '#00FF7F'
        },
        {
            id: 7,
            background: 'background7',
            color: '#0000FF'
        },
        {
            id: 8,
            background: 'background8',
            color: '#FF00FF'
        },
        {
            id: 9,
            background: 'background9',
            color: '#d9d9d9'
        }
    ],
    editModeTheme: false,
    sidebarVisible: true,
    search: ''
}


const listReduser = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_LIST:
            return {
                ...state,
                listData: [...state.listData.filter(todos => todos.id !== action.id)]
            }

        case CHOOSE_LIST:

            return {
                ...state,
                listData: updateObjectInArray(state.listData,
                    action.id,
                    'id',
                    {active: true},
                    {active: false})
            }

        case ADD_CATEGORY:

            if (state.listData.length === 0) {
                return {
                    ...state,
                    listData: [{
                        name: action.name,
                        isCompleted: false,
                        id: 1,
                        active: false,
                        background: 'background8',
                        color: '#d9d9d9',
                        todoActive: [
                            {
                                name: 'Untitled task',
                                id: 1,
                                editModeEditTask: false
                            }
                        ],
                        todoCompleted: []
                    }]
                }
            } else {
                return {
                    ...state,
                    listData: [...state.listData, {
                        name: action.name,
                        isCompleted: false,
                        id: state.listData.pop().id + 1,
                        active: false,
                        background: 'background8',
                        color: '#d9d9d9',
                        todoActive: [
                            {
                                name: 'Untitled task',
                                id: 1,
                                editModeEditTask: false
                            }
                        ],
                        todoCompleted: []
                    }]
                }
            }


        case EDIT_MODE:
            return {
                ...state,
                editMode: [{edit: action.status}]
            }

        case EDIT_MODE_ADD_TASK:
            return {
                ...state,
                editModeAddTask: [{edit: action.status}]
            }


        case ADD_TO_COMPLETED:

            let newState1 = state.listData.filter(a => a.id === action.categoryId)
            let newActive1 = newState1[0].todoActive.filter(a => a.id !== action.taskId)
            let newCompleted1 = newState1[0].todoActive.filter(a => a.id === action.taskId)
            return {
                ...state,
                listData: [...state.listData.map(u => {
                    if (u.id === action.categoryId) {

                        let status

                        if (newActive1.length === 0) {
                            status = true
                        } else {
                            status = false
                        }

                        return {
                            ...u,
                            isCompleted: status,
                            todoActive: newActive1,
                            todoCompleted: [...u.todoCompleted, newCompleted1[0]]
                        }
                    }
                    return u
                })]
            }

        case ADD_TO_ACTIVE:

            let newState2 = state.listData.filter(a => a.id === action.categoryId)
            let newActive2 = newState2[0].todoCompleted.filter(a => a.id === action.taskId)
            let newCompleted2 = newState2[0].todoCompleted.filter(a => a.id !== action.taskId)
            return {
                ...state,
                listData: [...state.listData.map(u => {
                    if (u.id === action.categoryId) {

                        let status;

                        if (newActive2.length === 0) {
                            status = true
                        } else {
                            status = false
                        }

                        return {
                            ...u,
                            isCompleted: status,
                            todoActive: [...u.todoActive, newActive2[0]],
                            todoCompleted: newCompleted2
                        }
                    }
                    return u
                })]
            }

        case ADD_TASK:


            return {
                ...state,
                listData: [...state.listData.map(u => {


                    if (u.id === action.categoryId) {

                        let newArrayActive = u.todoActive.map(a => (
                            a.id
                        ))
                        let newArrayCompleted = u.todoCompleted.map(a => (
                            a.id
                        ))


                        let createId

                        if (newArrayActive.length === 0) {
                            if (newArrayCompleted.length === 0) {
                                createId = 1
                                // console.log('1')
                            } else {
                                createId = Math.max(...newArrayCompleted) + 1
                                // console.log('2')
                            }
                        } else {
                            if (newArrayCompleted.length === 0) {
                                createId = Math.max(...newArrayActive) + 1
                                // console.log('3')
                            } else {
                                if (Math.max(...newArrayActive) >= Math.max(...newArrayCompleted)) {
                                    createId = Math.max(...newArrayActive) + 1
                                    // console.log('4')
                                } else {
                                    createId = Math.max(...newArrayCompleted) + 1
                                    // console.log('5')
                                }
                            }
                        }

                        // console.log('id',createId, '\nActive', newArrayActive,'\nCompleted', newArrayCompleted)

                        if (u.todoActive.length === 0) {
                            return {
                                ...u,
                                isCompleted: false,
                                todoActive: [{name: action.name, id: createId, editModeEditTask: false}]
                            }
                        } else {
                            return {
                                ...u,
                                isCompleted: false,
                                todoActive: [...u.todoActive, {
                                    name: action.name,
                                    id: createId,
                                    editModeEditTask: false
                                }]
                            }
                        }

                    }
                    return u
                })]
            }

        case DELETE_TASK:
            return {
                ...state,
                listData: [...state.listData.map(u => {
                    if (u.id === action.categoryId) {

                        if (action.isCompleted) {
                            return {
                                ...u,
                                todoCompleted: [...u.todoCompleted.filter(a => a.id !== action.taskId)]

                            }
                        } else {

                            if (u.todoActive.length === 1) {
                                return {
                                    ...u,
                                    isCompleted: true,
                                    todoActive: [...u.todoActive.filter(a => a.id !== action.taskId)]
                                }
                            } else {
                                return {
                                    ...u,
                                    todoActive: [...u.todoActive.filter(a => a.id !== action.taskId)]
                                }
                            }
                        }
                    }
                    return u
                })]
            }

        case EDIT_TASK:
            return {
                ...state,
                listData: [...state.listData.map(u => {
                    if (u.id === action.categoryId) {

                        if (action.isCompleted) {
                            return {
                                ...u,
                                todoCompleted: [...u.todoCompleted.map(a => {
                                    if (a.id === action.taskId) {
                                        return {
                                            ...a,
                                            name: action.name
                                        }
                                    } else {
                                        return a
                                    }
                                })]
                            }
                        } else {
                            return {
                                ...u,
                                todoActive: [...u.todoActive.map(a => {
                                    if (a.id === action.taskId) {
                                        return {
                                            ...a,
                                            name: action.name
                                        }
                                    } else {
                                        return a
                                    }
                                })]
                            }
                        }


                    } else {
                        return u
                    }
                })]
            }

        case EDIT_MODE_EDIT_TASK:
            return {
                ...state,
                listData: [...state.listData.map(u => {
                    if (u.id === action.categoryId) {

                        if (action.isCompleted) {
                            return {
                                ...u,
                                todoCompleted: [...u.todoCompleted.map(a => {
                                    if (a.id === action.taskId) {
                                        return {
                                            ...a,
                                            editModeEditTask: action.status
                                        }
                                    } else {
                                        return a
                                    }
                                })]
                            }
                        } else {
                            return {
                                ...u,
                                todoActive: [...u.todoActive.map(a => {
                                    if (a.id === action.taskId) {
                                        return {
                                            ...a,
                                            editModeEditTask: action.status
                                        }
                                    } else {
                                        return a
                                    }
                                })]
                            }
                        }


                    } else {
                        return u
                    }
                })]
            }
        case CHANGE_THEME :
            return {
                ...state,
                listData: [...state.listData.map(u=>{
                    if(action.categoryId === u.id){
                        return{
                            ...u,
                            background: action.background,
                            color: action.color
                        }
                    } else {
                        return u
                    }
                })]
            }

        case EDIT_MODE_CHANGE_THEME:
            return {
                ...state,
                editModeTheme: action.status
            }

        case SIDEBAR_CONTROL:
            return {
                ...state,
                sidebarVisible: action.status
            }

        case SEARCH:
            return {
                ...state,
                search: action.name
            }

        default:
            return {
                ...state,
                listData: filterTasks(state.listData, {isCompleted: false}, {isCompleted: true})
            }
    }

}


export let deleteListActionCreator = (id) => {

    return {
        type: DELETE_LIST, id
    }
}

export let chooseListActionCreator = (id) => {
    return {
        type: CHOOSE_LIST, id
    }
}

export let addCategoryActionCreator = (name) => {
    return {
        type: ADD_CATEGORY, name
    }
}

export let editModeActionCreator = (status) => {
    return {
        type: EDIT_MODE, status
    }
}


export let addToCompletedActionCreator = (categoryId, taskId) => {
    return {
        type: ADD_TO_COMPLETED, categoryId, taskId
    }
}

export let addToActiveActionCreator = (categoryId, taskId) => {
    return {
        type: ADD_TO_ACTIVE, categoryId, taskId
    }
}

export let editModeAddTaskActionCreator = (status) => {
    return {
        type: EDIT_MODE_ADD_TASK, status
    }
}

export let addTaskActionCreator = (name, categoryId) => {
    return {
        type: ADD_TASK, name, categoryId
    }
}

export let deleteTaskActionCreator = (categoryId, taskId, isCompleted) => {
    return {
        type: DELETE_TASK, categoryId, taskId, isCompleted
    }
}

export let editModeEditTaskActionCreator = (status, categoryId, taskId, isCompleted) => {
    return {
        type: EDIT_MODE_EDIT_TASK, status, categoryId, taskId, isCompleted
    }
}

export let editTaskActionCreator = (categoryId, taskId, isCompleted, name) => {
    return {
        type: EDIT_TASK, categoryId, taskId, isCompleted, name
    }
}

export let changeThemeActionCreator = (background, color, categoryId) => {
    return {
        type: CHANGE_THEME, background, color, categoryId
    }
}

export let editModeThemeActionCreator = (status) =>{
    return{
        type: EDIT_MODE_CHANGE_THEME, status
    }
}

export let sidebarControlActionCreator = (status) =>{
    return{
        type: SIDEBAR_CONTROL, status
    }
}

export let searchActionCreator = (name) =>{
    return{
        type: SEARCH, name
    }
}

export default listReduser;