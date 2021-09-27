import React from 'react';
import '../App.css';

const Searchbox=({searchChange})=>{
    return(
        <div className='search pa0 ma1'>
            <input className='pa2 ma1 grow white br2ba b--white fw8 bg-transparent shadow-5' type='search' placeholder='search projects' onChange={searchChange}/>
        </div>
        
    )
}
export default Searchbox;