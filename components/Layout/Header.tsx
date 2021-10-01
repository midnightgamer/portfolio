import React from 'react';
import Link from "next/link";
import styles from '../../styles/Component/Header.module.scss'
import {useGlobalStateContext} from "../../context/globalContext";

type Props = {
    onCursor: (type: string) => void
}
const links = [
    {label: 'Work', link: '/'},
    {label: 'About', link: '/'},
    {label: 'Resume', link: '/'},
    {label: 'Contact', link: '/'},
]
const Header: React.FC<Props> = ({onCursor}: Props) => {
    const state = useGlobalStateContext();
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
                    {links.map(((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>
                                <a
                                    onMouseEnter={() => onCursor('pointer')}
                                    onMouseLeave={() => onCursor('')}
                                >
                                    {item.label}
                                </a>
                            </Link>
                        </li>
                    )))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
