
export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'removed':
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    }


}
