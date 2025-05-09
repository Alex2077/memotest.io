import React from 'react';
import './Page.css';

const Home = () => {
  return (
    <div className="page-container">
      
      <div className='content-flex'>

        <div className='content-item' style={{border:'0px dashed red'}}>
          <img 
            src='/mobile_android.webp'
            alt='MemoTest in Android'
          />
        </div>

        <div className='content-item'>
          <h1>Master Any Topic with Smart Flashcards</h1>
          <p>MemoTest is your ultimate learning companion, designed to help you quickly grasp and retain new concepts through interactive flashcards. Simply input your study material, and the app generates targeted questions to test your knowledge.</p>
          <button className="primary-button">Learn More</button>
        </div>

      </div>
    </div>
  );
};

export default Home;