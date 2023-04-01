import styled from "styled-components";
import {useEffect, useRef} from "react";

let loop: NodeJS.Timer;

function getRandomInt(max: number): number{
    return Math.floor(Math.random() * max);
}

export default function AgeGuesser(){
    const ageNumRef = useRef<HTMLParagraphElement>(null);
    const genRandomAge = (): NodeJS.Timer => {
        return setInterval(() => {
            // @ts-ignore
            ageNumRef.current.innerText = getRandomInt(100).toString();
        }, 75)
    }

    useEffect(() => {
        if (ageNumRef.current != null){
            loop = genRandomAge();
        }

        return () => {clearInterval(loop)}
    }, [ageNumRef])

    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      column-gap: 15px;
      align-items: center;
    `;

    const Button = styled.button`
      height: 25px;
    `

    return(
        <Wrapper>
            <p>Age: </p>
            <p ref={ageNumRef}>1</p>
            <Button onClick={() => {clearInterval(loop)}}>This is my age!</Button>
            <Button onClick={() => {loop = genRandomAge();}}>Nope :( Continue looking</Button>
        </Wrapper>
    )
}
