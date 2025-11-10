import styled from 'styled-components';

export const FormStyles = styled.div`
  .input-container input {
    font-size: 1.5rem;
    height: 2rem;
  }
  label {
    font-size: 1.2rem;
    height: 2rem;
  }

  button {
    width: 75%;
  }

  .password-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0.725rem;
    width: 50%;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    padding: 0.725rem;
    width: 50%;
  }

  .menu-usuario .dropdown-toggle {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 4px 6px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555 !important;
    transition: background-color 0.2s ease, color 0.2s ease;

  }

  .menu-usuario .dropdown-toggle::after {
    display: none !important; /* remove o triângulo padrão */
  }

  .menu-usuario .dropdown-toggle:hover {
    background-color: rgba(0, 0, 0, 0.05) !important;
    border-radius: 50%;
    color: #000 !important;
  }

  .menu-usuario .dropdown-menu {
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-width: 160px;
  }

  .menu-usuario .dropdown-item {
    font-size: 0.9rem;
    color: #333;
  }

  .menu-usuario .dropdown-item:hover {
    background-color: #f5f5f5;
  }

`;
