import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img 
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
                    alt="Airbnb" 
                    className="header__icon"
                />
            </Link>

            <div className="header__center">
                <input type="text" placeholder="Start Your Search" />
                <SearchIcon style={{
                    color: '#fff',
                    backgroundColor: '#FF385C',
                    padding: '8px',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%'
                }}/>
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
