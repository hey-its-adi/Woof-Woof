import React from 'react'
import classes from './UploadPage.module.css'
import {useState} from 'react';
function UploadPage () {
    const [Name, setName] = useState(null);
    const [Location, setLocation] = useState(null);
    const [Phone, setPhone] = useState(null);
    const [Vaccination, setVaccination] = useState(null);
    const [Pic, setPic] = useState(null);



    async function submitHandler(event){
        event.preventDefault();
        const formData = {
                Name,Location,Phone,Vaccination,Pic
        }
        let res =  await fetch("http://localhost:8000/Upload",{
                method : 'POST',
                headers :{
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'
                },
                body : JSON.stringify(formData)
        })
        
    }
    
  return (
    <div className={classes.Upload}>
        <div className={classes.Wrapper}>
        <form onSubmit={submitHandler} method="POST" className={classes.form}>
                <div className={classes.control}>    
                        <label htmlFor="name">Breed Name</label>
                        <input type="text" name="name" id="name" size="30" maxLength={30} placeholder="Enter the breed name" required onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div className={classes.control}>
                        <label htmlFor="location">Location</label>
                        <input type="Text" id="location" name="location" placeholder="Location of the animal" size="30" required onChange={(e)=> setLocation(e.target.value)}/>
                </div>
                <div  className={classes.control}>    
                        <label htmlFor="phone">Phone</label>
                        <input type="number" id="phone" name="phone" placeholder="Enter a valid Phone number" size="12" required onChange={(e)=> setPhone(e.target.value)}/>
                </div>       
                <div className={classes.control}>
                        <label htmlFor="vaccination" >Vaccination status</label>
                        <select id="vaccination" name="vaccination" required onChange={(e)=> setVaccination(e.target.value)}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="Vaccinated">Vaccinated</option>
                        <option value="NotVaccinated">Not Vaccinated</option>
                        </select>
                </div>
                <div  className={classes.control}>    
                        <label htmlFor="pic">Picture</label>
                        <input type="file" id="pic" name="pic" required onChange={(e)=> setPic(e.target.value)}/>
                </div>   

                <div className={classes.actions}>
                        <button type="submit" id="submit" name="submit" onSubmit={submitHandler}>SIGN UP</button>
                </div>
                </form>
        </div>

    </div>
  )
}

export default UploadPage