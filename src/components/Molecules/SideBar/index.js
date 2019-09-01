import React from 'react';
import PNBrand from '../../../assets/img/pn_logo_blue_small.png';

const SideBar = props => {
  return (
    <div class="sidebar">
      <img style={{ width: '50px', margin: '10px' }} src={PNBrand} alt="" />
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default SideBar;
