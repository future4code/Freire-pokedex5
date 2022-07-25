import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../route/Coordinator'
import { goToDetails } from '../../route/Coordinator'
import { CardPokemonPokedexPage } from '../../components/cardPokemonPokedexPage/CardPokemonPokedexPage'
import {Div, Img, Container, Conteudo, Button, Divao, P} from "./styled";
import logoPokemon from "../../constants/img/logoPokemon.png";
export default function PokedexPage(props) {
    const changeToHome = useNavigate()
    const removePokemon = (id) => {
        const newArray = props.pokemonList.filter((pokemon) => {
            return pokemon.id !== id
            
        })
        props.setPokemonList(newArray)
      }

    const pokeList = props.pokemonList.map((pokemon) => {
        return( 
            <CardPokemonPokedexPage pokemon = {pokemon} goToDetails = {goToDetails} removePokemon = {removePokemon}/>
        )
    })
    return(
      
<Divao>
        <Div>
        <Conteudo>
        <Img src={logoPokemon} alt="" />
          <Button
            onClick={() => {goToHomePage( changeToHome)}}
          > Todos Pokemons
          </Button>
        {/* <button onClick={() => {goToDetails(changeToDetails)}}>ir para detalhes</button> */}
        </Conteudo>
           
            <Container>{pokeList.length > 0 ? pokeList : <P>Você não possui Pokémons</P>}</Container>
           
       
      </Div>
</Divao>