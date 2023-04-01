import styled from "styled-components"
import KeyboardRow from "./KeyboardRow";
import {useKeyboard} from "./hook";
import {useEffect} from "react";

let keys = [
    'q', 'w', 'e', 'r', 't', 'y',
    'u', 'i', 'o', 'p', 'backspace' ,'a', 's',
    'd', 'f', 'g', 'h', 'j', 'k',
    'l', 'z', 'x', 'c', 'v', 'b',
    'n', 'm', 'space'
];

function shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default function Keyboard(){
    const {useLocal} = useKeyboard();
    const signal = useLocal();
    useEffect(() => {
        keys = shuffle(keys);
    }, [signal])

    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    return (
        <Wrapper>
            <KeyboardRow keys={keys.slice(0, 11)}/>
            <KeyboardRow keys={keys.slice(11, 20)}/>
            <KeyboardRow keys={keys.slice(20, 27)}/>
            <KeyboardRow keys={keys.slice(27)}/>
        </Wrapper>
    )
}
