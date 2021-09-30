import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/Layout/Layout";

import './../styles/Component/CustomCursor.scss'
import {GlobalProvider} from "../context/globalContext";

function MyApp({Component, pageProps}: AppProps) {
    return <GlobalProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </GlobalProvider>
}

export default MyApp
