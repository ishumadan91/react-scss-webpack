const list = (state = null, action) => {
    switch(action.type) {
        case 'SET_LIST':
            return {
                ...action.list
            }
        default:
            return state;
    }
}
export default list
