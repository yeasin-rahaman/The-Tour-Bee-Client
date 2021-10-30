import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import dataImg from './../../assets/databaseupdate.gif';
import './AddToDatabase.css'



const AddToDatabase = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('adder successfully')
                    reset()
                }
            })
    };

    return (
        <div className="add-service">


            <div className="contact1">
                <div className="container-contact1">
                    <div className="contact1-pic js-tilt" data-tilt="">
                        <img src={dataImg} alt="IMG" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form">

                        <span className="contact1-form-title">
                            Send Data
                        </span>

                        <div className="wrap-input1 validate-input" data-validate="Name is required">
                            <input className="input1" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input1" placeholder="Image URL"  {...register("Img",)} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Subject is required">
                            <input className="input1" placeholder="Price" type="number" {...register("price")} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <textarea className="input1" placeholder="Description"{...register("Description",)} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Send Data
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>



                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddToDatabase;