import React from 'react';

const ContactUs = () => {
    return (
        <div className="custom-body">
            <h1>Contact</h1>
        </div>
    );
};

export default ContactUs;



// import React from 'react';
// import './ContactUs.css'
// import map from './../../assets/images/map.jpg'


// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//     width: '600px',
//     height: '600px'
// };

// const center = {
//     lat: 23.7181758,
//     lng: 90.3866074
// };




// const ContactUs = () => {
//     return (
//         <div>
//             <section id="contact ">
//                 <div class="container custom-body align-items-center  mt-5">
//                     <div class="d-flex my-5 justify-content-center"><h1>Contact Us</h1></div>


//                     <div class="row mt-5 align-items-center">
//                         <div class="well well-sm">
//                             <h3><strong>Our Location</strong></h3>
//                         </div>
//                         <div class="col-md-7 d-flex ">
//                             <LoadScript
//                                 googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
//                             >
//                                 <GoogleMap
//                                     mapContainerStyle={containerStyle}
//                                     center={center}
//                                     zoom={10}
//                                 >
//                                     { /* Child components, such as markers, info windows, etc. */}
//                                     <></>
//                                 </GoogleMap>
//                             </LoadScript>

//                         </div>

//                         <div class="col-md-5">
//                             <h4><strong>Get in Touch</strong></h4>
//                             <form>
//                                 <div class="form-group p-2">
//                                     <input type="text" class="form-control" name="" value="" placeholder="Name" />
//                                 </div>
//                                 <div class="form-group p-2">
//                                     <input type="email" class="form-control" name="" value="" placeholder="E-mail" public />
//                                 </div>
//                                 <div class="form-group p-2">
//                                     <input type="tel" class="form-control" name="" value="" placeholder="Phone" />
//                                 </div>
//                                 <div class="form-group p-2">
//                                     <textarea class="form-control" name="" rows="3" placeholder="Message"></textarea>
//                                 </div>
//                                 <div class="form-group p-2">
//                                     <button class="btn btn-default btn-grad" type="submit" name="button">
//                                         <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
//                                     </button>
//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section >
//         </div >
//     );
// };

// export default ContactUs;

