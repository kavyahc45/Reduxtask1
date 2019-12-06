import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

// import Task3 from './Component/Task3';
// import Task2 from './Component/Task2';
import Task4 from './Component/Task4';



// import Age from './Component/Age';

function App() {
  return (
    <div className="App">
     {/* <Age/> */}
     {/* <Task2/> */}
     {/* <Task3/> */} 
      {/* <Task4/>    */}
        <Router>
       <switch>
<Route exact path ='/' component={Task4}></Route>
       </switch>
     </Router>
    </div>
  );
}

export default App;