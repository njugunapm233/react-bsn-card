import React from 'react'

import About from './About';
import Interest from './Interest';
import Footer from './Footer';

import { FaNetworkWired, FaLinkedinIn } from 'react-icons/fa';


import Cat from './cat.jpg';

import './App.css'

function Info(){
    return(
<header className='Container'>
<div className="card header-div" style={{width: '30rem'}}>
  <img src={Cat} className="card-img-top" alt="my pic"></img>
  <div className="card-body">
  <h5 className="card-title text-center">Peter Dev</h5>
  <hr/>
  <div class="position-relative d-grid gap-2 d-md-block">
  <button class="btn btn-primary  m-3" type="button"><FaNetworkWired/> Portfolio</button>
  <button class="btn btn-secondary  m-3" type="button"><FaLinkedinIn/> Linkedln</button>
</div>
<About/>
<Interest/>
<Footer/>
  </div>
</div>
</header>
)
}

export default Info