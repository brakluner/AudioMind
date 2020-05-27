import React from 'react';
import { Link} from "react-router-dom";


function Signin() {
   
        return (
            <div class="row">
           <h1>

               You are now signed out.

           </h1>

           <button ><Link to = "/">Sign In</Link></button>
             
                      
           </div>
        )
    
}
export default Signin;
