import React from 'react';
import {FaGithubSquare , FaLinkedinIn, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

function Footer(){
    return(

<div className="card-body">
  <hr/>
  <div class="position-relative card-footer text-muted fs-2 m-2 d-flex gap-3">
    <FaGithubSquare/>
    <FaLinkedinIn/>
    <FaTwitterSquare/>
    <FaFacebookSquare/>
  </div>
  </div>

    )

}

export default Footer