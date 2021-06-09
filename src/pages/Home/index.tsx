import React from 'react';
import { usePoke } from '../../hooks/poke';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Filters from '../../components/Filters';

import * as S from './styles';

const Home: React.FC = () => {
  const { filteredPokemons } = usePoke();

  return (
    <S.Container>
      <Navbar active={1} />

      <S.Main>
        <header>
          <h1>Lista de pokémons</h1>
          <p>Total visíveis: {filteredPokemons.length}</p>
        </header>
        <section>
          {filteredPokemons.map(pokemon => (
            <Card pokemon={pokemon} key={pokemon.id} />
          ))}
        </section>
      </S.Main>

      <Filters />
    </S.Container>
  );
};

export default Home;
