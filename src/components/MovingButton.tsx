import styled from "styled-components";
import {useEffect, useRef} from "react";

interface Props{
    text: string;
}

let isHover = false;
let interval: NodeJS.Timer;
const mousePos = {
    x: null as null | number,
    y: null as null | number,
}

const isRight = (x: number): boolean => {
    // eslint-disable-next-line no-restricted-globals
    return x > screen.width / 2;
}

export default function MovingButton(props: Props){
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        interval = setInterval(() => {
            if(isHover && buttonRef.current != null && mousePos.x != null && mousePos.y != null){
                if(isRight(mousePos.x)){
                    buttonRef.current.style.transform += `translateX(-250px)`;
                }else{
                    buttonRef.current.style.transform += "translateX(250px)";
                }
            }
        }, 150);

        document.onmousemove = (event) => {
            mousePos.x = event.screenX;
            mousePos.y = event.screenY;
        }

        return () => {
            clearInterval(interval);
            document.onmousemove = null;
        };
    }, [])

    const Button = styled.div`
      display: flex;
      align-items: center;
      align-self: center;
      padding-left: 25px;
      padding-right: 25px;
      height: 50px;
      background-color: #61dafb;
      border-radius: 50px;
      transition: 0.3s;

      :hover {
        cursor: pointer;
        background-color: #32a7c4;
      }
    `;

    return(
        <Button
            onMouseEnter={(event) => {
                isHover = true;
            }}
            onMouseLeave={() => {
                isHover = false;
            }}
            ref={buttonRef}
            onClick={() => {alert("haha")}}
        >
            <p>{props.text}</p>
        </Button>
    )
}
