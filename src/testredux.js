import {createStore} from "redux";

const initialState = {
    result:1500,
    value:[]
}
const recuder = (state = initialState,action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result:state.result,
                value:state.value  
            };
        break;
        case "SUB":
            state-=action.money;
        break;
        default:
    }
    return state;
}
const store = createStore(recuder);

store.subscribe(() => {
    console.log("Update Store",store.getState());
})

store.dispatch({
    type:"ADD",
    money:500
});
