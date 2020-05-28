import React from 'react';

import dog from './dog.jpg';

// import TopCharts from './topcharts/TopCharts';
function Connect() {
   
        return (
            <div class="row">
            <div class="col s3">
              <div class="card">
                <div class="card-image">
                <img class = "activator" src={dog} alt = "dog"/>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                <span class="card-title">Bob</span>
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
              </div>
           
            
               <div class="col s3">
                 <div class="card">
                   <div class="card-image">
                   <img class = "activator" src={dog} alt = "dog"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                   </div>
                   <div class="card-content">
                       <span class="card-title">Lillian</span>
                     <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                   </div>
                 </div>
               </div>
            
                      
           
               <div class="col s3">
                 <div class="card">
                   <div class="card-image">
                   <img class = "activator" src={dog} alt = "dog"/>
                     
                     <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                   </div>
                   <div class="card-content">
                   <span class="card-title">Jack</span>
                     <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                   </div>
                 </div>
               </div>
             
                      
           </div>
        )
    
}
export default Connect;



        