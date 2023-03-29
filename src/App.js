import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authorization from "./component/pages/Athorization/Authorization";
import MainPage from "./component/pages/Main/MainPage";
import PageWash from "./component/pages/PageWash/PageWash";
import ParamWash from "./component/pages/ParamWash/ParamWash";
import ScheduleWash from "./component/pages/ScheduleWash/ScheduleWash";
import StockWash from "./component/pages/StockWash/StockWash";
import  "./style/App.scss";

function App() {

  return (
  
    <BrowserRouter>
     
        <div>
         
            <Routes> 
              <Route path='/' element={<Authorization />}/>
              <Route path='/MainPage' element={<MainPage />}/>
              <Route path='/PageWash' element={<PageWash />}/>
              <Route path='/ParamWash' element={<ParamWash />}/>
              <Route path='/ScheduleWash' element={<ScheduleWash />}/>
              <Route path='/StockWash' element={<StockWash />}/>
            </Routes> 
           
         
        </div>
     
   </BrowserRouter>
  );
}

export default App;
