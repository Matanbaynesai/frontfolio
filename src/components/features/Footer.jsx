import React from 'react'
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useContext } from 'react'
import { themeContext} from '../../context'


export default function Footer() {
    const{theme,isTrue}=useContext(themeContext);
 
    return (
        
        <div id="container" style={isTrue?theme.dark:theme.light}>
            <ul >
                <li>
                <FacebookIcon fontSizeLarge="large" color="primary"/><a href="https://www.facebook.com/profile.php?id=100000530042988">facebook</a>
                </li>

                <li>
                <InstagramIcon/><a href="https://www.instagram.com/matan_b_123/">instegeram</a>
                </li>

                <li>
                 <LinkedInIcon color="primary"/><a href="https://www.linkedin.com/in/matan-baynesai-966bb120a/">linkdein</a>
                 </li>

                <li>
                 <GitHubIcon color="primary"/><a href="https://github.com/Matanbaynesai">github</a>
                </li>
            </ul>
        </div> 
    )
}