import React,{ useState } from 'react'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'
import { Button } from '../styled/Button'


const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentState, setCurrentState] = useState(1);
  const [score,setScore] = useState(0)
  const [error,setError] = useState("")
  const [showRules,setShowRules] = useState(false);
  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    };
    setError("")
    const randomNumber = generateRandomNumber(7, 1);
    
    setCurrentState((prev) => randomNumber);

    if(selectedNumber===randomNumber){
      setScore(prev=>prev+selectedNumber)
    }
    else{
      setScore(prev=>prev-2)
    }

    setSelectedNumber(undefined)
  };
  const resetScore =()=>{
    setScore(0)
 }


  return (
    <MainContainer>
        <div className='flex'>
            <TotalScore  score={score} setScore={setScore}/>
           
            <SelectNumber setError={setError} error={error} selectedNumber={selectedNumber}  
            setSelectedNumber={setSelectedNumber}/>
           
            
            
        </div>
        <RollDice  setScore={setScore} currentState={currentState} rollDice={rollDice}/>
        <div className="btns">
          <Button className='reset-btn' onClick={resetScore}>Reset</Button>
          <Button onClick={()=>setShowRules(prev=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
      </div>
        {showRules && <Rules/>}
    
    </MainContainer>
    
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
.flex{
    display: flex;
    align-items: end;
    justify-content: space-around;
}
.btns{
  margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .reset-btn{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.4s background-color ease-in;
    cursor: pointer;
    padding: 10px 18px;
    min-width: 220px;
    border-radius: 5px;
   
    font-size: 16px;
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
        transition: 0.4s background-color ease-in;

    }
  }

  @media only screen and (max-width: 480px){
    margin: 5px 5px;
}

`;