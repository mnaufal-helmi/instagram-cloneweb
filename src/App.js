import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, InboxPage, ProfilePage } from './features/pages/index';
import { API } from './features/config/API';
import { useQuery } from 'react-query';
import Login from './features/pages/Login';

function App() {
  let { data: post } = useQuery('postCache', async () => {
    const response = await API.get('/posts');
    return response.data.data;
  });

  // console.log(post)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Inbox" element={<InboxPage />} />
          <Route exact path="/Profile" element={<ProfilePage />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
