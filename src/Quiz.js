import {Link} from 'react-router-dom';

export default function Quiz(){
    return(
    <div className='design'>
        <h1 className='topics'>Welcome to quizzical</h1>
        <button className='btn'>
           <Link to= "/Quizz"> Click To Start</Link> 
        </button>
    </div>
        
        
    


    )

}