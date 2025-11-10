import styled from 'styled-components';

export const ComponentStyles = styled.div`

  display: inline-block;
  position: relative;

  .form-column-date {
    
  }

  input {
    appearance: none;
    background-color: #fff;
    border: 1px solid #d6d7da;
    border-radius: 0.5rem;
    height: ${props => (props.height ? props.height : '2rem')};    
    width: 12rem;
    padding: 0.25rem;
    font-size: ${props => (props.fontSize ? props.fontSize : '0.875rem')};

    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;    
    background-position-y: ${props => (props.positionIcon ? props.positionIcon : '.25rem')};

    

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
    color: #6c757d;
    background-color: #0d63ac;
  }

  .react-datepicker {
    position: relative ;
    background-color: #fff !important ;
    
  }

  .react-datepicker-popper {
    z-index: 3;
  }

  .react-datepicker__input-container{
    margin-right: 1rem;
  }
  
  `;
