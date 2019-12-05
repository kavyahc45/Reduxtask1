import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateA,updateB} from '../Action/Task2Action';

class Task2 extends Component {
    render(){
        return(
            
            <div>
                <table>
                <tr> 
                    <th>A:{this.props.A}</th>
                    <th>B:{this.props.B}</th>
                </tr>
               <tr>
            <td><button onClick={()=>this.props.updateA(this.props.B)}>updateA</button></td>
           <td><button onClick={()=>this.props.updateB(this.props.A)}>updateB</button></td>
           </tr>
           </table>
            </div>            

        )
    }
}

const mapStoreToProps=(state)=>{
    const { A} = state.Task2Reducer1;
    const { B } = state.Task2Reducer2;
    return {A,B};


}
export default connect(mapStoreToProps,{updateA,updateB})(Task2);