import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addition,substraction,even_increment} from '../Action/Task4Action';


class Task4 extends Component {
    render() {
        return (
            <div>
               <h1> Number: <br/></h1>
                <h2>
                <span>{this.props.number}</span>
                </h2>
                <br/>
        <button onClick={this.props.addition}>+</button>
        <button onClick={this.props.substraction}>-</button>
        <button onClick={this.props.even_increment}> if number even,increment</button> 
            </div>
        );
    }
}
const mapStateToProps=(state)=>{

    const { number } = state.Task4Reducers;
    return {number};
}

export default connect(mapStateToProps,{addition,substraction,even_increment}) (Task4);