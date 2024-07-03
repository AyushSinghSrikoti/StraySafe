import React from 'react';
import Slider from './slider';
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Slider />
      <div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4'>Welcome to StraySafe!</h2>
              <p className='text-lg text-gray-600'>
                Hey there! Welcome to StraySafe, your friendly neighborhood pet finder app. Here’s how you can make the most of our app:
              </p>
            </div>
            <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
              <dl className='sm:divide-y sm:divide-gray-200'>
                <div className='sm:flex sm:divide-x sm:divide-gray-200'>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Find Stray Animals</dt>
                    <dd className='mt-2 text-gray-600'>
                      Use StraySafe to locate stray cats and dogs in your area. You can also find information on their behavior, gender, and family details to help them find loving homes.
                    </dd>
                  </div>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Share and Connect</dt>
                    <dd className='mt-2 text-gray-600'>
                      Upload pictures and stories of the animals you spot. Connect with others who share your passion for animal welfare and spread the word about pets in need.
                    </dd>
                  </div>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Get Involved</dt>
                    <dd className='mt-2 text-gray-600'>
                      Join us in our mission to make a difference. Volunteer at local shelters, share our app with friends, or make a donation to support our efforts.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4'>Our Goals</h2>
              <p className='text-lg text-gray-600'>
                At StraySafe, our goal is simple yet powerful: to create a community where every stray animal has a chance at a loving home.
              </p>
            </div>
            <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
              <dl className='sm:divide-y sm:divide-gray-200'>
                <div className='sm:flex sm:divide-x sm:divide-gray-200'>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Connect</dt>
                    <dd className='mt-2 text-gray-600'>
                      Connect with animal lovers and caregivers who are dedicated to making a difference in their communities.
                    </dd>
                  </div>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Educate</dt>
                    <dd className='mt-2 text-gray-600'>
                      Educate yourself and others about responsible pet ownership and the importance of spaying/neutering to reduce stray populations.
                    </dd>
                  </div>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Celebrate</dt>
                    <dd className='mt-2 text-gray-600'>
                      Celebrate success stories of rescued animals finding their forever homes, thanks to the StraySafe community.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className=' py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4'>Contribute and Donate</h2>
              <p className='text-lg text-gray-600'>
                Your contribution makes a difference. Here’s how you can help us continue our mission:
              </p>
            </div>
            <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
              <dl className='sm:divide-y sm:divide-gray-200'>
                <div className='sm:flex sm:divide-x sm:divide-gray-200'>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Share</dt>
                    <dd className='mt-2 text-gray-600'>
                      Spread the word about StraySafe by sharing our app with your friends, family, and social networks.
                    </dd>
                  </div>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Volunteer</dt>
                    <dd className='mt-2 text-gray-600'>
                      Volunteer your time and skills at local animal shelters or community events supporting animal welfare.
                    </dd>
                  </div>
                  <div className='sm:px-6 sm:py-5 text-lg'>
                    <dt className='font-bold text-gray-800'>Donate</dt>
                    <dd className='mt-2 text-gray-600'>
                      Your donations help us provide essential resources and care for stray animals in need.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Link to='/sign-up'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300'>
          Get Started
        </button>
      </div></Link>
      <Footer/>
    </>
  );
};

export default Home;
