import classes from "../List.module.css";
import completed from "../../../assets/img/d.png";
import active from "../../../assets/img/o.png";

const CategoryName = (props) =>{

    const lengthControl = (name) =>{
        let newName = '';
        for (let i = 0; i<15; i++){
            if(name[14] === ' ' && name[i] === name[14]){
                continue;
            } else {
                newName += name[i];
            }

        }
        newName += '...';
        return newName
    }



    return (
        <>
            {props.isCompleted.map((listData, id) => (

                <li key={id} style={listData.active ? {color: listData.color + 'aa', background: listData.color + '09'} : {}} className={classes.element + ' ' + classes.tasks} onClick={() => {
                    props.chooseList(listData.id)
                }}>
                    <i><img src={listData.isCompleted ? completed : active} alt={'icon'}/></i>
                    <span className={listData.isCompleted ? classes.name : ''}>{
                        listData.name.length > 15 ? lengthControl(listData.name) : listData.name}</span>
                    <span className={classes.list__control+ ' ' + classes.list__delete} onClick={() => {
                        props.deleteList(listData.id)
                    }}>
                            &times;
                        </span>
                </li>
            ))}
        </>

    )
}

export default CategoryName
