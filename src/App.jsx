// import logo from './logo.svg';
// import './App.css';
import { Api } from './helpers/Api';

const App = () => {
  const testApi = () => {
    Api.post('/login', {
      email: 'admin@email.com',
      password: 'Qwerty123',
    })
    .then(response => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <button onClick={() => testApi()}>Test Api</button>
  );
}

export default App;
