import React from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </S.Main>
    </S.Container>
  );
};

export default Home;
