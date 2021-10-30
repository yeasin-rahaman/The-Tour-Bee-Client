import React from 'react';
import getInTouch from './../../../assets/images/getInTouch.jpg'
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <div className="py-5">
            <div id="subscribe" class="container d-flex justify-content-center bg-panda-header align-items-center rounded-3 text-center">
                <div>
                    <h1>LET'S STAY IN TOUCH</h1>
                    <p>Get updates on sales specials and more</p>
                    <input class="form-control input-panda" type="text" placeholder="Your email" />
                    <br />
                    <button class="btn btn-grad">Submit</button>
                </div>

            </div>


            <div class="card  my-5 h-50 text-center my-auto mt-5 mb-5" >
                <img src={getInTouch} class="card-img  patient-img" alt="..." />
                <div class="card-img-overlay container custom-card ">
                    <h5 class="card-title text-white">Who has best Tour plans in the world?</h5>
                    <p class="card-text text-white">Tour plan provides world leading tour operator software, with sales, bookings and back office systems for destination management companies and tour</p>

                </div>
            </div>
        </div >
    );
};

export default GetInTouch;