import {TextFormField} from "./TextFormField";
import {useEffect, useState} from "react";
import {useKeyboard} from "./VirtualKeyboard/hook";

export default function FormFields(){
    const [selected, setSelected] = useState<string>("");
    const [text, setText] = useState<Record<string, string>>({
        username: "",
        password: ""
    });
    const {get, useLocal} = useKeyboard();
    const signal = useLocal();

    useEffect(() => {
        setText(prev => {
            let newText = "";

            switch(get()){
                case "backspace":
                    newText = prev[selected].substring(0, prev[selected].length - 1);
                    break;
                case "space":
                    newText = prev[selected] + " ";
                    break;
                default:
                    newText = prev[selected] + get();
            }

            return {
                ...prev,
                [selected]: newText
            }
        })
    }, [signal])

    return(
        <div>
            <TextFormField
                id={"username"}
                onClick={(id: string) => {setSelected(id)}}
                isSelected={selected === "username"}
                fieldPrompt={"Username"}
                text={text.username}
            />
            <TextFormField
                id={"password"}
                onClick={(id: string) => {setSelected(id)}}
                isSelected={selected === "password"}
                fieldPrompt={"Password"}
                text={text.password}
            />
        </div>
    )
}
