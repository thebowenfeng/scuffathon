import {useEffect, useState} from "react";

let currVal: string = "";
let subscribers: Record<number, Function> = {};
let id = 0;

export function useKeyboard(){
    const set = (newVal: string) => {
        currVal = newVal;
        for (const func of Object.values(subscribers)) {
            func((prev: number) => {
                return prev + 1;
            });
        }
    }

    const get = () => {
        return currVal;
    }

    const useLocal = () => {
        let [localState, setLocalState] = useState<number>(0);

        useEffect(() => {
            subscribers[id] = setLocalState;
            id += 1;

            return () => {
                delete subscribers[id]
            }
        }, [])

        return localState;
    }

    return {
        useLocal: useLocal,
        set: set,
        get: get
    };
}
