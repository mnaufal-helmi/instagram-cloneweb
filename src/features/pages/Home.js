import React from 'react';
import SidebarNav from '../Layouts/SidebarNav';
import Footbar from '../Layouts/Footbar';

function Home() {
  return (
    <div style={{ flexDirection: 'row' }}>
      <div>
        <SidebarNav />
      </div>
      <div>
        <Footbar />
      </div>
    </div>
  );
}
export default Home;
