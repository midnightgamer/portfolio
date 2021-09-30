import type {NextPage} from 'next';
import Banner from "../components/HomeComponents/Banner";
import {
    useGlobalDispatchContext,
    useGlobalStateContext
} from "../context/globalContext";

const Home: NextPage = () => {
    const dispatch = useGlobalDispatchContext()
    const {cursorStyles} = useGlobalStateContext()

    const onCursor = (cursorType: string) => {
        cursorType = (cursorStyles.includes(cursorType) && cursorType) || ''
        // @ts-ignore
        dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
    }

    return (
        <>
            <Banner  onCursor={onCursor}/>
        </>
    )
}

export default Home
