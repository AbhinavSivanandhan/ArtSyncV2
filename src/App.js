// App.js
import React, { useState } from 'react';
import Header from './components/Header/Header'; // Import the Header component

import './App.css';
import logo from './artsync.png'; // Import the logo image

function App() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [uploadedData, setUploadedData] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the uploaded data
    const newData = {
      text,
      imageUrl: URL.createObjectURL(image), // Use a URL to display the image
    };

    // Update the state to include the new data
    setUploadedData((prevData) => [...prevData, newData]);

    // Reset form
    setText('');
    setImage(null);
  };

  return (
    <div className="App">
      <Header logoSrc={logo}/>
      <header className="App-header">
        <h3> Upload image and text here: </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Text area:
              <textarea value={text} onChange={handleTextChange} />
            </label>
          </div>
          <div>
            <label>
              Image:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>

        {/* Display uploaded data */}
        {uploadedData.map((data, index) => (
          <div key={index}>
            <p>{data.text}</p>
            <img src={data.imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
