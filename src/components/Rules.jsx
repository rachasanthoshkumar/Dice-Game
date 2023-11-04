import React, { useState } from 'react'
import styled from 'styled-components'

const Rules = () => {

    
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 776px;
background-color: #FBF1F1;
margin: 0 auto;
padding: 20px;
margin-top: 50px;

h2{
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 12px;
}
p{
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
}
`;