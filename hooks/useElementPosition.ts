import {useState, useEffect} from "react"

export default function useElementPosition(el: any) {
    function getElement(x: any, y: any) {
        return {
            x: x,
            y: y,
        }
    }

    // @ts-ignore
    const [elementPosition, setElementPosition] = useState(getElement)

    useEffect(() => {
        function handlePosition() {
            let element = el.current
            let x =
                element.getBoundingClientRect().left +
                document.documentElement.scrollLeft +
                element.offsetWidth / 2
            let y =
                element.getBoundingClientRect().top +
                document.documentElement.scrollTop +
                element.offsetHeight / 2
            setElementPosition(getElement(x, y))
        }

        handlePosition()
    }, [el])

    return elementPosition
}
