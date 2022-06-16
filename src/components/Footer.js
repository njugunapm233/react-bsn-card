import React from 'react';
import {FaGithubSquare , FaLinkedinIn, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

function Footer(){
    return(
<main className=''>
<div className="card header-div" style={{width: '30rem'}}>
<div className="card-body">
  <hr/>
  <div class="card-footer text-muted fs-2 m-2 d-flex gap-2">
    <FaGithubSquare/>
    <FaLinkedinIn/>
    <FaTwitterSquare/>
    <FaFacebookSquare/>
  </div>
  </div>

</div>
</main>
    )

}

export default Footer