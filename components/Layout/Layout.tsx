import React, {
    useEffect, useRef,
    useState
} from 'react';
import Header from "./Header";

import {
    useGlobalDispatchContext,
    useGlobalStateContext
} from "../../context/globalContext";

const Layout: React.FC = (props: any) => {
    const {cursorStyles} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = (cursorType: string) => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || ''
        // @ts-ignore
        dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
    }


    return (
        <>

            <Header onCursor={onCursor}/>
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;
