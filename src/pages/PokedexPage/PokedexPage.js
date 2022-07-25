import React from 'react'
import logo from './img/logo.png'
import Home from './img/home.png'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../route/Coordinator'
import './PKD.css' 



export default function PokedexPage () {
    const changeToHome = useNavigate()


        const pokedexStorage = JSON.parse(localStorage.getItem('pokedex'))
      
        const pokemonsList = pokedexStorage.map(pokemon => {
          return (
            <div key={pokemon.name}>
              <PokemonCard pokeName={pokemon} />
            </div>
          )
        })

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
                    <ContainerGrid>{pokemonsList}</ContainerGrid>
                </div>
            </div>
            



        </div>
    )
}