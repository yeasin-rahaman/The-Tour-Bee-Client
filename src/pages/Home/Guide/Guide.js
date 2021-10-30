import React from 'react';
import GuideImg from './../../../assets/images/Guide.jpg'

const Guide = () => {
    return (
        <div className="container py-5">
            <div class="d-flex mt-5 justify-content-center "><h1>Tourist Guides</h1></div>
            <div class="card mb-12 mt-5" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={GuideImg} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 d-flex align-items-center ">
                        <div class="card-body ">
                            <h5 class="card-title">About Our Tourist Guides</h5>
                            <br />
                            <p class="card-text">Tour guides, or tourist guides, are members of the hospitality and travel industry who show visitors around places of interest. Tour guides may lead groups or individuals through historical sites, museums, geographic destinations and on outdoor excursions. Typically, tour guides posses relevant cultural, historical and practical knowledge they can share with tourists. Companies and organizations often hire guides to provide a worthwhile experience for guests, guides may possess exceptional knowledge and skill about their chosen destination, culture or recreational activity.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;