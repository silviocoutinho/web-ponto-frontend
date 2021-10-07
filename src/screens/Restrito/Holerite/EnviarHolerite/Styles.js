import styled from 'styled-components';

export const FormStyles = styled.div`
  font-family: 'Titillium Web', sans-serif;

  padding: 0rem;

  div {
    background-color: transparent;
  }

  .select-date-form {
    display: flex;
    flex-direction: column;
    padding: 0rem;
  }

  .button-form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-self: end;
  }

  label {
    font-size: 1.2rem;
    font-weight: bold;
    color: #4f4f4f;
    text-align: left;
    margin-bottom: 6px;
    margin-top: 12px;
    margin-left: 6px;
  }

  input {
    appearance: none;
    background-color: transparent;
    border: 1px solid #d6d7da;
    border-radius: 0.25rem;
    height: 2rem;
    width: 100%;
    padding: 0.25rem;

    

    font-size: 1rem;

    &:focus {
      border-color: #808080;
      background-color: #ffffe6;
      transition: border-color 0.3s ease-in-out;
      outline: 0;
    }

    &::placeholder {
      color: #bfbfbf;
    }

    &::after {
      content: '';
      width: 0.8em;
      height: 0.5em;
      background-color: var(--select-arrow);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }

  .react-datepicker__day--selected {
    color: #fff;
    background-color: #0d63ac;
  }
`;
