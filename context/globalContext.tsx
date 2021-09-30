import React, {createContext, useReducer, useContext, ReactNode} from "react"
//Default state
import {any} from 'prop-types'
const defaultState = {
    cursorType: "",
    cursorStyles: []
}
type ContextType = {
    cursorType: string,
    cursorStyles: Array<String>
}


//Define Context
const GlobalStateContext = createContext<ContextType>(defaultState)
const GlobalDispatchContext = createContext(undefined)

//Reducer
const globalReducer = (state: any, action: { type: any; cursorType: any }) => {
    switch (action.type) {
        case "CURSOR_TYPE": {
            return {
                ...state,
                cursorType: action.cursorType,

            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

//Provider
type Props = {
    children: ReactNode;
};

export const GlobalProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(globalReducer, {
        cursorType: false,
        cursorStyles: ["pointer", "hovered", "locked"],
    })

    // @ts-ignore
    return (
        <>
            <GlobalDispatchContext.Provider value={dispatch}>
                <GlobalStateContext.Provider value={state}>
                    {children}
                </GlobalStateContext.Provider>
            </GlobalDispatchContext.Provider>
        </>
    )
}

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
