import React from "react";

import Maper from "components/Maper/Maper";

const Home = ({ list, getId }) => {
  return (   
        <Maper data={list} onClick={getId} />   
    )
}

export default Home;