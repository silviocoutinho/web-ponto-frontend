import styled, { css } from 'styled-components';
import { light as theme } from '../theme';

export const Wrapper2 = styled.div`
  font-family: 'Titillium Web', sans-serif;

  .grid-container-file-upload {
    background-color: transparent;
    padding: 1rem;
  }

  .grid-container-file-upload > div {
    background-color: transparent;
    text-align: center;
  }

  .select-container-file-upload {
    display: flex;
    flex-direction: column;
    padding: 0rem;
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${theme.colors.label};
    text-align: left;
    margin-bottom: 6px;
    margin-top: 12px;
    margin-left: 6px;
  }

  input {
    appearance: none;
    background-color: transparent;
    border: 1px solid ${theme.colors.border};
    border-radius: 0.25rem;
    height: 2rem;
    padding: 0.25rem;
    font-size: 1rem;

    background-image: none;

    &:focus {
      border-color: ${theme.colors.focusedBorder};
      background-color: ${theme.colors.focusedBackgroud};
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }

    &::placeholder {
      color: ${theme.colors.placeholder};
    }
  }
`;
