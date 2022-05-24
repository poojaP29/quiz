import React from 'react';
import Quiz from './Quiz';
import Quizz from './quizz';
import { Routes,Route} from 'react-router-dom';
export default function App(){
  return(
    <div>
    
      <Routes>
        <Route path="/" element= {<Quiz />} />
        <Route path="Quizz" element={<Quizz />}/>
    </Routes>
    
    </div>
   
  );
}