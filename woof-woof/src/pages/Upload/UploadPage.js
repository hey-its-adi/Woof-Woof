import React from 'react'
import classes from './UploadPage.module.css'
import {useState} from 'react';

function UploadPage ({forwardUsername}) {
    console.log(forwardUsername.username)
    const [Name, setName] = useState('');
    const [Location, setLocation] = useState('');
    const [Phone, setPhone] = useState('');
    const [Vaccination, setVaccination] = useState('');
    const [Pic, setPic] = useState('');

   
    async function submitHandler(event,onSubmitProps){
        event.preventDefault();


        let fd= new FormData()
        fd.append('Pic',Pic)
        fd.append('name',Name)
        fd.append('vaccination',Vaccination)
        fd.append('phone',Phone)
        fd.append('location',Location)
        fd.append('uname',forwardUsername.username)

        console.log(Pic);
        let res =  await fetch("http://localhost:8000/Upload",{
                method : 'POST',
                // {/*headers :{
                //         'Accept' : 'application/json',
                //         'Content-Type': 'application/json'
                // },*/}
                body : fd
        })
        console.log(res);
        if(res.ok){     
        }
    }
  
    
  return (
    <div className={classes.Upload}>
        <div className={classes.Wrapper}>
        <form onSubmit={submitHandler} method="POST" className={classes.form} enctype="multipart/form-data" action='/Upload'>
        
                <div className={classes.control}>    
                        <label htmlFor="user">Your Name</label>
                        <input type="text" value ={forwardUsername.username} name="user" id="user" size="30" maxLength={30} placeholder="Enter the Your Name" required disabled  />
                </div>               
                <div className={classes.control}>    
                        <label htmlFor="name">Breed Name</label>
                        <input type="text" value ={Name} name="name" id="name" size="30" maxLength={30} placeholder="Enter the breed name" required onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div className={classes.control}>
                        <label htmlFor="location">Location</label>
                        <input type="Text" id="location" value={Location} name="location" placeholder="Location of the animal" size="30" required onChange={(e)=> setLocation(e.target.value)}/>
                </div>
                <div  className={classes.control}>    
                        <label htmlFor="phone">Phone</label>
                        <input type="number" id="phone" name="phone" value={Phone} placeholder="Enter a valid Phone number" size="12" required onChange={(e)=> setPhone(e.target.value)}/>
                </div>       
                <div className={classes.control}>
                        <label htmlFor="vaccination" >Vaccination status</label>
                        <select id="vaccination"  name="vaccination" required onChange={(e)=> setVaccination(e.target.value)}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="Vaccinated">Vaccinated</option>
                        <option value="NotVaccinated">Not Vaccinated</option>
                        </select>
                </div>
                <div  className={classes.control}>    
                        <label htmlFor="Pic">Picture</label>
                        <input type="file" id="pic" name="Pic"  required onChange={(e)=> setPic(e.target.files[0])}/>
                </div>   
        
                <div className={classes.actions}>
                        <button type="submit" id="submit" name="submit" onSubmit={submitHandler}>SUBMIT</button>
                </div>
                </form>
        </div>
    </div>
  )
}

export default UploadPage