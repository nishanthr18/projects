import React from 'react';
import FrontPage from './FrontPage';

const MapProjects=({Projects})=>{
    const MappingProj = Projects.map((projects, i)=>{
        return <FrontPage Title={Projects[i].Title} Description={Projects[i].Description} url={Projects[i].url} img={Projects[i].img}/>
    })
    return(
        <div>
         {MappingProj}   
        </div>
    )
}
export default MapProjects;