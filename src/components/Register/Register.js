import React, { useContext, useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import 'date-fns';
import { useHistory } from 'react-router-dom';


const Register = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [form, setForm]=useState({eventName:loggedInUser.event?.eventName,date:new Date().toDateString(), email:loggedInUser.email, name:loggedInUser.name, img:loggedInUser.event?.img})
    console.log("register", form)
    
    const onSubmit = data => {
        // console.log(form)
        fetch('https://ancient-depths-30638.herokuapp.com/selectEvent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => {
         if(data){
             history.push('/events')
         }
        })
      };
    return (
        <div style={{textAlign: 'center'}} className="container">
            <h1>This is Register!</h1>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue = {form.name} ref={register({ required: true })} placeholder="Enter your name" />
                {errors.name && <span className="error">Name is required</span>}

                <input name="email" defaultValue = {loggedInUser.email} ref={register({ required: true })} placeholder="Enter your email" />
                {errors.email && <span className="error">Email is required</span>}
    
                <input name="date" defaultValue = {form.date} ref={register({ required: true })} placeholder="Date"  />
                {errors.date && <span className="error">Date is required</span>}
                
                <input name="description" ref={register({ required: true })} placeholder="Description"  />
                {errors.description && <span className="error">Description is required</span>}

                <input name="event" defaultValue = {form.eventName} ref={register({ required: true })} placeholder="Activities"  />
                {errors.event && <span className="error">Description is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;