import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { UserContext } from '../../App';

const Event = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const [events, setEvents]=useState([])
    useEffect(()=>{
        fetch('https://ancient-depths-30638.herokuapp.com/userSelectEvent?email='+loggedInUser.email,{
            method:'GET', 
            headers:{
                'Content-Type':'application/json',   
            }
        })
        .then(res=>res.json())
        .then(result=>{
            setEvents(result)
        })
    })

    const handleRemoveEvent=(id)=>{
        fetch(`https://ancient-depths-30638.herokuapp.com/removeEvent/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
               console.log(result);
               
            }
        })
    }

    return (
        <>
            <Grid container spacing='5'>
                {
                    events.map(event=>{
                       return(
                        
                        <Grid item md={4} key={event._id}>
                            <div style={{display:'flex',boxShadow:'0px 2px 5px lightGray', width:'400px',padding:'20px' }}>
                                <div>
                                    <img style={{height:'130px', width:'140px'}} src={event.img} alt=""/>
                                </div>
                                <div style={{marginLeft:'10px', width:'100%'}}>
                                    <h3>{event.eventName}</h3>
                                    <h4>{event.date}</h4>
                                    <button onClick={()=>handleRemoveEvent(event._id)}  className='remove-event'>
                                        Remove Event
                                    </button>
                                </div>
                            </div>
                        </Grid>
                       )
                    })
                }
            </Grid>            
        </>
    );
};

export default Event;