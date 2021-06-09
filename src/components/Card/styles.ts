import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  min-width: 15rem;
  height: 5rem;
  padding: 0.5rem 0.9375rem 0.5rem 0.5rem;

  background: ${props => props.theme.colors[1][1]};
  border-radius: 1.25rem;

  display: flex;
  flex: 1;

  img {
    margin-right: 0.9375rem;
    width: 4rem;
    height: 4rem;
    padding: 0.3125rem;
    border: 0.0625rem solid ${props => props.theme.colors[1][3]};
    border-radius: 0.875rem;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 1rem;
      }

      span {
        font-size: 0.75rem;
        line-height: 1rem;
        color: ${props => props.theme.font.colors[1][1]};
      }
    }

    p {
      font-size: 0.75rem;
      color: ${props => props.theme.font.colors[1][1]};
    }

    strong {
      width: min-content;
      margin-top: auto;

      font-weight: 700;
      font-size: 0.875rem;
      color: ${props => props.theme.font.colors[2][1]};

      border-radius: 0.25rem;
      padding-inline: 0.9375rem;

      background: ${props => props.color};
    }
  }
`;
