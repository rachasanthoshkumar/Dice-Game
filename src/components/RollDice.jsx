

import styled from "styled-components";

const RollDice = ({setScore,currentState,rollDice}) => {


  return (
    <Container>
      <img src={`/images/dice_${currentState}.png`} alt="" onClick={rollDice} />
      <p>Click on Dice to roll</p>
      
    </Container>
  );
};

export default RollDice;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;

  img {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    margin-top: 10px;
    font-weight: 500;
  }
  @media screen and (max-width: 480px) {
    img{
      width: 200px;
      height: 200px;
    }
  }
  
  
`;
