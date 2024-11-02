# Project Documentation: Travel Booking System🌍✈️

## Overview
This project implements a travel booking system with user authentication. It allows users to register and log in using their email and password. The application provides feedback through toast notifications for successful actions and error messages.

## Technologies Used
- HTML, CSS, and JavaScript for the frontend🖥️
- Firebase Authentication and Firestore for managing user accounts and bookings🔑
- Responsive design for user interface📱

## Project Structure
```
/project-root
│
├── images
├── index.html            #main HTML file
├── style.css             #styles for the landing page
├── Script2.js            #javaScript for user authentication
├── web.html              #main application interface after login
├── cssstyle.css          #additional styles for responsive design
├── javascript.js         #javaScript for interactive elements
├── utility.js            #firebase configuration file
└── README.md
```


### 1. **index.html**
The main HTML file that contains the structure of the landing page, including sections for navigation, services, gallery, reviews, and contact information.

### 2. **style.css**
Contains styles for the landing page, including layout, colors, fonts, and animations🎨.

### 3. **cssstyle.css**
Provides additional styles for specific components and responsive design adjustments📐.

### 4. **web.html**
The main application interface after user authentication, which includes a booking form and displays user’s previous bookings📅.

### 5. **Script2.js**
Handles the authentication logic using Firebase. This includes user registration and login functionalities with feedback through toast notifications🔒.

### 6. **javascript.js**
Manages interactive elements like menu toggle and video selection in the gallery🎥.

### 7. **utility.js**
Exports the Firebase configuration needed to initialize the Firebase app⚙️.

---

## Detailed Component Documentation

### **index.html**
- **User Interface Components**
  - **Navigation Bar**: Links to different sections of the landing page.🗺️
  - **Services Section**: Information about services offered.🛠️
  - **Gallery Section**: Displays images related to travel.📸
  - **Reviews Section**: User testimonials.⭐
  - **Contact Section**: A contact form for inquiries.📬

### **style.css**
- **Global Styles**: Resets margins and paddings for all elements.
- **Body Styles**: Sets background colors and text styles for readability.
- **Navbar Styles**: Styles for the navigation bar including hover effects.
- **Button Styles**: Visual styles for buttons across the application.🔘

### **web.html**
- **Booking Form**: A form for users to enter their travel details.✍️
- **Previous Bookings Display**: Shows users their past bookings if any.🗃️

### **cssstyle.css**
- **Responsive Styles**: Media queries to ensure the application looks good on various screen sizes.
- **Header Styles**: Specific styles for the header and navbar.
- **Form Styles**: Styles for the contact form and booking form to enhance user experience.



### **Script2.js**
- **Firebase Initialization**
  - Imports necessary Firebase SDKs and initializes the Firebase app with the provided configuration.

- **Registration Functionality**
  - Listens for clicks on the sign-up button.
  - Uses `createUserWithEmailAndPassword` to register a new user.
  - Displays toast messages for successful registration or errors (e.g., email already in use).✅

- **Login Functionality**
  - Listens for clicks on the login button.
  - Uses `signInWithEmailAndPassword` to authenticate users.
  - Displays toast messages for successful login or errors (e.g., user not found, wrong password).🔑

### **javascript.js**
- **Interactive Elements**
  - Manages the toggling of the menu and selection of videos in the gallery.
  - Provides user interactivity to enhance the experience.🎮

### **utility.js**
- **Firebase Configuration Object**
  - Exports a configuration object that contains:
    - `apiKey`
    - `authDomain`
    - `projectId`
    - `storageBucket`
    - `messagingSenderId`
    - `appId`

---

## Usage Instructions
1. **Clone the Repository**: Clone the project repository to your local machine.📥
2. **Open `index.html`**: Open the main HTML file in a web browser.🌐
3. **Register a User**: Fill out the registration form and click "Sign Up."🆕
4. **Login**: After registration, use the login form to sign in with the registered email and password.🔑
5. **Make a Booking**: Once logged in, fill out the booking form and submit.📅
6. **Error Handling**: If any errors occur, appropriate messages will be shown via toast notifications.⚠️

---

## Notes
- Ensure that Firebase is correctly configured and linked in your project.⚙️
- Adjust styles in `style.css` and `cssstyle.css` as necessary to match your design preferences.✨
- Customize toast messages to provide more detailed feedback to users if needed.💬
