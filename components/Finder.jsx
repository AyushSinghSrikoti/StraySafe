import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from 'react-modal';
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import useCurrentUser from "../src/utils/getcurrentuser";
import { useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import useScrollToTop from "../src/utils/scrollToTop";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5"; // Import bookmark icons

const Finder = () => {
  const user = useCurrentUser();
  const [animals, setAnimals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [bookmarkedAnimals, setBookmarkedAnimals] = useState([]); // State for bookmarked animals
  const navigate = useNavigate();

  useScrollToTop();

  useEffect(() => {
    const fetchAnimals = async () => {
      const animalCollection = collection(db, 'animals');
      const animalSnapshot = await getDocs(animalCollection);
      const animalList = animalSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAnimals(animalList);
      setFilteredAnimals(animalList);
    };

    fetchAnimals();
  }, []);

  useEffect(() => {
    const filtered = animals.filter(animal =>
      animal.animalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.animalLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.animalDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAnimals(filtered);
  }, [searchQuery, animals]);

  const handleGeolocationClick = (geolocationUrl) => {
    window.open(geolocationUrl, "_blank");
  };

  const handleCommentClick = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const comment = {
      text: newComment,
      createdAt: new Date(),
      postedBy: user ? user.displayName : "Anonymous",
      userId: user ? user.uid : null,
      likes: [], // Initialize likes array
    };

    const updatedComments = selectedAnimal.comments
      ? [...selectedAnimal.comments, comment]
      : [comment];

    const animalDoc = doc(db, 'animals', selectedAnimal.id);
    await updateDoc(animalDoc, { comments: updatedComments });

    setSelectedAnimal({ ...selectedAnimal, comments: updatedComments });
    setNewComment("");
    // navigate("/feed");
    location.reload();
    setIsModalOpen(true);
  };

  const handleLike = async (commentIndex) => {
    if (!user) return;

    const updatedComments = selectedAnimal.comments.map((comment, index) => {
      if (index === commentIndex) {
        if (!Array.isArray(comment.likes)) {
          comment.likes = [];
        }
        if (comment.likes.includes(user.uid)) {
          return comment;
        } else {
          return {
            ...comment,
            likes: [...comment.likes, user.uid]
          };
        }
      }
      return comment;
    });

    setSelectedAnimal(prevAnimal => ({
      ...prevAnimal,
      comments: updatedComments
    }));

    const animalDoc = doc(db, 'animals', selectedAnimal.id);
    await updateDoc(animalDoc, { comments: updatedComments });
  };

  const toggleBookmark = (animalId) => {
    if (bookmarkedAnimals.includes(animalId)) {
      // Remove bookmark
      const updatedBookmarks = bookmarkedAnimals.filter(id => id !== animalId);
      setBookmarkedAnimals(updatedBookmarks);
    } else {
      // Add bookmark
      const updatedBookmarks = [...bookmarkedAnimals, animalId];
      setBookmarkedAnimals(updatedBookmarks);
    }
  };

  const isAnimalBookmarked = (animalId) => {
    return bookmarkedAnimals.includes(animalId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
    setNewComment("");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Finder</h1>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 w-full px-3 py-2 border rounded"
          />
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map(animal => (
              <div key={animal.id} className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full">
                <div className="flex flex-col md:flex-row">
                  <img
                    src={animal.imageUrl}
                    alt={animal.animalName}
                    className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center mb-2">
                      <h2 className="text-2xl font-bold mr-2">{animal.animalName}</h2>
                      {isAnimalBookmarked(animal.id) ? (
                        <IoBookmark
                          className="text-red-500 cursor-pointer"
                          onClick={() => toggleBookmark(animal.id)}
                        />
                      ) : (
                        <IoBookmarkOutline
                          className="text-gray-500 cursor-pointer"
                          onClick={() => toggleBookmark(animal.id)}
                        />
                      )}
                    </div>
                    <p className="text-gray-700 mb-2"><strong>Location:</strong> {animal.animalLocation}</p>
                    <p className="text-gray-700 mb-2"><strong>Nature:</strong> {animal.animalNature}</p>
                    <p className="text-gray-700 mb-2"><strong>Description:</strong> {animal.animalDescription}</p>
                    {animal.geolocationImageUrl && (
                      <button
                        onClick={() => handleGeolocationClick(animal.geolocationImageUrl)}
                        className="bg-[#E0F2FE] hover:bg-[#B2EBF2] text-[#0288D1] font-bold py-2 px-4 rounded mt-4"
                      >
                        Show Geolocation Image
                      </button>
                    )}
                    <button
                      onClick={() => handleCommentClick(animal)}
                      className="bg-[#E0F2FE] hover:bg-[#B2EBF2] text-[#0288D1] font-bold py-2 px-4 rounded mt-4"
                    >
                      Show Comments
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No animals found.</p>
          )}
        </div>
      </div>
      <Footer />

      {selectedAnimal && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Comments"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="bg-white rounded-lg p-6 max-w-lg mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              <IoCloseCircle className="inline-block text-xl" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Comments for {selectedAnimal.animalName}</h2>
            <div className="mb-4">
              {selectedAnimal.comments && selectedAnimal.comments.length > 0 ? (
                selectedAnimal.comments.map((comment, index) => (
                  <div key={index} className="mb-2 p-2 border-b border-gray-300">
                    <p className="text-gray-700 mb-1"><strong>{comment.postedBy}</strong>:</p>
                    <p className="text-gray-700">{comment.text}</p>
                    <p className="text-gray-500 text-sm">{new Date(comment.createdAt.seconds * 1000).toLocaleString()}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleLike(index)}
                        className={`mr-2 ${comment.likes && comment.likes.includes(user?.uid) ? "text-blue-500" : "text-gray-500"}`}
                      >
                        {comment.likes && comment.likes.includes(user?.uid) ? "Liked" : "Like"}
                      </button>
                      <span className="text-gray-500">{comment.likes ? comment.likes.length : 0}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No comments yet.</p>
              )}
            </div>
            {user && (
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full border rounded p-2 mb-2"
                />
                <button
                  type="submit"
                  className="bg-[#E0F2FE] hover:bg-[#B2EBF2] text-[#0288D1] font-bold py-2 px-4 rounded"
                >
                  Add Comment
                </button>
              </form>
            )}
            {!user && (
              <p className="text-gray-700 mt-4">Login to comment.</p>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Finder;
