import React, { useState } from "react";
import styled from "styled-components";
const Calc = () => {
  const [displayValue, SetDisplayValue] = useState("");

  const onButtonClick = (e) => {
    SetDisplayValue(displayValue + e.target.innerText);
    if (e.target.innerText === "C") {
      SetDisplayValue("");
    } else if (e.target.innerText === "del") {
      const remove = String(displayValue).slice(0, -1);
      SetDisplayValue(Number(remove));
    } else if (e.target.innerText === "=") {
      SetDisplayValue(eval(displayValue));
    } else if (displayValue[0] == 0) {
      SetDisplayValue(displayValue[1]);
    }
  };
  return (
    <CalcBox>
      <CalcDisplay>{displayValue}</CalcDisplay>
      <CalcButtons>
        <Button onClick={onButtonClick}>C</Button>
        <Button></Button>
        <Button onClick={onButtonClick}>%</Button>
        <Button onClick={onButtonClick} style={{ backgroundColor: "#5d4cb3" }}>
          /
        </Button>
      </CalcButtons>
      <CalcButtons>
        <Button onClick={onButtonClick}>7</Button>
        <Button onClick={onButtonClick}>8</Button>
        <Button onClick={onButtonClick}>9</Button>
        <Button onClick={onButtonClick} style={{ backgroundColor: "#5d4cb3" }}>
          *
        </Button>
      </CalcButtons>
      <CalcButtons>
        <Button onClick={onButtonClick}>4</Button>
        <Button onClick={onButtonClick}>5</Button>
        <Button onClick={onButtonClick}>6</Button>
        <Button onClick={onButtonClick} style={{ backgroundColor: "#5d4cb3" }}>
          -
        </Button>
      </CalcButtons>
      <CalcButtons>
        <Button onClick={onButtonClick}>1</Button>
        <Button onClick={onButtonClick}>2</Button>
        <Button onClick={onButtonClick}>3</Button>
        <Button onClick={onButtonClick} style={{ backgroundColor: "#5d4cb3" }}>
          +
        </Button>
      </CalcButtons>
      <CalcButtons>
        <Button onClick={onButtonClick}>0</Button>
        <Button onClick={onButtonClick}>.</Button>
        <Button onClick={onButtonClick}>del</Button>
        <Button
          onClick={onButtonClick}
          id="equal"
          style={{ backgroundColor: "#fcc406" }}
        >
          =
        </Button>
      </CalcButtons>
    </CalcBox>
  );
};

const CalcBox = styled.div`
  width: 30%;
  padding: 10px;
`;

const CalcDisplay = styled.div`
  background-color: white;
  height: 5vh;
  font-size: 25px;
  padding: 15px;
  color: black;
`;
const CalcButtons = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.div`
  width: 25%;
  height: 10vh;
  border-right: 1px solid rgba(255, 255, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  background-color: #1e2326;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

export default Calc;
