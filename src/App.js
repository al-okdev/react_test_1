import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ListPhone } from './componets/ListPhone/ListPhone';
import { Main } from './componets/Main/Main';
import { Page404 } from './componets/Page404/Page404';
import { DetailPhone } from './componets/DetailPhone/DetailPhone';



function App() {

  return (
    //<ListPhone />

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Main/> } />
    //     <Route path="phones" element={<ListPhone />} />

    //     <Route path="*" element={<Page404 />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
            <Route index element={<div>Главная страница сайта</div> } />
            <Route path="phones" element={<ListPhone />} />
            <Route path='phones/:id' element={<DetailPhone />} />

            <Route path="*" element={<Page404 />} />
          </Route>
      </Routes>
    </BrowserRouter>

  )
  
}

export default App;
