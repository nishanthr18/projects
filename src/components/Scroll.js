import React from 'react';

const Scroll=(props)=>{
    return(
        <div className='border' style={{overflowY:'scroll', border:'3px solid white', height:'450px'}}>
            {props.children}
        </div>
    )
}
export default Scroll;