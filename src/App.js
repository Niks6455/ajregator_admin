import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authorization from "./component/pages/Athorization/Authorization";
function App() {

  return (
  
    <BrowserRouter>
     
        <div className="Container">
         
            <Routes> 
              <Route path='/' element={<Authorization />}/>
            </Routes> 
           
         
        </div>
     
   </BrowserRouter>
  );
}

export default App;
