interface Props{
    min: number,
    max: number,
    onChange(value: string): void
}

export default function Slider(props: Props){
    return(
        <input
            type={"range"}
            min={props.min}
            max={props.max}
            onChange={(event) => {
                props.onChange(event.target.value);
            }}
        />
    )
}
