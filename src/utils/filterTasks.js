export const filterTasks = (items, newObjProps1, newObjProps2) => {
    return  items.map(u => {
        if (u.todoActive.length > 0) {
            return {...u, ...newObjProps1}
        } else {
            return {...u, ...newObjProps2};
        }

    })
}
