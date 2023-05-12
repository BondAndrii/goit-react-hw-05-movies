import React, { useState, useEffect } from "react";

import { Maper } from "components/Maper/Maper";

import { api } from 'services/api';

export const Home = ({  getId }) => {
    const [top, setTop] = useState([]);
    
    useEffect(() => {
    api.fetchTop().then(list => {setTop(list)}).catch(error => console.log(error))    
  }, []);

    return (
        <Maper data={top} onClick={getId} />   
    )
}

