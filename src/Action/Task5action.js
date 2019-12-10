import *as ActionTypes from './types';

export function handleChange(event){
return function(dispatch)
{
dispatch({type:'SEND',payload:event.target});
}
}
export function check(){
return function(dispatch)
{
dispatch({type:'CHECK'});
}
}