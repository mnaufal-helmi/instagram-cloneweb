import React, { useState } from "react";
import setting from "../../assets/images/g1499.png";
import profile from "../../assets/images/profle.jpg";
import Story from "../../components/story";
import Posts from "../../components/Posts";
import Reels from "../../components/Reels";
import Saved from "../../components/Saved";
import Tags from "../../components/Tags";

function ProfileBox() {
  const [activeTab, setActiveTab] = useState('POST');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <>
      <div className="bg-black border border-slate-950 w-full">
        <div className="flex items-center justify-center m-8">
          <div className="w-36 mr-28">
            <img
              src={profile}
              className="w-36 h-36 object-cover rounded-full"
              alt="Profile Image"
            />
          </div>

          <div className="text-white">
            <div className="flex space-x-6 mb-5">
              <div>
                <span>taufiqmth80</span>
              </div>
              <div className="space-x-2">
                <button className="bg-gray-700 rounded-lg py-1 px-2 text-sm font-semibold">Edit Profile</button>
                <button className="bg-gray-700 rounded-lg py-1 px-2 text-sm font-semibold">View Archive</button>
              </div>
              <div>
                <button>
                  <img src={setting} alt="" className="w-6"/>
                </button>
              </div>
            </div>

            <div className="flex space-x-8 mb-3">
              <div>
                <span>0 Post</span>
              </div>
              <div>
                <span>119 followers</span>
              </div>
              <div>
                <span>323 following</span>
              </div>
            </div>


            <div className="mb-2">
              <div className="font-semibold text-sm">
                <span>taufiq</span>
              </div>
            </div>


            <div className="">
              <div className="m-0 leading-tight">
                <p>Deskripsi 1</p>
              </div>
              <div className="m-0 leading-tight">
                <p>Deskripsi 2</p>
              </div>
              <div className="m-0 leading-tight">
                <p>Deskripsi 3</p>
              </div>
              <div className="m-0 leading-tight">
                <p>Deskripsi 4</p>
              </div>
            </div>


          </div>
        </div>

        <Story />

        <div className="mt-8 border-t-2 border-white mx-24">
         <div className="flex text-white justify-center items-center">
          {/* <ul className="flex space-x-12">
            <li onClick={() => handleTabClick('POST')}>POST</li>
            <li>REELS</li>
            <li>SAVED</li>
            <li>TAGS</li>
          </ul> */}
          <ul className="flex space-x-12">
          <li onClick={() => handleTabClick('POST')} className={activeTab === 'POST' ? 'text-white font-bold cursor-pointer' : 'text-white cursor-pointer'}>POST</li>
          <li onClick={() => handleTabClick('REELS')} className={activeTab === 'REELS' ? 'text-white font-bold cursor-pointer' : 'text-white cursor-pointer'}>REELS</li>
          <li onClick={() => handleTabClick('SAVED')} className={activeTab === 'SAVED' ? 'text-white font-bold cursor-pointer' : 'text-white cursor-pointer'}>SAVED</li>
          <li onClick={() => handleTabClick('TAGS')} className={activeTab === 'TAGS' ? 'text-white font-bold cursor-pointer' : 'text-white cursor-pointer'}>TAGS</li>
        </ul>

         </div>
        </div>

        <div> 
          {/* <Posts /> */}
          {/* <Reels /> */}
          {/* <Saved /> */}
          {/* <Tags /> */}
          {activeTab === 'POST' && <Posts />}
          {activeTab === 'REELS' && <Reels />}
          {activeTab === 'SAVED' && <Saved />}
          {activeTab === 'TAGS' && <Tags />}
        </div>

      </div>
    </>
  );
}

export default ProfileBox;
