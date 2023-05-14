import React from "react";

import { Maper } from "components/Maper/Maper";

export const Home = ({forMaperList, getId}) => {
  //   const [top, setTop] = useState([]);
    
  //   useEffect(() => {
  //   api.fetchTop().then(list => {setTop(list)}).catch(error => console.log(error))    
  // }, []);

    return (
        <Maper data={forMaperList} onClick={getId} />   
    )
}

