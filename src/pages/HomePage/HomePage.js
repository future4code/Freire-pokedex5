import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToPokedex } from '../../route/Coordinator'
import { goToDetails } from '../../route/Coordinator'
import logo from '../PokedexPage/img/logo.png'


export default function HomePage() {
    const changeToPokedex = useNavigate()
    const changeToDetails = useNavigate()

    return(
        <div>
            <div>
                <div className='headHome'>
                    <img className='logoHome' src={logo}/>
                    <button className='btnPokedex' onClick={() => {goToPokedex( changeToPokedex)}}><a className='pokedex'>pokedéx</a></button>
                </div>
            </div>
                <br/>
            <div className='Navbar'>    
                <div className='cardHome'>
                    <button onClick={() => {goToDetails(changeToDetails)}}>ir para detalhes</button>
                </div>
            </div>
        </div>
    )
}