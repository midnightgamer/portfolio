import React, {createContext, useReducer, useContext, ReactNode} from "react"
//Default state
import {any} from 'prop-types'

const defaultState = {
    cursorType: "",
    cursorStyles: [],
    loading: false,
    cursor: {}
}
type ContextType = {
    cursorType: string,
    loading: boolean
    cursorStyles: Array<String>
    cursor: any
}


//Define Context
const GlobalStateContext = createContext<ContextType>(defaultState)
const GlobalDispatchContext = createContext<any>(null)

//Reducer
const globalReducer = (state: any, action: { type: any; cursorType: any, cursor: any, loading: boolean }) => {
    switch (action.type) {
        case "CURSOR_TYPE": {
            return {
                ...state,
                cursorType: action.cursorType,

            }
        }
        case "SET_CURSOR": {
            return {
                ...state,
                cursor: action.cursor
            }

        }
        case "SET_LOADING": {
            return {
                ...state,
                loading: action.loading
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
        loading: false,
        cursorStyles: ["pointer", "hovered", "locked"],
        cursor: {}
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
