var active = false;
const ActiveMenu = (state = active, action) => {
    switch (action.type) {
        case "ActiveMenu":
            state = action.activeMenu
        return  state;
        default : return state;
    }
}
export default ActiveMenu;