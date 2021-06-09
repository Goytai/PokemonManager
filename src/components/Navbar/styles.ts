import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/logo.svg';

interface NavbarProps {
  active?: number;
}

export const Container = styled.div`
  width: 18rem;
  height: 100vh;

  padding: 7.3125rem 1.875rem 2.3125rem 1.875rem;

  display: flex;
  flex-direction: column;

  svg.mobileClose {
    display: none;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    right: 2.625rem;
    top: 2.625rem;
    box-sizing: content-box;
    padding: 1rem;
    fill: ${props => props.theme.font.colors[1][0]};
  }

  header {
    display: flex;
    gap: 0.625rem;

    font-size: 0.66rem;
    font-weight: 600;

    margin-bottom: 2.8125rem;

    p {
      font-size: 0.75rem;
      color: ${props => props.theme.font.colors[1][1]};
    }
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  footer {
    font-size: 1rem;
    color: ${props => props.theme.font.colors[1][1]};

    padding-inline: 0.9375rem;
    margin-top: auto;
  }

  @media (max-width: 1080px) {
    order: 1;
    position: absolute;
    left: -100%;
    background: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s transform;

    &[open='true'] {
      transform: translateX(100%);
    }

    svg.mobileClose {
      display: block;
    }
  }
`;

export const Logo = styled(logo)`
  width: 3.25rem;
  height: 3.25rem;
`;

export const Nav = styled.nav<NavbarProps>`
  a {
    position: relative;

    font-size: 1rem;
    color: ${props => props.theme.font.colors[1][1]};

    display: grid;
    gap: 0.625rem;
    grid-template-columns: 3.25rem 1fr;
    grid-auto-rows: min-content;

    padding-block: 1.1875rem;
    align-items: center;

    transition: 0.5s color;

    svg {
      box-sizing: content-box;
      place-self: center;

      transition: 0.5s fill;

      width: 1.125rem;
      height: 1.125rem;

      fill: ${props => props.theme.colors[1][0]};
    }

    &:hover {
      color: black;

      svg {
        fill: black;
      }
    }

    &:nth-of-type(${props => props.active}) {
      font-weight: 700;
      color: ${props => props.theme.font.colors[2][0]};
      text-shadow: 0 0 0.375rem ${props => props.theme.colors[2][1]};

      svg {
        fill: ${props => props.theme.colors[1][1]};
      }

      &::before {
        content: '';
        z-index: -1;
        position: absolute;

        width: 2.25rem;
        height: 2.25rem;
        margin-left: 0.5rem;

        border-radius: 0.8125rem;
        box-shadow: 0 0 0.375rem ${props => props.theme.colors[2][2]};

        background: ${props => props.theme.colors[2][0]};
      }
    }
  }
`;
