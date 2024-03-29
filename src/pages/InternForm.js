import React, { useState } from "react";
import Image from "next/image";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { auth, db, storage } from "@/firebase";
import KudosLogo from "../images/kudosLogo.jpeg";
import { useRouter } from "next/router";
import { useNotification } from "web3uikit";

// import { useHistory } from "react-router-dom";

const InternForm = () => {
  const dispatch = useNotification();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
    country: "",
    resume: null,
  });

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Navigate to Login page after successful sign out
      router.push("/");
    } catch (error) {}
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  //Notification
  const handleNewNotification = () => {
    dispatch({
      type: "info",
      message: "Your application was successfully submitted.",
      title: "Thank you for your application!",
      position: "topR",
    });
  };

  const handleSuccess = async (tx) => {
    try {
      handleNewNotification(tx);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
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
        salary: formData.salary,
        country: formData.country,
        resumeUrl: fileUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      // Reset the form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        salary: "",
        country: "",
        resume: null,
      });

      // Show success notification
      handleSuccess();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center container mx-auto px-4 py-4">
      <header className="flex justify-between w-full mb-8">
        <Image src={KudosLogo} alt="Your Logo" className="w-10 h-10" />

        <button
          onClick={handleSignOut}
          className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-300"
        >
          Sign Out
        </button>
      </header>
      <h1 className="text-3xl font-bold mb-8">Apply For This Role</h1>
      {/* // A form that includes input fields for name, email, phone, country,
      desired salary, and resume upload. */}
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Onah Sunday"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="johnDoe@gmail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone<span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="+1-555-555-1212"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 font-bold mb-2"
          >
            Country<span className="text-red-600">*</span>
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Select Country --</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="salary"
            className="block text-gray-700 font-bold mb-2"
          >
            Desired Salary<span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            required
            placeholder="$"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-gray-700 font-bold mb-2"
          >
            Resume<span className="text-red-600">*</span>
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
        {loading ? (
          <div className="flex justify-evenly bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full "></div>
            <p className="px-4">Submittng...</p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              <p className="px-4">Submit</p>
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default InternForm;
