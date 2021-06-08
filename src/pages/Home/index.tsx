import React from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Filters from '../../components/Filters';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Navbar active={1} />

      <S.Main>
        <header>
          <h1>Lista de pokémons</h1>
          <p>Total visíveis: 154</p>
        </header>
        <section>
          {[...Array(20)].map((pokemon, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card key={index} />
          ))}
        </section>
      </S.Main>

      <Filters />
    </S.Container>
  );
};

export default Home;
