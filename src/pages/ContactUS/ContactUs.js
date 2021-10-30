import React from 'react';
import './ContactUs.css'

import contactImg from './../../assets/images/contactUS.gif'




const ContactUs = () => {
    return (
        <div>
            <section id="contact ">
                <div class="container custom-body align-items-center  mt-5">
                    <div class="d-flex my-5 justify-content-center"><h1>Contact Us</h1></div>


                    <div class="row mt-5 align-items-center">

                        <div class="col-md-7 d-flex ">

                            <img src={contactImg} className='img-fluid' alt="" />
                        </div>

                        <div class="col-md-5">
                            <h4><strong>Get in Touch</strong></h4>
                            <form>
                                <div class="form-group p-2">
                                    <input type="text" class="form-control" name="" value="" placeholder="Name" />
                                </div>
                                <div class="form-group p-2">
                                    <input type="email" class="form-control" name="" value="" placeholder="E-mail" public />
                                </div>
                                <div class="form-group p-2">
                                    <input type="tel" class="form-control" name="" value="" placeholder="Phone" />
                                </div>
                                <div class="form-group p-2">
                                    <textarea class="form-control" name="" rows="3" placeholder="Message"></textarea>
                                </div>
                                <div class="form-group p-2">
                                    <button class="btn btn-default btn-grad" type="submit" name="button">
                                        <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ContactUs;

