import React from 'react'
import {useNavigate} from 'react-router-dom'
import { goToHomePage } from '../../route/Coordinator'

export default function DetailsPage() {
   const changeToHome = useNavigate()
    return(
        <div>
            <header>

                <h4> Detalhes </h4>

            
            <button onClick={() => {goToHomePage(changeToHome)}}>ir para home</button>

            
            </header>
        </div>
    )
}