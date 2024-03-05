import React from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Form() {
    var navigate = useNavigate();
    var loginForm = useFormik({
        initialValues:{
            name:"",
            mobile:''
        },
        onSubmit:(values)=>{
            console.log(values);
            navigate('/')
        }
    })
    return (
        <div style={{marginTop:'200px',}}>
            <form id='enquiryform' class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' onSubmit={loginForm.handleSubmit} action="" method="post">
                <h3 style={{ textAlign: "center" }}>Enquiry Form</h3>
                <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" name='name' placeholder="Enter Fullname" onChange={loginForm.handleChange} required />
                    <label className='form-label'>Enter Fullname</label>
                </div>
                <div class="form-floating">
                    <input type="number" class="form-control" name='mobile' placeholder="Enter Mobile Number" onChange={loginForm.handleChange} required />
                    <label className='form-label'>Enter Mobile Number</label>
                </div>
                <button class="btn btn-primary mt-2" type='submit'>Submit</button><br />
            </form>
        </div>
    )
}
export default Form