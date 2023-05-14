import React from "react";

import { Maper } from "components/Maper/Maper";

export const Home = ({ list, getId }) => {
  return (   
        <Maper data={list} onClick={getId} />   
    )
}

