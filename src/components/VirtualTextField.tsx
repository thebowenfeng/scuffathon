import styled from "styled-components"

interface Props{
    id: string
    onClick(id: string): void
    borderColor: string
    innerText: string
}

export default function VirtualTextField(props: Props){
    const TextField = styled.div`
      display: flex;
      align-items: center;
      padding-left: 5px;
      border: ${props.borderColor} 2px solid;
      width: 200px;
      height: 30px;
      
      :hover{
        border: blue 2px solid;
      };
    `

    const Font = styled.h3`
      font-weight: normal;
    `;


    return(
        <TextField onClick={() => {props.onClick(props.id)}}>
            <Font>{props.innerText}</Font>
        </TextField>
    )
}
