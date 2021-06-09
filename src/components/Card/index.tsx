import React, { useMemo } from 'react';
import { PokemonData } from '../../hooks/poke';

import * as S from './styles';

interface CardProps {
  pokemon: PokemonData;
}

const colors = ['#F87060', '#662C91', '#F5B700', '#00C1FD'];

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const color = useMemo(() => {
    const colorIndex = Math.floor((pokemon.maxCP - 1) / 500);

    return colors[colorIndex] || colors[colors.length - 1];
  }, [pokemon.maxCP]);

  return (
    <S.Container color={color}>
      <img src={pokemon.image} alt={pokemon.name} />
      <div>
        <div>
          <h2>{pokemon.name}</h2>
          <span>{pokemon.number}</span>
        </div>
        <p>{pokemon.types.join(', ')}</p>
        <strong>{pokemon.maxCP}</strong>
      </div>
    </S.Container>
  );
};

export default Card;
