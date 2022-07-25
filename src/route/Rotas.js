import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
export default function Rotas() {
    const [pokemonList, setPokemonList] = useState([]);
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage pokemonList = {pokemonList} setPokemonList = {setPokemonList}/>}/>
                <Route path='pokedex' element = {<PokedexPage pokemonList = {pokemonList} setPokemonList = {setPokemonList} />}/>
                <Route path='detalhes' element = {<DetailsPage/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}