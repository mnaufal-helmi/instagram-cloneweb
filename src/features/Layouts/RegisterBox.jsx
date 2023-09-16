import Insta from "../../asset/png/instagram.png";
import app from "../../assets/images/image1013.png";
import play from "../../assets/images/image878.png";
import fb from "../../asset/png/g1707.png";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../config/API";

function RegisterBox() {
  const [placeholderStyle, setPlaceholderStyle] = useState({
    fontSize: '12px',
    color: 'red',
  });

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    fullname:'',
    username: '',
    password: ''
  })

  const {email, fullname, username, password} = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value,
    })
  }

  console.log(form)

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const response = await API  
    } catch (error) {
      
    }
  })

  return (
    <div className="grid grid-cols-3 mx-auto p-3">
      <div className="col-start-2">
        <div
          className="mx-auto border border-gray-300"
          style={{ width: "350px" }}
        >
          <div className="w-48 d-flex mx-auto mt-8 mb-4">
            <img
              src={Insta}
              alt="Logo Instagram"
              className="max-h-full max-w-full"
            />
          </div>
          <div className="mx-10">
            <p className="text-base font-semibold text-center text-gray-500">
              Sign up to see photos and videos from your friends.
            </p>
          </div>
          <div className="mx-10 my-4">

          <button class="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center">
            <img src={fb} alt="Facebook" class="w-4 mr-2" />
            <span className="text-base font-semibold">Log in with Facebook</span>
          </button>
          </div>

          <div className="flex items-center justify-center mb-3">
            <div className="bg-gray-400 h-px w-28"></div>
            <div className="mx-2 text-gray-500 font-semibold text-xs">OR</div>
            <div className="bg-gray-400 h-px w-28"></div>
          </div>
          <div className="mx-10 mb-4">

          <form>
            <input
              type="text"
              placeholder="Mobile Number or Email"
              className="w-full border  border-gray-300 p-1 mb-3 rounded focus:outline-none focus:ring focus:border-blue-800"
              style={placeholderStyle}
              onChange={handleChange}
              name="email"
              onFocus={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'black',
                  marginTop: '10px'
                })
              }}
              onBlur={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'grey',
                  marginTop: '12px'
                });
              }}
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border  border-gray-300 p-1 mb-3 rounded focus:outline-none focus:ring focus:border-blue-800"
              style={placeholderStyle}
              onChange={handleChange}
              name="fullname"
              onFocus={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'black',
                  marginTop: '10px'
                })
              }}
              onBlur={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'grey',
                  marginTop: '12px'
                });
              }}
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border  border-gray-300 p-1 mb-3 rounded focus:outline-none focus:ring focus:border-blue-800"
              style={placeholderStyle}
              onChange={handleChange}
              name="username"
              onFocus={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'black',
                  marginTop: '10px'
                })
              }}
              onBlur={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'grey',
                  marginTop: '12px'
                });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border  border-gray-300 p-1 mb-3 rounded focus:outline-none focus:ring focus:border-blue-800"
              style={placeholderStyle}
              onChange={handleChange}
              name="password"
              onFocus={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'black',
                  marginTop: '10px'
                })
              }}
              onBlur={() => {
                setPlaceholderStyle({
                  fontSize: '12px',
                  color: 'grey',
                  marginTop: '12px'
                });
              }}
            />
            <p
              className="text-center text-gray-600 mb-4" 
              style={{ fontSize: "12px" }}
            >
              People who use our service may have uploaded your contact
              information to Instagram.
              <span style={{ color: "blue" }}>
                {" "}
                <a href="#">Learn More</a>
              </span>
            </p>
            <p
              className="text-center text-gray-600 mb-4"
              style={{ fontSize: "12px" }}
            >
              By signing up, you agree to our{" "}
              <span style={{ color: "blue" }}>
                {" "}
                <a href="#"> Terms</a>
              </span>{" "}
              ,{" "}
              <span style={{ color: "blue" }}>
                {" "}
                <a href="#">Privacy</a>{" "}
              </span>
              ,{" "}
              <span style={{ color: "blue" }}>
                {" "}
                <a href="#">Policy</a>{" "}
              </span>
              , and{" "}
              <span style={{ color: "blue" }}>
                {" "}
                <a href="#">Cookies Policy</a>{" "}
              </span>
            </p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center">
              <span>Sign up</span>
            </button>
          </form>
          </div>
        </div>
        <div className="mx-auto mt-4" style={{width: "350px"}}>
          <div className="flex items-center justify-center border border-gray-300 mb-3">
            <p className="p-4">
              Have an account? <span className="text-cyan-500">Sign up</span>
            </p>
          </div>
          <div className="flex items-center justify-center mb-3">
            <p>Get the app.</p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <img src={app} alt="download from app store" className=" w-32" />
            <img src={play} alt="download from play store" className=" w-32" />
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
      </div>
    </div>
  );
}

export default RegisterBox;
