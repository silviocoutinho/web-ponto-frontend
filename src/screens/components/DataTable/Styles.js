import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Titillium Web', sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1;

  .button-action {
    width: 55% ;
  }
  .column-action {
    width: 10rem ;
  }

  .pagination-button {
    border: 0;
    font-weight:400; 
    background-color: #b8dcf9 ;
    float: right;
    margin-right: 0rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 2rem;
    position: relative;
    min-width: 3rem;   
   
  }
  .active {
    button {
      background-color: #e56673;
      color: #fff;
    }
  }

  table {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;

    border: 1px solid #b3b3b3;
    width: 100%;
    border-collapse: collapse;

    .class-even {
      background-color: #fff;
    }
    .class-odd {
      background-color: #e7f3fd;
    }

    th {
      font-weight: bold;
      text-align: center;
      border: 1px solid #b3b3b3;
      background-color: #000;
      color: #fff;
      border-left: none;
      border-right: none;
    }

    td {
      font-weight: 300;
      text-align: center;
      border: 1px solid #b3b3b3;
      border-left: none;
      border-right: none;
    }

    tr:hover{
    background:#fbe9eb;
    color:#000;
    }
    
    tr.hidden {visibility: hidden; display: none;}
  }

  .primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  }

  .success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  .danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }

  .btn-danger {
    font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  }

  .btn-secondary {
    font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  }
`;
