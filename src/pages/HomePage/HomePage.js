import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToPokedex } from '../../route/Coordinator'
import { goToDetails } from '../../route/Coordinator'
export default function HomePage() {
    const changeToPokedex = useNavigate()
    const changeToDetails = useNavigate()

    return(
        <div>
            HomePage
            <button onClick={() => {goToPokedex( changeToPokedex)}}>ir para pokedéx</button>
            <button onClick={() => {goToDetails(changeToDetails)}}>ir para detalhes</button>
        </div>
    )
}