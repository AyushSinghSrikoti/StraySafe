import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom';
// import { showSuccessToast, showErrorToast } from '../src/utils/toastUtils'; 
import useScrollToTop from '../src/utils/scrollToTop';

function SignIn() {
  useScrollToTop();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
      // showSuccessToast('Signed In Successfully');
    } catch (error) {
      // showErrorToast('Failed to Sign In'); 
    }
  };

  return (
    <>
      <Navbar />

      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8" style={{ height: '80vh' }}>
            <div className="text-center mb-8">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign In to your account</h2>
              <p className="mt-2 text-gray-600">Join our community and help stray animals find loving homes.</p>
            </div>
            <div>
              <button
                onClick={handleSignUp}
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <FaGoogle className="h-6 w-6 mr-2" />
                Sign In with Google
              </button>
            </div>
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">
                Problem Signing In? click on the link ahead to contact and get help{' '}
                <br />
                <a href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                  Get help
                </a>{' '}
              </p>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SignIn;
