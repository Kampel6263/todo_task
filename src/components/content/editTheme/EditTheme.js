import React from 'react'
import classes from "../Content.module.css";

const EditTheme = ({number1, number2, theme, state, changeThemeActionCreator, changeColor}) => {
    return (
        <>
            <div> {theme.map((u, id) => {
                if (u.id > number1 && u.id <= number2) {
                    return (
                        <span key={id} onClick={() => {
                            changeThemeActionCreator(changeColor? state[0].background: u.background,
                                changeColor? u.color : state[0].color,
                                state[0].id)
                        }} style={changeColor ? u.color === state[0].color ? {
                            borderColor: '#fff',
                            background: u.color
                        } : {background: u.color} : u.background === state[0].background ? {borderColor: state[0].color} : {}}
                              className={changeColor ? classes.background__change: classes.background__change + ' ' + u.background}>&#4448;</span>
                    )
                }
            })}</div>
        </>
    )
}

export default EditTheme