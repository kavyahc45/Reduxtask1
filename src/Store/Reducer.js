const initialState = {
    age:20
    };
    
    const reducer = (state=initialState, action) => {
    const newState = {...state};
    
    if(action.type === 'AGE_UP' && newState.age<30){
        // if(newState.age<30)
    newState.age=newState.age+action.value;
    }
    if(action.type === 'AGE_DOWN'){
        if(newState.age>15)
    newState.age=newState.age-action.value;
    }
    return newState;
    };
    
    export default reducer;