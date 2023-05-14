import React, {Suspense} from "react";

import {Outlet} from "react-router-dom";

const Movies = () => { 
   return (
        <div>            
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>        
        </div>
    )
}
export default Movies