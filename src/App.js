import { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import store from './redux';
import { Provider } from 'react-redux';

import Header from './Header';
class App extends Component {
  async componentDidMount() {
    const url = 'http://localhost:3005';
    const login = await axios.post(`${url}/auth/signin`, {
      fun_email: '1617886500713@mail.com',
      fun_passwd: 'Test3D3Senh@',
    });
    console.log(login.data);
    const decoded = jwtDecode(login.data.token);
    console.log(decoded);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Titulo App</h1>
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
