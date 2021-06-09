import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { VscChromeClose } from 'react-icons/vsc';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as ListIcon } from '../../assets/icons/list.svg';
import { ReactComponent as TrophyIcon } from '../../assets/icons/trophy.svg';
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg';
import { ReactComponent as HelpIcon } from '../../assets/icons/help.svg';

import * as S from './styles';
import mergeRefs from '../../utils/margeRef';

interface NavBar {
  active?: number;
}

const Navbar = React.forwardRef<HTMLDivElement, NavBar>(({ active }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const closeNavbar = useCallback(() => {
    containerRef.current?.removeAttribute('open');
  }, []);

  return (
    <S.Container ref={mergeRefs(ref, containerRef)}>
      <VscChromeClose onClick={closeNavbar} className="mobileClose" />

      <header>
        <S.Logo />
        <div>
          <h2>Voltbras App</h2>
          <p>Pokémon Manager</p>
        </div>
      </header>

      <S.Nav active={active}>
        <Link to="/">
          <ListIcon />
          Lista
        </Link>
        <Link to="/">
          <TrophyIcon />
          Conquista
        </Link>
        <Link to="/">
          <DashboardIcon />
          Pokédex
        </Link>
        <Link to="/">
          <HelpIcon />
          Ajuda
        </Link>
        <Link to="/">
          <SettingsIcon />
          Configurações
        </Link>
      </S.Nav>

      <footer>
        <span>Versão 5.12.485</span>
      </footer>
    </S.Container>
  );
});

export default Navbar;
