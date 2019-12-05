import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateA,updateB,updateC,updateD} from '../Action/Task3Action';

class Task3 extends Component {
    render() {
        return (
            <div>
                <tyable>
                    <tr>
               <th> A:{this.props.A}</th> 
             <th> B:{this.props.B}</th>
       <th> C:{this.props.C}</th>
    <th>D:{this.props.D}</th>
    </tr>
    <tr>
            
           <td><button onClick={()=>this.props.updateA(this.props.C)}>updateA</button></td>
           <td>  <button onClick={()=>this.props.updateB(this.props.D)}>updateB</button></td>
           <td><button onClick={()=>this.props.updateC(this.props.A)}>updateC</button></td>
           <td><button onClick={()=>this.props.updateD(this.props.B)}>updateD</button></td>
            </tr>
            </tyable>
            </div>
        );
    }
}
const mapStoreToProps=(state)=>{
    const { A} = state.Task3Reducers1;
    const { B } = state.Task3Reducers2;
    const { C } = state.Task3Reducers3;
    const { D } = state.Task3Reducers4;
    return {A,B,C,D};


}
export default connect(mapStoreToProps,{updateA,updateB,updateC,updateD})(Task3);
