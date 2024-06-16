import React from 'react';
import profilePhoto from './images/professional_photo.jpg'; // Replace with your actual profile photo file path or URL

const Header = () => {
  const linkStyle = {
    color: '#007bff', 
    textDecoration: 'none',
    
  };
  return (
    <header style={headerStyle}>
      <div style={imageContainer}>
        <img src={profilePhoto} alt="Profile" style={imageStyle} />
      </div>
      <div style={contentContainer}>
      <h1 style={headingStyle}>Gopinath</h1>
      <p style={{ ...textStyle, color: 'orange' }}>K.S.Rangasamy College of Technology</p>
      <p style={textStyle}>Naukri: <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" style={{ ...linkStyle, color: 'blue' }}>https://www.naukri.com/mnjuser/profile?id=&altresid</a></p>
      <p style={textStyle}>Email-Id: <a href="mailto:gopinath240803@gmail.com" style={{ ...linkStyle, color: 'blue' }}>gopinath240803@gmail.com</a></p>
      <p style={textStyle}>GitHub: <a href="https://github.com/Gopinath2408" style={{ ...linkStyle, color: 'blue' }}>https://github.com/Gopinath2408</a></p>
      <p style={textStyle}>LinkedIn: <a href="https://www.linkedin.com/in/gopinath-sakthivel-b53964224" style={{ ...linkStyle, color: 'blue' }}>https://www.linkedin.com/in/gopinath-sakthivel-b53964224</a></p>
      <p style={textStyle}>Phone No: <span style={{ ...textStyle, color: 'blue', fontWeight: 'bold' }}>9994863872</span></p>
    </div>
    </header>
  );
};

export default Header;

// Styles (you can adjust these styles according to your preference)
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '30px',
};

const imageContainer = {
  width: '150px',
  height: '180px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const contentContainer = {
  maxWidth: '600px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '32px',
  color: '#333',
  marginBottom: '10px',
};

const textStyle = {
  fontSize: '14px',
  color: '#666',
  marginBottom: '15px',
};
