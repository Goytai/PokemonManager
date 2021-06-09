import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  nav.mobileNav {
    display: none;
    height: 5rem;
    align-items: center;
    justify-content: space-between;
    margin-inline: 5.125rem;

    button {
      border: 0;
      background: 0;
      padding: 1rem;

      svg {
        width: 1.25rem;
        height: 1.25rem;
        fill: ${props => props.theme.font.colors[1][0]};
      }
    }
  }

  @media (max-width: 1366px) {
    flex-direction: column;

    nav.mobileNav {
      display: flex;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  min-width: 37.25rem;
  margin-top: 3.125rem;

  padding: 2.5rem 1.25rem 0 2.5rem;
  border-radius: 3.125rem 3.125rem 0 0;

  background: ${props => props.theme.colors[1][2]};

  header {
    width: 100%;

    h1 {
      font-size: 2.1875rem;
      line-height: 2.875rem;
    }

    p {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${props => props.theme.colors[2][0]};

      margin-bottom: 1.9375rem;
    }
  }

  section {
    height: calc(100vh - 14.0625rem);
    gap: 0.9375rem;

    overflow: auto;

    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-content: flex-start;

    padding-right: 1.8125rem;

    &::-webkit-scrollbar {
      width: 0.75rem;
    }

    &::-webkit-scrollbar-track {
      background: ${props => props.theme.colors[1][1]};
      border-radius: 0.5625rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors[1][3]};
      border-radius: 0.375rem;
    }
  }

  @media (max-width: 1366px) {
    margin-top: 0;
    margin-inline: 3.625rem;
  }

  @media (max-width: 720px) {
    width: 100%;
    margin: 0;
    min-width: 15rem;
  }
`;
