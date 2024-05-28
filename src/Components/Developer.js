import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const DeveloperAPI = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div>
          <h1>Developer API</h1>
          <p>This is where you can find information about our developer API.</p>
          {/* Add your developer API content here */}
          <Link to="/developer-api/docs">
            <button className="App-link">Go to Developer API</button>
          </Link>
        </div>
      </header>
      <Footer/>
    </div>
  );
};

export default DeveloperAPI;
