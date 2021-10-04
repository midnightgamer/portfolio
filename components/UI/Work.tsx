import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Component/Work.module.scss'
import ArrowIcon from "../../assets/svg/up-arrow.svg";
import Image from 'next/image'
import creative from '/assets/img/creativewebo.png'

type Props = {
    onCursor: (ang: string) => void
    revers?: boolean
}
const Work = ({onCursor, revers}: Props) => {

    return <div
        className={`${styles.workWrapper} ${revers ? styles.revers : ''} `}>
        <div className={styles.thumbnail}>
            <Image src={creative} className={styles.thumbnailImage}
                   alt="CreativeWebo"/>
        </div>
        <div className={styles.workText}>
            <h3>
                CreativeWebo
            </h3>
            <div className={styles.line}>
                <div/>
                <span className={styles.count}>01</span>
            </div>
            <p>
                My bachelor thesis was built upon the topic question: How to
                create a better user experience when redesigning a website. In
                the practical part of the thesis I decided to redesign IMDb’s
                website. During my UX process I used various methods in order to
                create a new design system, navigation and identity for the IMDb
                website.
            </p>
        </div>
    </div>;
};

export default Work;
