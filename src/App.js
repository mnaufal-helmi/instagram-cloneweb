import logo from './logo.svg';
import './App.css';
import { API } from './features/config/API';
import { useQuery } from 'react-query';

function App() {
  let {data: post} = useQuery("postCache", async () => {
    const response = await API.get("/posts")
    return response.data.data
  })

  console.log(post)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          First
        </a>
      </header>
    </div>
  );
}

export default App;
