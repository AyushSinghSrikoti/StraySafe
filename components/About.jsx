import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import useScrollToTop from "../src/utils/scrollToTop";

function About(){
    useScrollToTop()
    return(
        <>
        <Navbar/>
         <div>
         <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About StraySafe</h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to StraySafe, where we believe every stray animal deserves a loving home. Our mission is to connect kind-hearted people with animals in need, creating a community of compassion and care.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="sm:flex sm:divide-x sm:divide-gray-200">
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Our Story</dt>
                  <dd className="mt-2 text-gray-600">
                    StraySafe started with a simple idea: to help stray animals find loving homes. Our journey began in 2023 with a small team of animal lovers, and we’ve been growing ever since.
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Our Mission</dt>
                  <dd className="mt-2 text-gray-600">
                    We aim to reduce the number of stray animals on the streets by providing a platform for adoption, fostering, and community involvement. Together, we can make a difference.
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Join Us</dt>
                  <dd className="mt-2 text-gray-600">
                    Whether you’re looking to adopt, volunteer, or simply spread the word, there are many ways to get involved with StraySafe. Join our community and help us create a safer world for stray animals.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
         </div>
         <Link to='/sign-up'  >
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300'>
          Get Started
        </button>
      </div></Link>
        <Footer/>
        </>
    )
}

export default About;