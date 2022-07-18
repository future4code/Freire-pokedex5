import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage/>}/>
                <Route path='pokedex' element = {<PokedexPage/>}/>
                <Route path='detalhes' element = {<DetailsPage/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}