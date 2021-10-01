import React from 'react';
import CodeIcon from '../../assets/svg/code.svg'
import ArrowIcon from "../../assets/svg/up-arrow.svg";
import Link from "next/link";
import styles from '../../styles/pages/Home/About.module.scss'

type Props = {
    onCursor: (ang: string) => void
}


const About = ({onCursor}: Props) => {
    return (
        <section className={`section ${styles.aboutPage}`}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles.aboutBox}`}>
                    <div className={styles.heading}>
                        <h2>
                            I build user <br/> interfaces
                            <CodeIcon/>
                        </h2>
                        <Link href={'/'}>
                            <a
                                onMouseEnter={() => onCursor('pointer')}
                                onMouseLeave={() => onCursor('')}
                                className={'pixed-links'}>
                                About me
                                <ArrowIcon/>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.text}>
                        <p>
                            I have over 4 years of experience in creating
                            websites for products and companies across multiple
                            domains using HTML, CSS, Javascript and SASS.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
