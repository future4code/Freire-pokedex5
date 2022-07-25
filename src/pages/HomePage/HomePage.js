import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../route/Coordinator";
import { CardPokemonHomePage } from "../../components/cardPokemonHomePage/CardPokemonHomePage";
import axios from "axios";
import {Div, Img, Container, Conteudo, Button} from "./styled";
import Pagination from "../../pagination/Pagination";
import logoPokemon from "../../constants/img/logoPokemon.png";


export default function HomePage(props) {
  const changeToPokedex = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itensPerPage = 21;

  const onLeftClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClick = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  const getPokemons = () => {
    setIsLoading(true);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${
          page * itensPerPage
        }&limit=${itensPerPage}`
      )
      .then((res) => {
        setPokemons(res.data.results);
        setTotalPages(Math.ceil(res.data.count / itensPerPage));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getPokemons();
  }, [page]);

  const pokemonLists = pokemons.map((pokemon) => {
    return (
      <CardPokemonHomePage
        key={pokemon.name}
        pokemon={pokemon}
        goToDetails={goToDetails}
        pokemonList = {props.pokemonList}
        setPokemonList = {props.setPokemonList}
      />
    );
  });

  return (
    <Div>
      <div>
        <Img src={logoPokemon} alt="" />
        <Button
          onClick={() => {
            goToPokedex(changeToPokedex);
          }}
        >
          pokedéx
        </Button>
      </div>
      <Conteudo>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
      </Conteudo>

      <Container>{isloading ? <p>carregando...</p> : pokemonLists}</Container>
    </Div>
  );
}
