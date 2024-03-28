import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export const EnquiryForm = () => {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_eqf9qid', 'template_41d3duo', form.current, {
                publicKey: 'e70SHpBXhK2elvQum',
            })
            .then(
                () => {
                    document.getElementById('input1').value = "";
                    document.getElementById('input2').value = "";
                    document.getElementById('input3').value = "";
                    document.getElementById('input4').value = "";
                    alert('Your data submitted successfully!');
                    navigate('/');
                },
                (error) => {
                    alert('Please Fill Mandatory Fields', error.text);
                },
            );
    };

    return (
        <div id='eqform'>
            <div id='eqnform' style={{ marginTop: '75px', height: '550px', padding: '50px' }}>
                <form class='w-50 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' ref={form} onSubmit={sendEmail}>
                    <h3 style={{ width: '100%', color: 'white' }}>Enquiry Form</h3>
                    <div class="form-floating mb-3 mt-3">
                        <input id='input1' type="text" class="form-control" name='from_name' placeholder="Enter Fullname" required />
                        <label className='form-label'>Enter Fullname</label>
                    </div>
                    <div class="form-floating mb-3 mt-3">
                        <input id='input2' type="text" class="form-control" name='from_email' placeholder="Enter Email Number" required />
                        <label className='form-label'>Enter Email ID</label>
                    </div>
                    <div class="form-floating mb-3 mt-3">
                        <input id='input3' type="number" class="form-control" name='from_mobile' placeholder="Enter Mobile Number" required />
                        <label className='form-label'>Enter Mobile Number</label>
                    </div>
                    <div class="form-floating">
                        <textarea id='input4' name="message" type="text" class="form-control" placeholder="Enter Message" required />
                        <label className='form-label'>Enter Message</label>
                    </div>
                    <button class="btn btn-primary mt-2" type='submit' value="Send">Submit</button><br />
                </form>
            </div>
        </div>
    );
};