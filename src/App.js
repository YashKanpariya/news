import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';
// import Weather from './Weather';
import News from './News';
// import Cricapi from './Cricapi';
import './style.css';   
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Categories from './Categories';

function App() {  
  return (
    <div className="App">
     {/* <Weather/> */}
     {/* <News/> */}
     {/* <Cricapi /> */}
     <Routes>
      <Route path='/' element={<News/>} />
      <Route path='/Categories/:cate' element={<Categories/>} />
     </Routes>
    </div>
  );
}

export default App;
