import { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://protected-beyond-83036.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return { services, setServices }
};

export default UseServices;