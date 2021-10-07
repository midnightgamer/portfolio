import React, {
    useEffect, useRef,
    useState
} from 'react';
import Header from "./Header";

import {
    useGlobalDispatchContext,
    useGlobalStateContext
} from "../../context/globalContext";
import {SmoothScrollProvider} from "../../context/SmoothScroll.context";
import {useRouter} from "next/router";

const Layout: React.FC = (props: any) => {
    const {cursorStyles, loading} = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()


    const router = useRouter();
    useEffect(() => {
        const handleStart = (url: string) => {
            url !== router.pathname ? dispatch({
                type: "SET_LOADING",
                loading: true
            }) : dispatch({type: "SET_LOADING", loading: false});
        };
        const handleComplete = (url: any) => {
            console.log(loading)
            dispatch({type: "SET_LOADING", loading: false});
            console.log(loading, 'a')
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
    }, [loading, router]);

    const onCursor = (cursorType: string) => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || ''
        // @ts-ignore
        dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
    }


    return (
        <SmoothScrollProvider options={{
            smooth: true, scrollingClass: true,
            initClass: true,
        }}>
            <Header onCursor={onCursor}/>
            <div>
                {props.children}
            </div>
        </SmoothScrollProvider>
    );
};

export default Layout;
