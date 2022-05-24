import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';
let userClicked = [];
let answers = [];
let count = 0;
let color=[];



export default function Quizz() {
    const [userpick, setUserPick] = React.useState();
    const [score, setScore] = React.useState();
    const[points,setPoints]=React.useState(false);
    const[check,setCheck]=React.useState(false);
    const[clickclr,setClickclr]=React.useState([{backgroundColor:""},{backgroundColor:""},{backgroundColor:""},{backgroundColor:""}])


    function handleClick(options, ans,num,answeroptions) {
        userClicked.push(options);
        color=clickclr
        answers.push(ans);
        console.log(num);
       console.log(answers);
        color[num]={backgroundColor:"green"}
        

        setClickclr(color);
        setCheck(ps => !ps);
        

    }
    function handleSubmit(){
        console.log(color)
        for (let i = 0; i <= 3; i++) {
            if (userClicked[i] === answers[i]) {
                count++;

            }
        }
        setScore(count);
        console.log(score);
        setPoints(true);

    }
    


    const datas = data.map(datas => {
        return (
            <>
                <h2>{datas.questionText}</h2>
                <button onClick={() => handleClick(datas.answerOptions[0].answerText, datas.answer,0,datas.answerOptions)} style={clickclr[0]} className='buttonOne'>{datas.answerOptions[0].answerText}</button>
                <button onclick={() => handleClick(datas.answerOptions[1].answerText, datas.answer,1,datas.answerOptions)} style={clickclr[1]} className='buttonTwo'>{datas.answerOptions[1].answerText}</button>
                <button onClick={() => handleClick(datas.answerOptions[2].answerText, datas.answer,2,datas.answerOptions) }style={clickclr[2]} className='buttonThree'>{datas.answerOptions[2].answerText}</button>
                <button onClick={() => handleClick(datas.answerOptions[3].answerText, datas.answer,3,data.answerOptions)} style={clickclr[3]} className='buttonFour'>{datas.answerOptions[3].answerText}</button>

            </>
        )
    })
    return (

        <div>
            <h1 className='topic'>Start Your Quiz Now !!</h1>
            <Link to="/"></Link>
            {datas}
            <br></br>
            <button className='sub' onClick={handleSubmit}>Submit</button>
            {points && <h1>Your Score {score}</h1>}
        </div>



    )

}