import Navbar from "./navbar";
import Footer from "./footer";
import useCurrentUser from "../src/utils/getcurrentuser";
import React, { useState } from 'react';
import { storage , db } from "../firebase"; // Import firestore from firebase
import { v4 } from "uuid";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import useScrollToTop from "../src/utils/scrollToTop";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  useScrollToTop();
  const user = useCurrentUser();
  const [animalName, setAnimalName] = useState('');
  const [animalLocation, setAnimalLocation] = useState('');
  const [animalNature, setAnimalNature] = useState('');
  const [animalImage, setAnimalImage] = useState('');
  const [animalDescription, setAnimalDescription] = useState('');
  const [geolocationImage, setGeolocationImage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e, setImage) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Upload the animal image to Firebase Storage
      const animalImageRef = ref(storage, `animals/${v4()}`);
      await uploadBytes(animalImageRef, animalImage);
      const animalImageUrl = await getDownloadURL(animalImageRef);
  
      // Upload the geolocation image to Firebase Storage
      const geolocationImageRef = ref(storage, `geolocations/${v4()}`);
      await uploadBytes(geolocationImageRef, geolocationImage);
      const geolocationImageUrl = await getDownloadURL(geolocationImageRef);
  
      // Store animal data and the image URLs in Firestore
      const docRef = await addDoc(collection(db, 'animals'), {
        animalName,
        animalLocation,
        animalNature,
        imageUrl: animalImageUrl,
        geolocationImageUrl,
        animalDescription,
        userId: user.uid, // Store user ID for reference
        userName: user.displayName, // Store user display name
        userEmail: user.email, // Store user email
        createdAt: serverTimestamp() // Timestamp for sorting or filtering
      });
  
      console.log('Animal Data stored successfully.', docRef.id);
  
      // Reset form fields after submission
      setAnimalName('');
      setAnimalLocation('');
      setAnimalNature('');
      setAnimalImage(null);
      setGeolocationImage(null);
      setAnimalDescription('');
      navigate('/feed');
    } catch (error) {
      console.error('Error storing animal data:', error);
    }
  };

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl">Loading...</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <div className="mb-4">
            <strong>Name: </strong> {user.displayName}
          </div>
          <div className="mb-4">
            <strong>Email: </strong> {user.email}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Upload Animal Data</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="animalName">
                  Animal Name
                </label>
                <input
                  id="animalName"
                  type="text"
                  value={animalName}
                  onChange={(e) => setAnimalName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="animalLocation">
                  Location
                </label>
                <input
                  id="animalLocation"
                  type="text"
                  value={animalLocation}
                  onChange={(e) => setAnimalLocation(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="animalNature">
                  Nature
                </label>
                <input
                  id="animalNature"
                  type="text"
                  value={animalNature}
                  onChange={(e) => setAnimalNature(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="animalImage">
                  Animal Image
                </label>
                <input
                  id="animalImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setAnimalImage)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="geolocationImage">
                  Geolocation Image
                </label>
                <input
                  id="geolocationImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setGeolocationImage)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="animalDescription">
                  Description
                </label>
                <textarea
                  id="animalDescription"
                  value={animalDescription}
                  onChange={(e) => setAnimalDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
