import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import servicesImg from './../../assets/images/services.jpg'
import './Services.css'
import spinner from './../../assets/Infinity-1s-200px.svg'



const Services = () => {
    const { services } = UseAuth()
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <img className="services-image w-100 img-fluid" src={servicesImg} alt="" />
                </div>
            </div>
            <div class="d-flex mt-5 justify-content-center "><h1>Services</h1></div>
            <h2>{services.desc}</h2>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.length === 0 ?
                            <div className=" justify-content-center w-100 d-flex">
                                <img src={spinner} alt="" />
                            </div>
                            :

                            services.map(service => <div className="col" key={service.key} >
                                <div className="card custom-cart h-100 hover">
                                    <img src={service.img} className="img-fluid rounded-start w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.name}</h5>
                                        <p className="card-text">{service.desc}</p>
                                    </div>
                                    <div className="card-footer  text-center">
                                        <h5 className="text-warning p-2">Price $: {service.price}</h5>
                                        <NavLink to={`/services/${service.key}`} className="btn-grad">View Details</NavLink>
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div >
        </div>
    );
};

export default Services;