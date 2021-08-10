import styled, { css } from 'styled-components';
import { light as theme } from '../theme';

export const Wrapper = styled.div`
  font-family: 'Titillium Web', sans-serif;

  .grid-container {
    background-color: transparent;
    padding: 1rem;
  }

  .grid-container > div {
    background-color: transparent;
    text-align: center;
  }

  .select-container {
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

  select {
    appearance: none;
    background-color: transparent;
    border: 1px solid ${theme.colors.border};
    border-radius: 0.25rem;
    height: 2rem;
    padding: 0.25rem;

    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 0.25rem;

    font-size: 1rem;

    &:focus {
      border-color: ${theme.colors.focusedBorder};
      background-color: ${theme.colors.focusedBackgroud};
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }

    &::placeholder {
      color: ${theme.colors.placeholder};
    }

    &::after {
      content: '';
      width: 0.8em;
      height: 0.5em;
      background-color: var(--select-arrow);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }
`;
