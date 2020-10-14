import React from 'react';
import './header.scss';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import  {common}  from '@material-ui/core/colors';
import {NavLink} from 'react-router-dom';



const Header = () => { 
    return (
        <header className="header">
            <div className="header__row">
                <div className="header__logo">                  
                   <a href="#">
                   <PermIdentityIcon color="disabled" fontSize="large"  style={{ color: common.white }}/>
                   </a>                   
                </div>
                <div className="header__nav">
                    <div className="header__body">
                            <span><NavLink to="#" >Profile</NavLink></span>
                            <span><NavLink to="#">Messages</NavLink></span>
                            <span><NavLink to="#">News</NavLink></span>
                            <span><NavLink to="/posts"   activeClassName = "selected">Posts</NavLink></span>
                            <span><NavLink to="/dialogs" activeClassName = "selected">Dialogs</NavLink></span>
                            <span><NavLink to="">Music</NavLink></span>
                            <span><NavLink to="">Settings</NavLink></span> 
                    </div>
                </div>
            </div>
        </header>   
    )
}

export default Header;

        