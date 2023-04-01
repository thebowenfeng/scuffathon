import styled from "styled-components"

interface Props{
    keyVal: string,
    set: Function
}

export default function KeyboardKey(props: Props){
    const KeyDiv = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-left: 5px;
      padding-right: 5px;
      min-width: 20px;
      height: 30px;
      background-color: white;
      border: black 2px solid;
      :hover{
        background-color: grey;
        cursor: pointer;
      }
    `;

    return(
        <KeyDiv onClick={() => {
            props.set(props.keyVal);
        }}>
            <p>{props.keyVal}</p>
        </KeyDiv>
    )
}
