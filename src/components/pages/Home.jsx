import './home.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';




export default function Home() {
const style ={left:0,position:"absolute"}
const Pic = [
  { src: "./usememo4.jpeg", caption: "explaining to my class the Hook use memo how to use it and when to use it", key: 0 ,subject:"useMemo"},
  { src: "./barzik.jpeg", caption: "Mr Barzik the one and only with best dad jokes and the best coding skills", key: 1,subject:"Mr Barzik" },
  { src: "./algile.jpeg", caption: "try to explain app that we invent during agile class to the class not easy got to tell you that", key: 2,subject:"agile" },
]
const renderCard = (card, index)=>{
    return(
          
        <>
         {<h1>{card.subject}</h1>}
         <Card key={index} className={card.subject} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="400"
            width="20"
            image={card.src}
            title="Contemplative Reptile"
          />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              presentation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <h2>{card.caption}</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
       
      </Card>  
     </>
    )
}
return (
    <div id="container">
      <img class="backImage" src ="https://previews.123rf.com/images/yurich84/yurich841804/yurich84180400152/100592687-php-code-on-the-dark-blue-background-extreme-close-up.jpg"/>
        <h1>About me</h1>
             <h3>Full Stack developer </h3>
             <p>Has a high work ethic, creativity, striving for excellence, high self-learning ability and passion for the profession.</p>
              <p>Experience working according to procedures, working with clients, adhering to a goal, striving for progress.</p>
             <a href='/CV.pdf' download>Click to download My CV</a>
             <Avatar id="avatar" alt="Remy Sharp" src="./me.jpeg" height="200" width="200"/>
             <div className="cardContainer">
             {
        Pic.map(renderCard)
        }
             </div>
       
    </div>
                 
 );
}