import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCurrentUser from '../src/utils/getcurrentuser';
import { logOut } from '../firebase';
import { FaCat } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const getFirstWord = (name) => {
  const firstWord = name.split(' ')[0];
  return firstWord.length > 10 ? firstWord.slice(0, 10) : firstWord;
};

const Navbar = () => {
  const user = useCurrentUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate('/');
  };

  const isLoggedIn = !!user;
  const userName = user ? getFirstWord(user.displayName) : '';

  return (
    <>
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'><div className="text-white font-bold text-xl flex gap-2 items-center"> <div>StraySafe</div><div><FaCat/></div></div></Link>
        <div className="flex items-center">
          <div className="text-white mr-4">
            <Link to="/" className="hover:text-gray-300 hover:border-b-2">
              Home
            </Link>
          </div>
          <div className="text-white mr-4 hover:border-b-2">
            <Link to="/about">About</Link>
          </div>
          <div className="text-white mr-4 hover:border-b-2">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="text-white mr-4 hover:border-b-2">
            <Link to="/feed">Feed</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span className="text-white mr-4">Hi, {userName}</span>
                <div className='flex items-center gap-2 justify-center hover:border-b-2'><Link to="/profile" className="text-white hover:text-gray-300">
                Profile
              </Link><CgProfile className='text-white'/></div>
              <button onClick={handleLogout} className="text-white hover:text-gray-300 flex gap-2 items-center hover:border-b-2">
                <div>Logout</div>
                <div><IoMdLogOut/></div>
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="text-white mr-4 hover:text-gray-300 hover:border-b-2">Sign In</Link>
              <Link to="/sign-up" className="text-white mr-4 hover:text-gray-300 hover:border-b-2">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
          <br/>
    </>
  );
};

export default Navbar;
