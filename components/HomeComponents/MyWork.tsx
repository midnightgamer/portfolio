import React from 'react';
import styles from '../../styles/pages/Home/Work.module.scss'
import Work from "../UI/Work";

type Props = {
    onCursor: (ang: string) => void
}
const MyWork = ({onCursor}: Props) => {
    return (
        <section className={`section ${styles.sectionWork}`}>
            <div className={`container ${styles.container}  `}>
                <h2>
                    Some of my
                    <br/> recent work.
                </h2>
            </div>
            <div className={`container ${styles.container}  `}>
                <Work onCursor={onCursor}/>
                <Work revers={true} onCursor={onCursor}/>
            </div>
        </section>
    );
};

export default MyWork;
