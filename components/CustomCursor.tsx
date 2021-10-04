import React, {useEffect, useRef, useState} from "react"
//Context
import {useGlobalStateContext} from "../context/globalContext"
import {Power2, gsap} from 'gsap';


const CustomCursor = (props: any) => {
    const {cursorType} = useGlobalStateContext()
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    })
    const cursor = useRef(null);
    const onMouseMove = (event: any) => {


        const {clientX, clientY} = event
        // @ts-ignore
        const scrollVl = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--scroll-top'), 10)
        let val = clientY;
        if (scrollVl) {
            val = clientY + scrollVl;
        }
        // @ts-ignore
        gsap.to(cursor.current, {
            duration: 0.3,
            left: clientX,
            top: val,
            ease: 'linear'
        })


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
