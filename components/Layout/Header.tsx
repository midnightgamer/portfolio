import React, {useContext} from 'react';
import Link from "next/link";
import styles from '../../styles/Component/Header.module.scss'
import {useGlobalStateContext} from "../../context/globalContext";
import {SmoothScrollContext} from "../../context/SmoothScroll.context";

type Props = {
    onCursor: (type: string) => void
}
const links = [
    {label: 'Work', link: '/'},
    {label: 'About', link: '/about'},
    {label: 'Resume', link: '/'},
]
const Header: React.FC<Props> = ({onCursor}: Props) => {
    const {scroll} = useContext(SmoothScrollContext);

    const goToContact = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault()
        // @ts-ignore
        scroll && scroll.scrollTo('#footer')
    }
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link href={'/'}>
                    <a onMouseEnter={() => onCursor('pointer')}
                       onMouseLeave={() => onCursor('')}
                    >
                        <h1>
                            Pankaj Jaiswal
                        </h1>
                    </a>
                </Link>
                <ul>
                    {links.map((item, index) => <li key={index}>
                        <Link href={item.link}>
                            <a
                                onMouseEnter={() => onCursor('pointer')}
                                onMouseLeave={() => onCursor('')}

                            >
                                {item.label}
                            </a>
                        </Link>
                    </li>)}
                    <li>
                        <a onMouseEnter={() => onCursor('pointer')}
                           onMouseLeave={() => onCursor('')}
                           onClick={(event) => goToContact(event)}
                           href="#footer">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
