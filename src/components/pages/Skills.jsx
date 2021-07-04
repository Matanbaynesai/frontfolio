import React from 'react'
import './skills.css'
import { useContext } from 'react'
import { themeContext} from '../../context'


export default function Skills() {
    const{theme,isTrue}=useContext(themeContext);
    return (
        <div class="container-container" >
       <div id="logo-container" style={isTrue?theme.dark:theme.light}>
            <h1  className ="animate__animated animate__flip">Client</h1>
            <img class="mylogo" src="./csslogo.png" alt="" />
            <progress value={80} max={100}/>
            <span>80%</span>
            <img class="mylogo" src="./logo192.png" alt="" />
            <progress value={83} max={100}/>
            <span>83%</span>
            <img class="mylogo" src="./htmllogo.png" alt="" />
            <progress value={89} max={100}></progress>
            <span>89%</span>
            <img class="mylogo" src="./javascriptlogo.png" alt="" />
            <progress value={95} max={100}/>
            <span>95%</span>
            <h1  className ="animate__animated animate__flip">Server</h1>
            <img class="mylogo" src="./csharplogo.svg"  alt="" />
            <progress value={82} max={100}/>
            <span>82%</span>
            <img class="mylogo" src="./mvclogo.jpg" alt="" />
            <progress value={85} max={100}/>
            <span>85%</span>
            <img class="mylogo" src="./node-js-2logo.png" alt="" />
            <progress value={95} max={100}/>
            <span>95%</span>
            <img class="mylogo" src="./github-logo.png" alt="" />
            <progress value={89} max={100}/>
            <span>89%</span>
       </div>
       <div class= "skills">
                 <h5>other skills</h5>
                   <ol>
                     <li>Music</li>
                     <li>Soccer</li>
                     <li>Singing</li>
                     <li>Hang out with friends</li>
                     <li>Traveling</li>
                   </ol>
               </div>
       </div>
        
    )
}
