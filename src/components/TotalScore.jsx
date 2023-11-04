import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score,setScore}) => {
  return (
    <ScoreContainer>
        <h3>{score}</h3>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
    h3{
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
    @media only screen and (max-width: 600px) {
    margin: 2px 2px;
 h3{
  font-size: 55px;
  line-height: 55px;
 }
 p{
  font-size: 15px;
  margin-bottom: 5px;
 }
}

`;