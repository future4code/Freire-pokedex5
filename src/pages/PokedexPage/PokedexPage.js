import React from 'react'
import logo from './img/logo.png'
import Home from './img/home.png'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../route/Coordinator'
import './PKD.css' 



export default function PokedexPage() {
    const changeToHome = useNavigate()

    return(
        <div>
            <div className='headPKD'>
                <button className='BtnHomePKD' onClick={() => {goToHomePage( changeToHome)}}>
                    <img className='imgBTNhome' src={Home}/>
                </button>
                
                <img className='logoPKD' src={logo}/>
                
            </div>
            <div className='Navbar'>
                <div className='card1'>
                    teste
                
                </div>
            </div>
            



        </div>
    )
}