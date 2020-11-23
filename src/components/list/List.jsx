import React from 'react';
import classes from './List.module.css'
import StatusName from "./statusName/StatusName";
import CategoryName from "./categoryName/CategoryName";
import AddCategory from "./addCategory/AddCategory";


const List = (props) => {
    let isCompleted = props.listData.filter(listData => listData.isCompleted).reverse()
    let isUncompleted = props.listData.filter(listData => !listData.isCompleted).reverse()

    if (props.sidebarVisible) {
        return (
            <div className={classes.sidebar}>
                <header className={classes.header}>
                    <div>ToDO</div>
                </header>
                <ul className={classes.list}>
                    <StatusName status={'Active'}/>
                    <CategoryName isCompleted={isUncompleted} deleteList={props.deleteListActionCreator}
                                  chooseList={props.chooseListActionCreator}/>
                    <StatusName status={'Completed'}/>
                    <CategoryName isCompleted={isCompleted} deleteList={props.deleteListActionCreator}
                                  chooseList={props.chooseListActionCreator}/>
                </ul>
                <ul className={classes.list}>
                    <AddCategory props={props}/>
                </ul>
            </div>
        )
    }

    return (
        <></>
    )


}

export default List;
