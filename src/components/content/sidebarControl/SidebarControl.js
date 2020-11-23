import React from 'react'
import hide from "../../../assets/img/up.png";
import classes from "../Content.module.css";

const SidebarControl = ({sidebarVisible, sidebarControlActionCreator}) =>{
    return(
        <>
            {sidebarVisible ? <img onClick={() => sidebarControlActionCreator(false)} src={hide} alt={''}
                                         className={classes.sidebar__control}/> :
                <img style={{transform: 'scale(0.7) rotate(90deg)', borderRadius: '10px 10px 0 0'}}
                     onClick={() => sidebarControlActionCreator(true)} src={hide} alt={''}
                     className={classes.sidebar__control}/>}
        </>
    )
}

export default SidebarControl