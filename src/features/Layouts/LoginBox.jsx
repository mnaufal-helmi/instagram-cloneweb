import React, { useState } from "react";
import imagelogin from "../../assets/images/imglogin.png";
import logo from "../../assets/images/instagram.png";
import fb from "../../assets/images/fb-logo.png";
import app from "../../assets/images/image1013.png";
import play from "../../assets/images/image878.png";
import { useNavigate } from 'react-router-dom';
import { useMutation } from "react-query";
import { API } from "../config/API";
import { LoadingComponent } from "../../components/Form/LoadingPage";

function LoginBox() {
  const navigate = useNavigate();

  const [loading, setLoading] =useState(true)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  console.log(form)

  const {username, password} = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const response = await API.post("/login", form)
      console.log("Login success : ", response)
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.log("Login Failed!!") 
      setLoading(false)
    }
  })


  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 gap-1 ">
          <div className="col-start-3 col-end-7 ">
            <img src={imagelogin} alt="wkwkwkwk" className="m-4"/>
          </div>
          <div className="col-start-7 col-end-11 mt-12">
            <div className="border border-gray-300 rounded mx-8 mb-3">
              <div className="flex justify-center items-centers w-100">
                <img className="h-20 w-48 m-2" src={logo} alt="wkkw" />
              </div>
              <div className="flex items-center justify-center">
                <form className="p-6 rounded" onSubmit={(e) => handleSubmit.mutate(e)}>
                  <input
                    className="w-full border  border-gray-300 p-1 mb-3 rounded focus:outline-none focus:ring focus:border-blue-800"
                    placeholder="Phone number, username, or email"
                    type="text"
                    onChange={handleChange}
                    name="username"
                  />
                  <input
                    className="w-full border border-gray-300 p-1 mb-3 rounded focus:outline-none focus:ring focus:border-blue-800"
                    placeholder="Password"
                    type="text"
                    onChange={handleChange}
                    name="password"
                  />
                  <div className="flex mb-3">
                    <input
                      className="border border-gray-300 rounded-full mr-3"
                      type="checkbox"
                    />
                    <p>Save login info</p>
                  </div>
                  
                  <button className="w-full bg-cyan-500 rounded p-2 mb-3 text-white" type="submit">
                    {/* {loading ? <LoadingComponent /> : "Log in"} */}
                    Log in
                  </button>
                </form>
              </div>
              <div className="flex items-center justify-center mb-3">
                <div className="bg-gray-400 h-px w-16"></div>
                <div className="mx-2 text-gray-400">OR</div>
                <div className="bg-gray-400 h-px w-16"></div>
              </div>
              <div className="flex items-center justify-center mt-8 mb-3">
                <img src={fb} alt="fb.." className="w-6" />
                <p className="text-blue-900 font-medium text-sm">
                  Login with facebook
                </p>
              </div>
              <div className="flex items-center justify-center mb-3">
                <p className="text-blue-900 text-sm">Forgot passsword?</p>
              </div>
            </div>
            <div className="flex items-center justify-center border border-gray-300 mx-8 mb-3">
              <p className="p-4">
                Don't have an account?{" "}
                <span className="text-cyan-500">Sign up</span>
              </p>
            </div>
            <div className="flex items-center justify-center mb-3">
              <p>Get the app.</p>
            </div>
            <div className="flex items-center justify-center gap-8">
              <img src={app} alt="download from app store" className=" w-32" />
              <img
                src={play}
                alt="download from play store"
                className=" w-32"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-gray-600 mt-8">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" class="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                API
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Top Accounts
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Locations
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Instagram Lite
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Treads
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact Uploading & Non-Users
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Meta Verified
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-3">
            <select className="mt-4">
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
              <option>Bahasa Indonesia</option>
            </select>
            <p className="mt-4">&copy; 2023 Instagram from Meta </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
