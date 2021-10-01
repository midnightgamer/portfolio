import React, {useEffect, useRef, useState} from "react"
//Context
import {useGlobalStateContext} from "../context/globalContext"

type Props = {
    toggleMenu: boolean
}

const CustomCursor = () => {
    const {cursorType} = useGlobalStateContext()
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })
    const cursor = useRef(null);
    const onMouseMove = (event: { pageY: any; pageX: any }) => {
        const {pageY, pageX} = event
        console.log(pageX,pageY )
        // @ts-ignore
        cursor.current.style.left = `${pageX}px`;
        // @ts-ignore
        cursor.current.style.top = `${pageY}px`;
    }
    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)
        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])
    return (
        <>
            <div
                ref={cursor}
                className={`cursor ${!!cursorType ? "hovered" : ""} ${cursorType}`}
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                }}/>
        </>
    )
}

export default CustomCursor
