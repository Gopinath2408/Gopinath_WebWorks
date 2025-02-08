import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db} from "./firebase";


const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    await addDoc(collection(db, "messages"), {
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
      createdAt: serverTimestamp(),
      user: "Personal Info Form",
      room: "resume",
    });

    setSubmitted(true);
  };

  return (
    <div className="personal-info">
      <h3>PERSONAL PROFILE</h3>
      <ul>
        <li><strong>Name:</strong> GOPINATH S</li>
        <li><strong>Date of Birth:</strong> 24.08.2003</li>
        <li><strong>Hobbies:</strong> Listening to music, Watching movies, Cricket, Gardening</li>
        <li><strong>Languages Known:</strong> English</li>
      </ul>

      <h3>CONTACT INFORMATION</h3>
      <p><strong>For more information, contact:</strong> 📞 <a href="tel:+91994863872">+91 99486 3872</a></p>

      <h3>GET IN TOUCH</h3>
      <div className="contact-form">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="confirmation">
            <h2>Thank You!</h2>
            <p>Your message has been submitted successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
