const reducers = (state, action) => {
    switch (action.type) {
        case "UPDATE_ACTIVE_MENU":
            return {
                ...state,
                active_menu: action.active_menu,
            };
    }
};
export default reducers;
