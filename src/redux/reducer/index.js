const initialState = {
    todo: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        }
        default :
            return state;
    }
}

export {reducer};
