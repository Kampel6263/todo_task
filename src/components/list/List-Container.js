import List from "./List";
import {connect} from "react-redux";
import {
    addCategoryActionCreator,
    chooseListActionCreator,
    deleteListActionCreator,
    editModeActionCreator
} from "../../redux/List-Reducer";


let mapStateToProps = (state) => {
    return {
        listData: state.list.listData,
        editMode: state.list.editMode,
        newCategory: state.list.newCategory,
        sidebarVisible: state.list.sidebarVisible

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        deleteListActionCreator: (id) => {
            dispatch(deleteListActionCreator(id));
        },
        chooseListActionCreator: (id) => {
            dispatch(chooseListActionCreator(id));
        },
        addCategoryActionCreator: (name) => {
            dispatch(addCategoryActionCreator(name))
        },
        editModeActionCreator: (status) => {
            dispatch(editModeActionCreator(status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);