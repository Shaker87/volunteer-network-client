import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const VolunteerList = () => {
    const history = useHistory();
    const[volunteer, setVolunteer] = useState([])
    useEffect(() => {
        fetch('https://ancient-depths-30638.herokuapp.com/volunteer')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    },[])

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
               history.push(`/admin`);
               
            }
        })
    }
    return (
        <>
            <h2>Volunteer Register List</h2>
            <Grid container spacing='5'>
                {
                    volunteer.map(volunteer=>{
                       return(
                        
                        <Grid item md={12} key={volunteer._id}>
                            <div style={{display:'flex',boxShadow:'2px 2px 5px lightGray',padding:'10px' }}>
                                <div style={{marginLeft:'10px', width:'100%'}}>
                                    <p>Name: {volunteer.name} Email: {volunteer.email} Registation Date: {volunteer.date} VolunteerList: {volunteer.eventName}</p>
                                </div>
                                <div>
                                    <button onClick={()=>handleRemoveEvent(volunteer._id)}>Delete</button>
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

export default VolunteerList;