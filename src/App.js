import './App.css';
import  { Routes, Route } from 'react-router-dom'
import {Home, InboxPage, ProfilePage} from './features/pages/index'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Inbox' element={<InboxPage/>}/>
        <Route exact path='/Profile' element={<ProfilePage/>}/>  
      </Routes>
    </>
  );
}

export default App;
