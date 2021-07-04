import React from 'react';
import './port.css';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import {Carousel} from '3d-react-carousal';

export default function Portofolio() {
    let slides = [
      <a href="https://matanbaynesai.github.io/rnb-project/"><img class="my-site" src="./rnbsite.jpeg" width="500px"  haight="50px" alt="1" /></a>,
      <a href="https://matanbaynesai.github.io/calculatorr/"><img class="my-site"  src="./calcolatorrr.jpeg" width="800px"  alt="2" /></a> ,
      <img class="my-site"  src="https://picsum.photos/800/302/?random" alt="3" />  ,
      <img class="my-site"  src="https://picsum.photos/800/303/?random" alt="4" />  ,
      <img class="my-site" src="https://picsum.photos/800/304/?random" alt="5" />   ];
    return (
        <div id="portoflio" >
               <h1 className="animate__animated animate__backInUp">My Projects</h1>  
               <Carousel slides={slides} autoplay={false} interval={1000}/>
        </div>
    )
}
