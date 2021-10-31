import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Details = () => {
    const { id } = useParams();

    const [selected, setSelected] = useState({});
    console.log(id)


    useEffect(() => {
        fetch(`https://protected-beyond-83036.herokuapp.com/services/${id}`)
            .then((res) => res.json())
            .then((data) => setSelected(data));
    }, []);





    return (
        <div>
            <div className="container my-5 custom-body">
                <div className="card custom-cart mb-3">
                    <img src={selected.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h1 className="card-title">{selected.name}</h1>
                        <p className="card-text">{selected.desc}</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Details;