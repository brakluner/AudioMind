import React from 'react';

import dog from './dog.jpg';

// import TopCharts from './topcharts/TopCharts';
function Connect() {
   
        return (
            <div class="row">
            <div class="col s3">
              <div class="card">
                <div class="card-image">
                <img class = "activator" src='https://randomuser.me/api/portraits/men/67.jpg' alt = "dog"/>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                <span class="card-title">Bob</span>
                  <p>Singing is my passion, I would like to collaborate on Jazz or Classical compositions.</p>
                </div>
              </div>
              </div>
           
            
               <div class="col s3">
                 <div class="card">
                   <div class="card-image">
                   <img class = "activator" src='https://randomuser.me/api/portraits/women/91.jpg' alt = "dog"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                   </div>
                   <div class="card-content">
                       <span class="card-title">Lillian</span>
                     <p>I can play several instruments, but my favorite is the drums. I would love to create beats to back up your next track!</p>
                   </div>
                 </div>
               </div>
            
                      
           
               <div class="col s3">
                 <div class="card">
                   <div class="card-image">
                   <img class = "activator" src='https://randomuser.me/api/portraits/men/16.jpg' alt = "dog"/>
                     
                     <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                   </div>
                   <div class="card-content">
                   <span class="card-title">Jack</span>
                     <p>Hey there! I have been singing and playing the guitar since I was four, and mainly perform at bars and family events. connect with me and lets rock!</p>
                   </div>
                 </div>
               </div>
             
                      
           </div>
        )
    
}
export default Connect;



        