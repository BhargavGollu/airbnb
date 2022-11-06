import React from 'react'

import './index.css'

import {GrLanguage} from 'react-icons/gr'
import {IoIosContact} from 'react-icons/io'
import {FaHamburger} from 'react-icons/fa'



function Header() {
    return (
        <div className='header'>
            
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            
           
            

            <div className='header__right'>
                <p>Become a host</p>
                <GrLanguage/>
                <div className='combined-icons'>
                <FaHamburger/>
                <IoIosContact/>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Header