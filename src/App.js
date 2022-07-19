import "./App.css";
import styled from "styled-components";
import Calc from "./components/Calc";
function App() {
  return (
    <Wrapper>
      <Calc />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #c2c2d6;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
