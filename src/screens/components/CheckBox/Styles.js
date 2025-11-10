import styled from 'styled-components';

export const ComponentStyles = styled.div`

margin-top: 1.5rem;
  
  label {
    position: none;
    font-size: 1rem;
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 550)};
    color: #000;

  }
  input {
    position: none;
    appearance: none;
    background-color: #fff;
    border: 1px solid #d6d7da;
    border-radius: 0.25rem;
    height: 2rem;
    width: 12rem;
    padding: 0.25rem;

    
    font-size: .875rem;

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

  .custom-control-label {
    position: none;
  }
[

]
  .custom-control-label 
    position: none;
  `;
