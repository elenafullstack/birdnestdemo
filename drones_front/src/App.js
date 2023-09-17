
import React  from 'react'

import './App.css';


const App = () => {


  return (

    <div class="container-fluid">

      <div class="container">
        
        <div class="my-2 sticky-top border-bottom bg-white">
          <h1 class="page-header text-primary text-center display-4">Birdnest</h1>
        </div>
        
        {/* <p class="py-4 text-center">This application is an assignment for a developer trainee position. The instructions of the assignment can be found <a href="https://assignments.reaktor.com/birdnest">here</a>.The application lists all the pilots that have been flying their drone in the no drone zone (NDZ) during the last 10 minutes. If
        the pilot information of the drone was not found, it is not shown. The pilots are sorted so, that the pilots that were last seen on the zone are shown first. The closest distance of the pilot is measured since the moment the pilot was first detected.
        The pilot information is obtained 10 minutes since the moment the pilot was last detected on the zone. The closest distance confirmed to the nest is the closest distance that has been detected during the time the application has been running.</p> */}
        <p class="py-4 text-center">Regrettably, the application is currently inactive as the API it relied on has been discontinued. To showcase the assignment, this page features a video demonstrating the application when it was fully operational. Additionally, images of the original assignment's instructions have been included. You can find the code of the original assignment in my github <a href="https://github.com/elenafullstack/birdnest">here</a> However, it is in my future interest to build my own API that could demonstrate the original assingment better.</p>
        <div class="vide">
        <video controls width="800">
        <source src={require('./birdnest.mp4')} type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>
      </div>

        <div class="instructions">
          <h1 class="page-header text-primary text-center display-4">Instructions of the assignment</h1>
          <div class="photo">
          <img  src={require('./img/1.png')}/>
          </div>
          <div class="photo">
          <img  src={require('./img/2.png')}/>
          </div>
          <div class="photo">
          <img  src={require('./img/3.png')}/>
          </div>
          <div class="photo">
          <img  src={require('./img/4.png')}/>
          </div>
          <div class="photo">
          <img  src={require('./img/5.png')}/>
          </div>
        </div>
       
{/* 
        <div class="mb-5 text-center">

          <ClosestDrone closest={closestDrone}/>

        </div> */}
{/* 
        <h1 class="text-center">All pilots in the NDZ zone during the last 10 minutes</h1>

        <div class="table-responsive">

          <table class="table table-bordered mt-4">

            <thead>

              <tr>
                <th class="p-3">Pilot name</th>
                <th class="p-3">Email</th>
                <th class="p-3">Phone number</th>
                <th class="p-3">Closest distance</th>
                <th class="p-3">First seen</th>
                <th class="p-3">Last seen</th>
              </tr>

            </thead>

            <tbody class="">

              {[...drones].sort(sortBy('timeLast')).reverse().map(x=> <Drone key= {x.serialNumber} drone = {x}/>)}

            </tbody>

          </table> */}

        </div>

      </div>



  )

}

export default App
