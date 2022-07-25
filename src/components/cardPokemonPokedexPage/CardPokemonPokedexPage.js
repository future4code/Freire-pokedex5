import React from 'react'
import {Div, Img, Container, Dib, P, P1, Dib1, Name, Number, Button, Button1} from "./styled";
import {useNavigate} from 'react-router-dom'
import bugIcon from "../../constants/img/bugIcon.png";
import fireIcon from "../../constants/img/fireIcon.png";
import waterIcon from "../../constants/img/waterIcon.png";
import poisonIcon from "../../constants/img/poisonIcon.png";
import darkIcon from "../../constants/img/darkIcon.png";
import dragonIcon from "../../constants/img/dragonIcon.png";
import electricIcon from "../../constants/img/electricIcon.png";
import fairyIcon from "../../constants/img/fairyIcon.png";
import fightingIcon from "../../constants/img/fightingIcon.png";
import flyingIcon from "../../constants/img/flyingIcon.png";
import ghostIcon from "../../constants/img/ghostIcon.png";
import grassIcon from "../../constants/img/grassIcon.png";
import groundIcon from "../../constants/img/groundIcon.png";
import normalIcon from "../../constants/img/normalIcon.png";
import psychicIcon from "../../constants/img/psychicIcon.png";
import rockIcon from "../../constants/img/rockIcon.png";
import steelIcon from "../../constants/img/steelIcon.png";

export const CardPokemonPokedexPage = (props) => {
    const changeToDetails = useNavigate()
    let background = props.pokemon?.types[0]?.type.name
    let background1 = props.pokemon?.types[1]?.type.name
    let pokeType;
    if (background1 === "grass") {
      pokeType = grassIcon;
    }
    if (background1 === "water") {
      pokeType = waterIcon;
    }
    if (background1 === "poison") {
      pokeType = poisonIcon;
    }
    if (background1 === "flying") {
      pokeType = flyingIcon;
    }
    if (background1 === "fire") {
      pokeType = fireIcon;
    }
    if (background1 === "bug") {
      pokeType = bugIcon;
    }
    if (background1 === "normal") {
      pokeType = normalIcon;
    }
    if (background1 === "dark") {
      pokeType = darkIcon;
    }
    if (background1 === "dragon") {
      pokeType = dragonIcon;
    }
    if (background1 === "electric") {
      pokeType = electricIcon;
    }
    if (background1 === "fairy") {
      pokeType = fairyIcon;
    }
    if (background1 === "fighting") {
      pokeType = fightingIcon;
    }
    if (background1 === "ghost") {
      pokeType = ghostIcon;
    }
    if (background1 === "ground") {
      pokeType = groundIcon;
    }
    if (background1 === "ice") {
      pokeType = fairyIcon;
    }
    if (background1 === "psychic") {
      pokeType = psychicIcon;
    }
    if (background1 === "rock") {
      pokeType = rockIcon;
    }
    if (background1 === "steel") {
      pokeType = steelIcon;
    }
    let pokeType1;
    if (background === "grass") {
      pokeType1 = grassIcon;
    }
    if (background === "water") {
      pokeType1 = waterIcon;
    }
    if (background === "poison") {
      pokeType1 = poisonIcon;
    }
    if (background === "flying") {
      pokeType1 = flyingIcon;
    }
    if (background === "fire") {
      pokeType1 = fireIcon;
    }
    if (background === "bug") {
      pokeType1 = bugIcon;
    }
    if (background === "normal") {
      pokeType1 = normalIcon;
    }
    if (background === "dark") {
      pokeType1 = darkIcon;
    }
    if (background === "dragon") {
      pokeType1 = dragonIcon;
    }
    if (background === "electric") {
      pokeType1 = electricIcon;
    }
    if (background === "fairy") {
      pokeType1 = fairyIcon;
    }
    if (background === "fighting") {
      pokeType1 = fightingIcon;
    }
    if (background === "ghost") {
      pokeType1 = ghostIcon;
    }
    if (background === "ground") {
      pokeType1 = groundIcon;
    }
    if (background === "ice") {
      pokeType1 = fairyIcon;
    }
    if (background === "psychic") {
      pokeType1 = psychicIcon;
    }
    if (background === "rock") {
      pokeType1 = rockIcon;
    }
    if (background === "steel") {
      pokeType1 = steelIcon;
    }
    
    return(
        <Div background={props.pokemon.types[0].type.name}>
      <Number>#{props.pokemon.id}</Number> <Name>{props.pokemon.name && props.pokemon.name[0].toUpperCase() + props.pokemon.name.substr(1)}</Name>{" "}
      <Img src={props.pokemon.sprites.other.home.front_default} alt="" />
      <Container>
        {props.pokemon.types && props.pokemon.types[0] && (
          <Dib background={props.pokemon.types[0].type.name} img={pokeType1}>
            {" "}
            <P>{props.pokemon.types[0].type.name}</P>
          </Dib>
        )}
        {props.pokemon.types && props.pokemon.types[0] && props.pokemon.types[1] && (
          <Dib1 background={props.pokemon.types[1].type.name} img={pokeType}>
            {" "}
            <P1>{props.pokemon.types[1].type.name}</P1>
          </Dib1>
        )}
        <Button onClick={() => {props.goToDetails(changeToDetails)}}>Detalhes</Button>
        <Button1 onClick = {() => {props.removePokemon(props.pokemon.id)}} >Excluir</Button1>
      </Container>
    </Div>
    )
}