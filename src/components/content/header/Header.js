import React from 'react'
import classes from "../Content.module.css";

const Header = ({state, searchActionCreator, search, editModeTheme, editModeThemeActionCreator}) =>{
    return(
        <header style={{color: state[0].color}} className={classes.header}>
            <span>{state[0].name}</span>
            <input className={classes.search}  value={search}
                   onChange={e => searchActionCreator(e.target.value)} type="text"/>
            {search.length > 0 ? <span onClick={()=>searchActionCreator('')} className={classes.close__search}>&times;</span> : ''}

            {editModeTheme ? <span onClick={() => {
                    editModeThemeActionCreator(false)
                }} style={{color: state[0].color, fontSize: '25px'}} className={classes.menu}>&times;</span> :
                <span onClick={() => {
                    editModeThemeActionCreator(true)
                }} style={{color: state[0].color}} className={classes.menu}>&#9881;</span>}

        </header>
    )
}

export default Header