import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  width: 37.25rem;
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
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 0.9375rem;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: ${props => props.theme.colors[1][1]};
      border-radius: 0.5625rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors[1][3]};
      border-radius: 6px;
    }
  }
`;
