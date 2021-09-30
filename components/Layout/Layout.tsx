import React, {ContextType, ReactChild, ReactChildren, useState} from 'react';
import Header from "./Header";
import CustomCursor from "../CustomCursor";
import {
    useGlobalDispatchContext,
    useGlobalStateContext
} from "../../context/globalContext";

const Layout: React.FC = (props) => {
    const {cursorStyles} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const [toggleMenu, setToggleMenu] = useState(false);

    const onCursor = (cursorType: string) => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || ''
        // @ts-ignore
        dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
    }

    return (
        <>
            <CustomCursor toggleMenu={toggleMenu}/>
            <Header onCursor={onCursor}/>
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;
