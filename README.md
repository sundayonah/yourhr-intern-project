## Documentation For INternForm File

This code is a React component that allows users to apply for an internship position by filling out a form and submitting their resume. The form data is stored in Firebase Firestore, and the resume file is uploaded to Firebase Storage.

Technologies used:

- React
- Next.js
- Firebase

### Usage

To use this code, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Set up a Firebase project and add your Firebase configuration details to the `.env.local` file.
4. Run the development server using `npm run dev`.
5. Open `http://localhost:3000` in your web browser to view the application.

### Components

#### InternForm

This component displays a form for users to fill out with their name, email, phone number, salary expectation, country, and resume file. It includes input validation and submits the form data to Firebase Firestore and Storage.

### Functions

#### handleSignOut

This function handles the user sign-out process by calling the `auth.signOut()` method from Firebase and navigating the user to the login page.

#### handleInputChange

This function updates the form data state when the user enters data into an input field.

#### handleFileInputChange

This function updates the form data state when the user selects a file to upload.

#### handleSubmit

This function handles the form submission process by uploading the resume file to Firebase Storage, adding the form data to Firestore, and resetting the form data state.

### Screenshots

![InternForm](/src/images/INTERN.png)

## Documentation For LogIn File

This code is a React component called LogIn that provides a button with "Continue with Google" text, and allows users to sign in with their Google account.

When the user clicks on the button, the handleLogin function is triggered, which sets the loading state to true, and attempts to sign in using Firebase's signInWithPopup method with the Google provider. If the sign-in is successful, the user is redirected to the ./InternForm page using Next.js's useRouter hook. If there is an error during sign-in, the error is caught and handled silently.

## The component imports the following packages and files:

useState from React to handle state
useRouter from Next.js to handle routing
auth and provider from ../firebase to sign in with Google using Firebase authentication
Image from Next.js to display the Google logo
GoogleSvg from ../images/google.svg to use as the Google logo in the Image component
This component can be used in a larger application to allow users to sign in with Google.

## These are the libraries that are used in the project with their respective functions:

## autoprefixer:

### It adds vendor prefixes to CSS properties automatically, ensuring that the styles work consistently across different browsers.

### eslint: It is a linting tool that helps to identify and report issues in the JavaScript code.

## firebase:

### It is a mobile and web application development platform that provides a backend as a service (BaaS), real-time database, and various services to build, manage, and scale apps.

## next:

### It is a framework for building server-side rendered React applications.

## postcss:

### It is a tool for transforming CSS with JavaScript plugins, enabling the use of modern CSS features that are not yet supported by all browsers.

## react:

### It is a JavaScript library for building user interfaces.

## react-dom:

### It is a package that provides DOM-specific methods to manipulate and render React components.

## react-router-dom:

### It is a package that provides routing capabilities to React applications.

## tailwindcss:

### It is a utility-first CSS framework that provides pre-defined CSS classes to build UI components rapidly.

## web3uikit:

### web3uikit and is used to provide a notification system for the app.
