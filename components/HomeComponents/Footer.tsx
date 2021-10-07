import React from 'react';
import ArrowIcon from "../../assets/svg/up-arrow.svg";
import SocialLinks from "../UI/SocialLinks";
import styles from '../../styles/pages/Home/Footer.module.scss'

type Props = {
    onCursor: (arg: any) => void
}
const Footer = ({onCursor}: Props) => {
    return (
        <section data-scroll-target={'footer'} id={'footer'} className={`section ${styles.sectionFooter}`}>
            <div className={`container ${styles.container}`}>
                <div>
                    <h2>
                        Let’s work together.
                    </h2>
                    <span>2021 all rights reserved</span>
                </div>
                <div>
                    <span>Email me at </span>
                    <a
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={() => onCursor('')}
                        href="mailto:midnightgamer.js@gmail.com">
                        midnightgamer.js@gmail.com
                        <ArrowIcon className={styles.svg} />
                    </a>
                    <span>Find me on</span>
                    <SocialLinks onCursor={onCursor}/>
                </div>
            </div>
        </section>
    );
};

export default Footer;
