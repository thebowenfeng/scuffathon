import styled from "styled-components"
import KeyboardKey from "./KeyboardKey";
import {useKeyboard} from "./hook";

interface Props{
    keys: string[]
}

export default function KeyboardRow(props: Props){
    const {set} = useKeyboard();

    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
    `;

    return(
        <Wrapper>
            {props.keys.map((key: string) => {
                console.log(key);
                return(
                    <KeyboardKey keyVal={key} set={set}/>
                )
            })}
        </Wrapper>
    )
}
