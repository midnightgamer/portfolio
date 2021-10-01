import Link from 'next/link';
import React, {createRef, useRef} from 'react';
import styled from './../../styles/pages/Home/Banner.module.scss'

import useElementPosition from "../../hooks/useElementPosition"

import ArrowIcon from "../../assets/svg/up-arrow.svg";
import InstaIcon from '../../assets/svg/insta.svg'
import LinkedInIcon from '../../assets/svg/LinkedIn.svg'
import GithubIcon from '../../assets/svg/Github.svg'
import MediumIcon from '../../assets/svg/Medium.svg'

type Props = {
    onCursor: (ang: string) => void
    menuHover: (arg0: any) => void
}


const Banner: React.FC<any> = ({onCursor, menuHover}: Props) => {


    const instagramRef = useRef(null)
    const instagramPosition = useElementPosition(instagramRef)

    const linkedinRef = useRef(null)
    const linkedInPosition = useElementPosition(linkedinRef)

    const githubRef = useRef(null)
    const githubPosition = useElementPosition(githubRef)

    const mediumRef = useRef(null)
    const mediumPosition = useElementPosition(mediumRef)

    return (
        <section className={`section ${styled.sectionBanner}`}>
            <div className={`container ${styled.container}`}>
                <div>
                    <h2>
                        Hi, I am a front-end developer<br/> based in Mumbai,
                        India.
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
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/midnightgamer/"
                           onMouseEnter={() => menuHover(linkedInPosition)}
                           onMouseLeave={() => onCursor('')}
                           ref={linkedinRef}
                           target={'_blank'} rel="noreferrer">
                            <LinkedInIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://midnightgamer.medium.com/"
                           onMouseEnter={() => menuHover(mediumPosition)}
                           onMouseLeave={() => onCursor('')}
                           ref={mediumRef}
                           target={'_blank'} rel="noreferrer">
                            <MediumIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/midnightgamer"
                           onMouseEnter={() => menuHover(githubPosition)}
                           onMouseLeave={() => onCursor('')}
                           ref={githubRef}
                           target={'_blank'} rel="noreferrer">
                            <GithubIcon/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_midnightgamer/"
                           onMouseEnter={() => menuHover(instagramPosition)}
                           onMouseLeave={() => onCursor('')}
                           ref={instagramRef}
                           target={'_blank'} rel="noreferrer">
                            <InstaIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Banner;
