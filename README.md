# StraySafe

Welcome to the StraySafe repository. This repository contains the source code for the StraySafe platform, a community-driven application designed to help users find, feed, and adopt stray cats and dogs in their locality.

**Hosted Link**: https://straysafe.vercel.app/

## Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## About
StraySafe is a platform where users can upload pictures, locations, and detailed information about stray animals they find, making it easier for others to help these animals by feeding or adopting them.

## Features
- **Upload Animal Data**: Users can upload pictures of stray cats and dogs along with their location and detailed information about the animal's behavior, gender, family, etc.
- **View Animal Profiles**: Browse through uploaded animal profiles, each displayed in separate cards with a large picture and relevant details.
- **Sort and Search**: Sort animal data based on name and location. Use the search bar to find animals by name and description.
- **Geolocation**: View the geolocation of animals on the map in the profile section, which helps in locating the stray animals.

## Technologies Used
- **Frontend**: ReactJS, Tailwind CSS
- **Backend**: Firebase
- **Database**: Firebase Firestore

## Installation
To get a local copy up and running, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AyushSinghSrikoti/StraySafe.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd StraySafe
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Set up environment variables:**
    Create a `.env` file in the root directory and add your configuration variables:
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```
5. **Start the server:**
    ```bash
    npm start
    ```

## Usage
The backend server runs on `http://localhost:8000` by default. You can interact with the APIs using tools like Postman or integrate with the frontend.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## Contact
- **Project Link**: [https://github.com/AyushSinghSrikoti/StraySafe](https://github.com/AyushSinghSrikoti/StraySafe)
- **Email**: [ayushsinghsrikoti@gmail.com](mailto:ayushsinghsrikoti@gmail.com)
- **Website**: [https://thriving-semolina-bd662b.netlify.app/](https://thriving-semolina-bd662b.netlify.app/)
