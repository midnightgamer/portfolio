import type {NextPage} from 'next';
import Banner from "../components/HomeComponents/Banner";
import {
    useGlobalDispatchContext,
    useGlobalStateContext
} from "../context/globalContext";
import About from "../components/HomeComponents/About";
import MyWork from "../components/HomeComponents/MyWork";
import Footer from "../components/HomeComponents/Footer";

const Home: NextPage = () => {
    const dispatch = useGlobalDispatchContext()
    const onCursor = (cursorType: string) => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || ''
        // @ts-ignore
        dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
    }

    const {cursorStyles} = useGlobalStateContext()
    const menuHover = (x: any) => {
        onCursor("locked")
        // @ts-ignore
        dispatch({type: "SET_CURSOR", cursor: {x: x.x, y: x.y}})
        // @ts-ignore
        document.querySelector(':root').style.setProperty('--mouse-x', x.x + "px");
        // @ts-ignore
        document.querySelector(':root').style.setProperty('--mouse-y', x.y + "px");
    }

    return (
        <>
            <Banner menuHover={menuHover} onCursor={onCursor}/>
            <About onCursor={onCursor}/>
            <MyWork onCursor={onCursor}/>
            <Footer onCursor={onCursor}/>
        </>
    )
}

export default Home
