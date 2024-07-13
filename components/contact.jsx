
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import useScrollToTop from "../src/utils/scrollToTop";

const Contact = () => {
  useScrollToTop();
  return (
    <>
    <Navbar/>
    <div>
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch with StraySafe</h2>
            <p className="text-lg text-gray-600 mb-6">
              We’d love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out to us. Here are the ways you can contact us:
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="sm:flex sm:divide-x sm:divide-gray-200">
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Email Us</dt>
                  <dd className="mt-2 text-gray-600">
                    <a href="mailto:support@straysafe.com" className="text-blue-500 underline">
                      support@straysafe.com
                    </a>
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Call Us</dt>
                  <dd className="mt-2 text-gray-600">
                    <a href="tel:+1234567890" className="text-blue-500 underline">
                      +1 234 567 890
                    </a>
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Visit Us</dt>
                  <dd className="mt-2 text-gray-600">
                    1234 StraySafe Street, Pet City, PC 12345
                  </dd>
                </div>
              </div>
              <div className="sm:flex sm:divide-x sm:divide-gray-200">
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Follow Us</dt>
                  <dd className="mt-2 text-gray-600">
                    <div className="flex space-x-4">
                      <a href="https://facebook.com/straysafe" className="text-blue-500">
                        Facebook
                      </a>
                      <a href="https://twitter.com/straysafe" className="text-blue-500">
                        Twitter
                      </a>
                      <a href="https://instagram.com/straysafe" className="text-blue-500">
                        Instagram
                      </a>
                    </div>
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Support Us</dt>
                  <dd className="mt-2 text-gray-600">
                    <a href="https://straysafe.com/donate" className="text-blue-500 underline">
                      Donate Now
                    </a>
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Feedback</dt>
                  <dd className="mt-2 text-gray-600">
                    <a href="https://straysafe.com/feedback" className="text-blue-500 underline">
                      Leave Feedback
                    </a>
                  </dd>
                </div>
              </div>
              <div className="sm:flex sm:divide-x sm:divide-gray-200">
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Partner with Us</dt>
                  <dd className="mt-2 text-gray-600">
                    Are you an organization or business interested in partnering with StraySafe? Reach out to us at 
                    <a href="mailto:partners@straysafe.com" className="text-blue-500 underline"> partners@straysafe.com</a>.
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Press Inquiries</dt>
                  <dd className="mt-2 text-gray-600">
                    For media or press inquiries, please contact us at 
                    <a href="mailto:press@straysafe.com" className="text-blue-500 underline"> press@straysafe.com</a>.
                  </dd>
                </div>
                <div className="sm:w-1/3 sm:px-6 sm:py-5 text-lg">
                  <dt className="font-bold text-gray-800">Careers</dt>
                  <dd className="mt-2 text-gray-600">
                    Interested in joining the StraySafe team? Check out our 
                    <a href="https://straysafe.com/careers" className="text-blue-500 underline"> careers page</a> for current openings.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 mb-6">
              We’d love to meet you in person! Here’s how you can find us:
            </p>
            <div className="sm:flex sm:space-x-4">
              <div className="sm:w-1/2">
                <h3 className="text-xl font-bold text-gray-800">Office Address</h3>
                <p className="text-gray-600">
                  1234 StraySafe Street<br />
                  Pet City, PC 12345
                </p>
              </div>
              <div className="sm:w-1/2">
                <h3 className="text-xl font-bold text-gray-800">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9 AM - 5 PM<br />
                  Saturday: 10 AM - 4 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="mt-6">
              <iframe
                title="StraySafe Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9202592007953!2d-122.08424958469252!3d37.42199997982574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b5e8b5e2c9%3A0x4c4b8e5b0e9c9e7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633963320381!5m2!1sen!2sus"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
