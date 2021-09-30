import React, {useEffect, useState} from "react"
//Context
import {useGlobalStateContext} from "../context/globalContext"
type Props = {
    toggleMenu: boolean
}

const CustomCursor = ({toggleMenu}: Props) => {
    const {cursorType} = useGlobalStateContext()
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })

    const onMouseMove = (e: any) => {
        const {clientX: x, clientY: y} = e
        setMousePosition({x, y})
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
                className={`cursor ${!!cursorType ? "hovered" : ""} ${cursorType}`}
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                }}/>
        </>
    )
}

export default CustomCursor
