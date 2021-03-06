import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '7px solid #027373'
  
  },
  link:{
    color: 'black',
    textDecoration:'none'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expanded:{}
}));

export default function CardItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  style={{margin: 50, width: 350,}} className={classes.root}>
      <CardContent>
      <Typography paragraph align='center' style={{color: '#027373', fontWeight:'bold', fontSize:25}}> 
          Faculty Hits
      </Typography>
        Computer Science
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Group:</Typography>
          <div className='flex_wrap'>  
           <p>9713</p>
           <p>9712</p>
           <p>9714</p>
           <p>9715</p>
          </div>
        </CardContent>
      </Collapse>


      
    </Card>
  );
}
