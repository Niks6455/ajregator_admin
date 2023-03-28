import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authorization from "./component/pages/Athorization/Authorization";
import MainPage from "./component/pages/Main/MainPage";
import  "./style/App.scss";
function App() {

  return (
  
    <BrowserRouter>
     
        <div>
         
            <Routes> 
              <Route path='/' element={<Authorization />}/>
              <Route path='/MainPage' element={<MainPage />}/>
            </Routes> 
           
         
        </div>
     
   </BrowserRouter>
  );
}

export default App;
