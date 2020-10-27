import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Activities from '../Activities/Activities';
const Home = () => {
    const [activities, setActivities] = useState([]);
    useEffect(()=>{
        fetch('https://ancient-depths-30638.herokuapp.com/showEvents')
        .then(res => res.json())
        .then(data => setActivities(data))  
    },[])
    
    
    return (
        <>
            <div className='container' style={{marginTop:'70px'}}>
                <Grid container item xs={12} spacing='5' justify='center'  style={{ textAlign:'center', margin:'auto'}}>
                {   
                    activities.map(event=>{
                        return(
                            <Grid item xs={12} sm={6} md={3} key={event._id}>
                                <Activities event={event}>
                                </Activities>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </div>   
        </>
    );
};

export default Home;