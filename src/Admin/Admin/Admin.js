import React, { useState } from 'react';
import AddToDatabase from '../AddToDatabase/AddToDatabase';
import AdminHome from '../AddToDatabase/AdminHome/AdminHome';
import RemoveServices from '../RemoveServices/RemoveServices';

import './Admin.css'


const Admin = () => {
    const [active, setActive] = useState('admin panel')
    return (
        <div className="row admin">
            <div className="d-flex flex-column flex-shrink-0 bg-light vh-100 col-md-1 col-3">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="nav-link active py-3 border-bottom nav-item" onClick={() => setActive('admin panel')}> <i className="fa fa-home"></i> <small>Admin Panel</small></li>


                    <li className="nav-link py-3 border-bottom" > <i className="fa fa-dashboard" ></i> <small>Dashboard</small> </li>
                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('add service to DB')}> <i className="fa fa-first-order" ></i> <small>Add Service</small></li>
                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('Remove Service')}> <i className="fa fa-cog"></i> <small>Remove Service</small> </li>

                </ul>
            </div>
            <div className="col-md-11 col-9" >
                {
                    (active === 'admin panel' && <AdminHome></AdminHome>) ||
                    (active === 'add service to DB' && <AddToDatabase></AddToDatabase>) ||
                    (active === 'Remove Service' && <RemoveServices></RemoveServices>)
                }
            </div>
        </div>
    );
};

export default Admin;