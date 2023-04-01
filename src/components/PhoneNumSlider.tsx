import Slider from "./Slider";
import styled from "styled-components"
import {useRef} from "react";

export default function PhoneNumSlider(){
    const phoneNumRef = useRef<HTMLParagraphElement>(null);

    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: -15px;
    `;

    return(
        <Wrapper>
            <p ref={phoneNumRef}>Phone number: </p>
            <Slider
                min={0}
                max={999999999999}
                onChange={(num) => {
                    if (phoneNumRef.current != null){
                        const areaCode = num.slice(0, 2);
                        const number = num.slice(2);
                        phoneNumRef.current.innerText = `Phone number: (+${areaCode}) ${number}`;
                    }
                }}
            />
        </Wrapper>
    )
}
