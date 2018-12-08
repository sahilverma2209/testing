export default(state =[], action) => {
    switch(action.type) {
        case 'ADD_EMAIL':
            var newstate = [...state, action.payload]
            return newstate
        default:
            return state
    }
}