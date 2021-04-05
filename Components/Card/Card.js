import { useRouter } from 'next/router'
import { useState } from 'react'
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
    borderBottom: '7px solid #027373',
   
  
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
  link:{
    textDecoration:"underline",
    cursor: 'pointer'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expanded:{}
}));

export default function CardItem({semester}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const router = useRouter()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  style={{margin: 50, width: 400,}} className={classes.root}>
      <CardContent>
      {/* <Typography paragraph align='center' style={{color: '#027373', fontWeight:'bold', fontSize:25, marginBottom:30}}> 
          Faculty Hits
      </Typography > */}
      <Typography paragraph align='center' variant="h4"  > 

        {semester?.discipline?.name || semester?.name}
      </Typography>
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
           <p className={classes.link} onClick={()=> router.push('/disciplines/33')}> {semester?.group?.name || ""}</p>
           
          </div>
        </CardContent>
      </Collapse>


      
    </Card>
  );
}
