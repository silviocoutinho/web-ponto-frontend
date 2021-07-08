import styled from 'styled-components';

export const IndexStyles = styled.div`
  .btn {
    width: 100%;
  }

  .login-title {
    margin-bottom: 2rem;
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
  }

  .meio {
    padding: 25px 0;
    background: #fff;
  }
  .meio p {
    color: #000000;
  }
  .meio h1 {
    font: 22px 'Titillium+Web', sans-serif;
    font-weight: bold;
    color: #0083b7;
  }
  .meio h1 {
    text-align: left;
    text-transform: uppercase;
    margin-top: 2rem;
  }

  .principal {
    padding: 10px;

    h1 {
      font: 24px 'Titillium+Web', sans-serif;
      font-weight: bold;
      text-shadow: #d9d9d9 1px 3px 1px;
    }
  }

  .menu-lateral {
    background-color: #343a40;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
    background-size: cover;
    width: 14rem !important;
    min-height: 100vh;
    padding-right: 0px;
  }
  .menu-lateral a {
    font: 14px 'Titillium+Web', sans-serif;
    color: #c2c7d0;
  }
  .menu-lateral ul {
    list-style-type: none;
    margin: 0;
    padding: 0.75rem;
  }
  .menu-lateral li a {
    display: block;
    padding: 0.75rem 1.5rem 0.75rem 1.5rem;
  }
  .menu-lateral-titulo {
    background-color: #454d54;
    padding: 5px 0px 5px 0px; /*t r b l */
    display: flex;
    h5 {
      font: 16px 'Titillium+Web', sans-serif;
      font-weight: bold;
      color: #c2c7d0;
      margin-top: 1.25rem;
      margin-left: 0.5rem;
      text-transform: uppercase;
    }
  }
  .menu-lateral .menu-icone {
    margin-right: 0.125rem;
    font-size: 16px;
  }

  .menu-lateral-button {
    background-color: #343a40;
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-color: transparent;
    font: 16px 'Titillium+Web', sans-serif;
    color: #c2c7d0;
  }

  .menu-lateral-button-icone {
    margin-right: 0.5rem;
  }

  .barra-navegacao-badge {
    background-color: red;
    color: #fff;
    position: absolute;
    top: -0.25rem;
    right: 1rem;
  }

  .sidebar {
    width: 14rem !important;
  }

  .sidebar {
    width: 6.5rem;
    min-height: 100vh;
  }

  .formulario-jumbotron {
    margin: 1rem;
  }

  .formulario-info {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .formulario-info-ano {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1.5rem;
    text-align: left;
  }

  .formulario-badge {
    margin-left: 0.5rem;
    width: 7rem;
  }

  .formulario-item {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .formulario-button {
    width: 10rem;
    margin: 0.5rem;
  }

  .formulario-aviso-erro {
    width: 35rem;
  }
`;

export const HeaderStyles = styled.div`
  .navbar {
    background-color: #0d63ac;
    background-image: linear-gradient(to right, #0d63ac, #72b7f3);
    margin-bottom: 0;
  }

  .navbar-brand,
  navbar-nav,
  nav-link {
    color: #fff;
    font: 12px 'Titillium+Web', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;

    &:hover {
      color: #fff;
    }
  }

  .navbar-logo {
    width: 10%;
    margin-right: 10px;
  }

  .ml-auto .dropdown-menu {
    left: auto !important;
    right: 0px;
  }

  .menu-usuario {
    .nav-link {
      color: #fff;
      text-decoration: none;
    }
    .nav-link:hover {
      color: #fff;
    }
    .nav-link:link {
      color: #fff;
    }
    .nav-link:visited {
      color: #fff;
    }
  }
  .navbar-nav .show > .nav-link {
    color: #fff;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;
