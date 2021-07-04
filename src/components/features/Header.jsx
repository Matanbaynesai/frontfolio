import React from 'react';
import './header.css';
import { useContext } from 'react'
import { themeContext} from '../../context'

export default function Header() {
    const{theme,isTrue}=useContext(themeContext);

    return (
        <div style={isTrue?theme.dark:theme.light} id="header-container">
            <p class="my-mail">matanb2296@gmail.com</p>
        <a href="https://tech-career-alternative.firebaseapp.com/">
            <img class="tech" src="https://tech-career-alternative.firebaseapp.com/image001.png" width="80px" height="40px"/>
        </a>
        <img class="indi" src="./indicom.jpeg" width="80px" height="40px"/>
        </div>
    )
}
