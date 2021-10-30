import React from 'react';

import adminImg from './../../../assets/adminpanel.webp'
const AdminHome = () => {
    return (
        <div className="container d-flex justyfy-">
            <div className=" ">
                <h1>Welcome TO Admin Panel</h1>
                <img className="img-fluid" src={adminImg} alt="" />
            </div>
        </div>
    );
};

export default AdminHome;