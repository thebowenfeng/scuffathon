import styled from "styled-components";
import MovingButton from "./components/MovingButton";
import AgeGuesser from "./components/AgeGuesser";
import FormFields from "./components/FormFields";
import PhoneNumSlider from "./components/PhoneNumSlider";
import Keyboard from "./components/VirtualKeyboard/Keyboard";
import AddressFinder from "./components/AddressFinder";

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    overflow: auto;
  `;

  const FormWarpper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
  `;

  return (
    <Wrapper>
        <h1>Worlds Best Sign Up Form</h1>
        <FormWarpper>
            <FormFields />
            <Keyboard />
            <PhoneNumSlider />
            <AgeGuesser />
            <AddressFinder />
            <MovingButton text={"Submit"}/>
        </FormWarpper>
    </Wrapper>
  );
}

export default App;
