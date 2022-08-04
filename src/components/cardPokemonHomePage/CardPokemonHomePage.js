import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {Div, Img, Container, Dib, P, P1, Dib1, Name, Number, Button, Button1} from "./styled";
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

export const CardPokemonHomePage = (props) => {
  const changeToDetails = useNavigate()
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonPhoto, setPokemonPhoto] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [background, setBackground] = useState("");
  const [background1, setBackground1] = useState("");
  const getPokemonDetails = () => {
    // setIsLoading(true);
    axios
      .get(props.pokemon.url)
      .then((res) => {
        setPokemonType(res.data.types);
        setPokemonDetail(res.data);
        // setIsLoading(false);
        setPokemonPhoto(res.data.sprites.other.home.front_default);
        setBackground(res.data.types[0].type.name);
        setBackground1(res.data.types[1]?.type.name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getPokemonDetails();
  }, []);

  let pokeType;
  if (background1 === "grass") {
    pokeType = grassIcon;
  }
  if (background1 === "water") {
    pokeType = waterIcon;
  }
  if (background1 === "poison") {// poderia ter feito um switch case
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
  const capturedPokemon = (id) => {
      alert(` ${pokemonDetail.name} foi adicionado a sua Pokédex!`)
      const newArray = [...props.pokemonList, id ]
      props.setPokemonList(newArray)
      
  } 
  
  return (
    <Div background={background}>
      <Number>#{pokemonDetail.id}</Number> <Name>{pokemonDetail.name && pokemonDetail.name[0].toUpperCase() + pokemonDetail.name.substr(1)}</Name>{" "}
      <Img src={pokemonPhoto} alt="" />
      <Container>
        {pokemonType && pokemonType[0] && (
          <Dib background={pokemonType[0].type.name} img={pokeType1}>
            {" "}
            <P>{pokemonType[0].type.name}</P>
          </Dib>
        )}
        {pokemonType && pokemonType[0] && pokemonType[1] && (
          <Dib1 background={pokemonType[1].type.name} img={pokeType}>
            {" "}
            <P1>{pokemonType[1].type.name}</P1>
          </Dib1>
        )}
        <Button onClick={() => {props.goToDetails(changeToDetails)}}>Detalhes</Button>
        <Button1 onClick = {() => capturedPokemon(pokemonDetail)}>capturar!</Button1>
      </Container>
    </Div>
  );
};
