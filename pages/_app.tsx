import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout/Layout";
import CustomCursor from "../components/CustomCursor";
import './../styles/Component/CustomCursor.scss'
import {GlobalProvider} from "../context/globalContext";
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const [windowsScroll, setWindowsScroll] = useState(0);
    useEffect(() => {
        let scroll: any;
        // @ts-ignore
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("#js-trigger"),
                smooth: true,
                smoothMobile: false,
                resetNativeScroll: true,
                scrollingClass: true,
                initClass: true,
            });

            scroll.on('scroll', (instance: any) => {
                setWindowsScroll(instance.scroll.y)
                document.documentElement.style.cssText = `--scroll-top: ${instance.scroll.y}`;
            });
        });

        // `useEffect`'s cleanup phase
        return () => scroll.destroy();
    }, []);

    return <div id="js-trigger">
        <GlobalProvider>
            <CustomCursor />
            <Layout >
                <Component {...pageProps} />
            </Layout>
        </GlobalProvider>
    </div>
}

export default MyApp
