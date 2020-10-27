import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';


const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 200,
    },
  });

const Activities = ({event}) => {
    const classes = useStyles();
    const history = useHistory();
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const handleActivity = (key, event) => {
        // console.log('clicked', name)
        // const newActivity = {...loggedInUser, eventName};
        const newActivity = {...loggedInUser,event:event};
        console.log("activity", newActivity);
        setLoggedInUser(newActivity);
        
        
        
        // setLoggedInUser(newActivity);
        
        history.push(`/activity/${key}`);
        
    }
    return (
        <div className="container">
            <Card onClick={()=> handleActivity(event.key, event)} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={event.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {event.eventName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Activities;