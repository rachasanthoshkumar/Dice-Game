import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'
const StartGame = ({ toggle }) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="" />
        </div>
        
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width:1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow-y: 0;
        margin-top: 85px;
      display: flex;
      flex-direction: column;
      img{
        width: 400px;
        height: 300px;
        margin-bottom: 35px;
      }
      .content h1{

        font-size: 65px;
      }
      .content Button{
        margin-top: 12px;
        
      }
}

`;

