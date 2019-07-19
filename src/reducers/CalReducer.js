const initialState ={
    count: 20
}

function CalReducer(state = initialState, action){

switch(action.type){

    case "INCREMENT": 
        return { 
            count: state.count + 1
        };

    case "DECREMENT": 
        return { 
            count: state.count - 1
        };

    default:
        return state;
}
}


export default CalReducer;