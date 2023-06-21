import '../styles/navigations.scss';
import logo from '../images/logo.png';
import React from 'react';
import searchIcon from '../images/searchIcon.png';
import Menu from './Menu.js';

function Navigation(){
    return(
        <div className='navigation'>
            <div className='container'>
                <img className='logo' src={logo} alt='instlogo'/>
                <div className='search'>
                    <img className="searchIcon" src={searchIcon} alt='search'/> 
                    <span className='searchText'>Search</span>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default Navigation