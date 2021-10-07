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
    text-transform: uppercase;
  }
`;

export const HeaderStyles = styled.div`
  .navbar {
    background-color: #0d63ac;
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

  .ml-auto .dropdown-menu {
    left: auto !important;
    right: 0px;
  }
`;
