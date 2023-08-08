import './App.css';
import  { BrowserRouter ,Routes, Route } from 'react-router-dom'
import {Home, InboxPage, ProfilePage} from './features/pages/index'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Inbox' element={<InboxPage/>}/>
        <Route exact path='/Profile' element={<ProfilePage/>}/>  
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
