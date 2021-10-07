import React from 'react';
import LinkedInIcon from "../../assets/svg/LinkedIn.svg";
import MediumIcon from "../../assets/svg/Medium.svg";
import GithubIcon from "../../assets/svg/Github.svg";
import InstaIcon from "../../assets/svg/insta.svg";
type Prop = {
    onCursor: (arg: any) => void
}
const SocialLinks = ({onCursor}: Prop) => {
    return (
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/midnightgamer/"
                   onMouseEnter={() => onCursor('pointer')}
                   onMouseLeave={() => onCursor('')}
                   target={'_blank'} rel="noreferrer">
                    <LinkedInIcon/>
                </a>
            </li>
            <li>
                <a href="https://midnightgamer.medium.com/"
                   onMouseEnter={() => onCursor('pointer')}
                   onMouseLeave={() => onCursor('')}
                   target={'_blank'} rel="noreferrer">
                    <MediumIcon/>
                </a>
            </li>
            <li>
                <a href="https://github.com/midnightgamer"
                   onMouseEnter={() => onCursor('pointer')}
                   onMouseLeave={() => onCursor('')}
                   target={'_blank'} rel="noreferrer">
                    <GithubIcon/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/_midnightgamer/"
                   onMouseEnter={() => onCursor('pointer')}
                   onMouseLeave={() => onCursor('')}
                   target={'_blank'} rel="noreferrer">
                    <InstaIcon/>
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
