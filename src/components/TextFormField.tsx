import styled from "styled-components"
import VirtualTextField from "./VirtualTextField";

interface Props{
    id: string,
    onClick(id: string): void,
    fieldPrompt: string,
    isSelected: boolean,
    text: string,
}

export function TextFormField(props: Props){
    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      column-gap: 15px;
      align-items: center;
    `;

    return(
        <Wrapper>
            <h3>{props.fieldPrompt}</h3>
            <VirtualTextField
                id={props.id}
                onClick={props.onClick}
                borderColor={props.isSelected ? "blue" : "black"}
                innerText={props.text} />
        </Wrapper>
    )
}
