import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nursery from './sections/Nursery_lesson/Nursery';
import Pre_Nursery from './sections/Pre_nursery_lesson/Pre_nursery';
import Primary from './sections/Primary/Primary';
import Programming from './sections/Programming_course/Programming';
import Scheme from './sections/Scheme_of_works/Scheme';

const Approutes = () => {
    return (  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Home' element={<Home />} />
      <Route path='Pre_Nursery' element={<Pre_Nursery />} />
      <Route path='Nursery' element={<Nursery />} />
      <Route path='Primary' element={<Primary />} />
      <Route path='Programming' element={<Programming />} />
      <Route path='Scheme' element={<Scheme />} />
    </Routes>
     );
}
 
export default Approutes;