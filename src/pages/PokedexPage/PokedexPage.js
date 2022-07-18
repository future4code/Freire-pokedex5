import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToHomePage } from '../../route/Coordinator'
import { goToDetails } from '../../route/Coordinator'
export default function PokedexPage() {
    const changeToHome = useNavigate()
    const changeToDetails = useNavigate()
    return(
        <div>
            PokedexPage
            <button onClick={() => {goToHomePage( changeToHome)}}>ir para home</button>
            <button onClick={() => {goToDetails(changeToDetails)}}>ir para detalhes</button>
        </div>
    )
}