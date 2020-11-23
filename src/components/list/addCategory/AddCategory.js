import React, {useState} from 'react'
import classes from "../List.module.css";
import add from "../../../assets/img/add.png";

const AddCategory = ({props}) =>{

    const [name, setName] = useState('');

    const handleFocus = (event) => event.target.select();



   // const generateId = (props) =>{
   //     return {
   //         ...props,
   //         listData:  props.listData.pop().id
   //     }
   // }

    // console.log(generateId(props).listData)


    return(
        <>
            {props.editMode[0].edit
                ? <li  className={classes.element + ' ' + classes.input}>
                    <form action="" onSubmit={()=>{
                        if(name.length>0 && name[0] !== ' '){

                            props.addCategoryActionCreator(name)
                            props.editModeActionCreator(false)
                            // props.chooseListActionCreator(generateId(props).listData+1)
                        } else {
                            props.editModeActionCreator(false)
                        }
                    }
                    }><input
                        onChange={e => setName(e.target.value)} unselectable={"on"} onFocus={handleFocus}  autoFocus={true}  value={name}
                        placeholder={'Input name category'} onBlur={() => {
                        if(name.length>0 && name[0] !== ' '){

                            props.addCategoryActionCreator(name)
                            props.editModeActionCreator(false)
                            // props.chooseListActionCreator(generateId(props).listData+1)
                        } else {
                            props.editModeActionCreator(false)
                        }

                    }
                    }/></form>

                </li>
                : <li onClick={() => {
                    setName('Untitled list')
                    props.editModeActionCreator(true)
                }} className={classes.element + ' ' + classes.add}>
                    <i><img src={add} alt=""/></i>
                    <span>Add categories</span></li>}
        </>
    )
}

export default AddCategory
