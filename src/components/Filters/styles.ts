import styled from 'styled-components';

import checkIcon from '../../assets/icons/check.svg';

export const Container = styled.aside`
  width: 26.8125rem;
  height: 34.75rem;

  background: ${props => props.theme.colors[1][2]};

  margin-top: 8.8125rem;
  margin-left: 3.625rem;

  border-radius: 3.125rem 0 0 3.125rem;
  padding: 2.5rem;

  h1 {
    font-size: 2.1875rem;
    line-height: 2.875rem;
    margin-bottom: 1.25rem;
  }

  form {
    h6 {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${props => props.theme.font.colors[1][1]};
      margin-bottom: 0.5rem;
    }

    div.row {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;

      input[type='number'] {
        width: 6rem;
        height: 2.125rem;

        padding-left: 0.9rem;

        border: 0.125rem solid ${props => props.theme.colors[1][3]};
        border-radius: 0.625rem;

        text-align: center;
        font-size: 1.25rem;
        font-weight: 700;

        background: none;

        margin-bottom: 2.8125rem;

        -moz-appearance: textfield;
      }
    }

    div.types {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 1.25rem;

      div.checkbox {
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        label {
          position: relative;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.3125rem;
          text-transform: capitalize;
          padding-left: 1.875rem;
          cursor: pointer;

          transition: 0.5s color, 0.5s text-shadow;

          &::before {
            content: '';
            position: absolute;
            height: 0.875rem;
            width: 0.875rem;
            border: 0.1875rem solid ${props => props.theme.colors[1][3]};
            border-radius: 0.375rem;
            top: 50%;
            left: 0;
            transform: translateY(-50%);

            transition: 0.5s background-color, 0.5s border-color,
              0.5s box-shadow;
          }
        }

        input:checked ~ label {
          color: ${props => props.theme.font.colors[2][0]};
          text-shadow: 0 0 0.375rem ${props => props.theme.colors[2][1]};

          &:before {
            border: 0.1875rem solid ${props => props.theme.colors[2][0]};
            background: ${props => props.theme.colors[1][1]};
            background-image: url(${checkIcon});
            background-repeat: no-repeat;
            background-position: center;
            box-shadow: 0 0 0.375rem ${props => props.theme.colors[2][1]};
          }
        }
      }
    }
  }

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

  @media (max-width: 1080px) {
    order: 3;
    position: absolute;
    right: -100%;
    background: white;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 0.5s transform;

    &[open='true'] {
      transform: translateX(-100%);
    }

    svg.mobileClose {
      display: block;
    }
  }
`;
