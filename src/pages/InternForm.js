import React, { useState } from "react";
import Image from "next/image";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { db, storage } from "@/firebase";

const InternForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };




// rules_version = '2';

// service firebase.storage {

//   match /b/{bucket}/o {

//     match /{allPaths=**} {

//       allow read, write: if

//         request.time < timestamp.date(2023, 5, 7);

//     }

//   }

// }

    


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    // Upload file to Cloud Storage
    const fileRef = storage.ref().child(`resumes/${formData.resume.name}`);
    const snapshot = await fileRef.put(formData.resume);
    const fileUrl = await snapshot.ref.getDownloadURL();

    // Add document to Firestore with file URL
    const internsRef = db.collection("interns");
    await internsRef.add({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      resumeUrl: fileUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sign Up for YourHR</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-gray-700 font-bold mb-2"
          >
            Resume:
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InternForm;
