import React from 'react';
import './App.css';
import {data} from './data';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth:300,
    marginRight:20,
  },
  media1: {
    height: 20,
  },
  media2: {
    height: 20,
  }
});




function App() {
  console.log(data)
  const classes = useStyles();
  return (
    <div className="App">
  
      {data.map(d => {
        return <Card key={d.match_id}className={classes.root}>
        <CardActionArea>
        <Typography gutterBottom variant="h5" component="h5">
            {d.series}
            </Typography>
         
          <img
            className={classes.media}
            src={d.team_a_img}
            width='100px'
          />
              <Typography gutterBottom variant="p" component="p">
            {d.team_a}       
            {d.team_a_score?
                 <Typography  variant="p" component="p">
                -score: {d.team_a_score.score}
                -wickets{d.team_a_score.wicket}
            </Typography>
      :null}
         { d.team_a_score&&d.team_a_score.won?
           <span style={{color:'green'}} >winner</span>
            :null}
            </Typography>
            <img
            className={classes.media}
            src={d.team_b_img}
            width='100px'
            
          />
              <Typography  gutterBottom variant="p" component="p">
            {   d.team_b}
            </Typography>
            {d.team_b_score?
                 <Typography  variant="p" component="p">
                       -score: {d.team_b_score.score}
                  {'  '}wickets: {d.team_b_score.wicket}
            </Typography>
      
      :null}
          { d.team_b_score&&d.team_b_score.won?
              <span style={{color:'green'}} >winner</span>
            :null}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {d.match_status}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {d.venue}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {d.match_type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {d.matchs}
            </Typography>
            <Typography gutterBottom variant="p" component="p">
            {d.match_date}
            </Typography>
            <Typography gutterBottom variant="p" component="p">
            {d.time}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            more
          </Button>
          <Button size="small" color="primary">
             More
          </Button>
        </CardActions>
      </Card>
})
      }
  
    </div>
  );
}

export default App;
