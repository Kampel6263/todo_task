import React from 'react'
import classes from "../List.module.css";
import menu from "../../../assets/img/menu.png";
import hide from "../../../assets/img/up.png";

const StatusName = (props) =>{
    return(
        <li className={classes.element + ' ' + classes.status}>
            <i><img src={menu} alt=""/></i>
            <span>{props.status}</span>
            <span className={classes.list__control + ' ' + classes.list__hide}>
                            <img src={hide} alt=""/>
                        </span>
        </li>
    )
}

export default StatusName