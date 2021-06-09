import React, { useCallback, useRef } from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { usePoke } from '../../hooks/poke';

import { ReactComponent as MenuIcon } from '../../assets/icons/list.svg';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Filters from '../../components/Filters';

import * as S from './styles';

const Home: React.FC = () => {
  const { filteredPokemons } = usePoke();

  const navBarRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLElement>(null);

  const setOpen = useCallback((ref: React.RefObject<HTMLElement>) => {
    ref.current?.setAttribute('open', 'true');
  }, []);

  return (
    <S.Container>
      <Navbar ref={navBarRef} active={1} />

      <nav className="mobileNav">
        <button type="button" onClick={() => setOpen(navBarRef)}>
          <MenuIcon />
        </button>
        <button type="button" onClick={() => setOpen(filtersRef)}>
          <IoFilterSharp />
        </button>
      </nav>

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

      <Filters ref={filtersRef} />
    </S.Container>
  );
};

export default Home;
