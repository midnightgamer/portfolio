import Link from 'next/link';
import React, {useEffect} from 'react';
import styled from './../../styles/pages/Home/Banner.module.scss'
import ArrowIcon from "../../assets/svg/up-arrow.svg";
import SocialLinks from "../UI/SocialLinks";
import {gsap, Expo} from "gsap";

type Props = {
    onCursor: (ang: string) => void
    menuHover: (arg0: any) => void
}


const Banner: React.FC<any> = ({onCursor}: Props) => {
    useEffect(() => {
        const tl = gsap.timeline({defaults: {ease: Expo.easeOut}})
        const inners = gsap.utils.toArray(`.${styled.inner}`)
        const lines = gsap.utils.toArray(`.${styled.blackRevel}`)

        /*.fromTo(lines, {transform: 'scale(1,1)'}, {
               background: '#fff',
               transformOrigin: '100% 50%',
               opacity: 1,
               transform: 'scale(0,1)',
               duration: 1,
               ease: 'linear',
               stagger: 0.2,
               delay: 0.8
           })*/

        tl
            .fromTo(inners, {y: '150%'}, {
                y: 0,
                stagger: 0.4,
                duration: 1,
            })
            .fromTo('.pixed-links', {
                y: '30px',
                opacity: 0,

            }, {
                y: 0,
                opacity: 1,
                duration: 1,
            })

    }, []);

    return (
        <section className={`section ${styled.sectionBanner}`}>
            <div className={`container ${styled.container}`}>
                <div>
                    <h2>
                        <span className={styled.line}>
                            <span className={styled.blackRevel}/>
                            <span className={styled.inner}>Hi, I am a front-end developer</span>
                        </span>
                        <span className={styled.line}>
                            <span className={styled.blackRevel}/>
                            <span className={styled.inner}>based in Mumbai, India.</span>
                        </span>
                    </h2>
                    <Link href={'/'}>
                        <a
                            onMouseEnter={() => onCursor('pointer')}
                            onMouseLeave={() => onCursor('')}
                            className={'pixed-links'}>
                            My work
                            <ArrowIcon/>
                        </a>
                    </Link>
                </div>
                <SocialLinks onCursor={onCursor}/>
            </div>
        </section>
    );
};

export default Banner;
