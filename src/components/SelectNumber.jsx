import React from "react";
import styled from "styled-components";

const SelectNumber = ({ setError,error,selectedNumber, setSelectedNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  
  const selectNumberHandler=(value)=>{
    setSelectedNumber(value)
    setError("")
  }
  return (
    
    <Lauda>
      <p className="error">{error}</p>
        <div className="flex">
            {arr.map((value, i) => (
                <Box 
                isSelected = {value===selectedNumber}
                key={i} 
                onClick={() => selectNumberHandler(value)}>
                {value}
                </Box>
            ))}
        </div>
     
        
    </Lauda>
      
    
  );
};

export default SelectNumber;


const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
 
  font-size: 24px;
  font-weight: 700;
  
  background-color: ${(props)=>props.isSelected?"black":"white"};
  color: ${(props)=>props.isSelected?"white":"black"};

  @media only screen and (max-width: 480px) {
    height: 35px;
    width: 35px;
}

`;

const Lauda = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-bottom: 35px;
}
.error{
  color: red;
  font-weight: 400;
  margin-bottom: 3px;
}
@media only screen and (max-width: 480px){
  .flex{
    gap:15px
  }
}

`;
