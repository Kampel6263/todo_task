export const updateObjectInArray = (items, itemId, objPropName, newObjProps, secondObjProps) => {
    return  items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        } else {
            return {
                ...u, ...secondObjProps
            };
        }

    })
}
