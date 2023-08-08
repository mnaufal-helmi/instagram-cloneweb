import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SidebarNav() {
  const navigate = useNavigate();

  function toHome(){
    navigate("/");
  }
  function toInboxPage(){
    navigate("/InboxPage");
  }
  function toProfilePage(){
    navigate("/");
  }
  return (
    <div className='wrapper'>
    <div className="text-white text-xl font-semibold mb-4">Sidebar</div>
    <nav>
      <ul className="space-y-2">
        <li>
          <a href="/" className="text-black hover:bg-gray-600 px-4 py-2 block rounded">
            Home
          </a>
        </li>
        <li>
          <a href="Inbox" className="text-black hover:bg-gray-600 px-4 py-2 block rounded">
            InboxPage
          </a>
        </li>
        <li>
          <a href="Profile" className="text-black hover:bg-gray-600 px-4 py-2 block rounded">
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:bg-gray-600 px-4 py-2 block rounded">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <div>kontol</div>
  </div>
  );
}
