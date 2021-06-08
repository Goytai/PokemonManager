import React from 'react';

import * as S from './styles';

const Card: React.FC = () => {
  return (
    <S.Container>
      <img
        src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg"
        alt="Bulbasaur"
      />
      <div>
        <div>
          <h2>Bulbasaur</h2>
          <span>001</span>
        </div>
        <p>Grass, Poison</p>
        <strong>951</strong>
      </div>
    </S.Container>
  );
};

export default Card;
