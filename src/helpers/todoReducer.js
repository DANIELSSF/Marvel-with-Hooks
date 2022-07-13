

export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'add':
            const stateComics = [...state, action.payload];
            const uniqueId = new Set();

            const unique = stateComics.filter(elem => {
                const isDuplicate = uniqueId.has(elem.id);
                uniqueId.add(elem.id);

                if (!isDuplicate) {
                    return true;
                }
                return false;
            });

            console.log(unique);
            return unique;

        case 'removed':
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    }


}
