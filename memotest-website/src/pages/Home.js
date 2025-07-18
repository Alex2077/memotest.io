import React from 'react';
import './Page.css';
import Features from './features/Features';
import Download from './download/Download';
import { HashLink } from 'react-router-hash-link';

const Home = () => {

  return (
    <div className="page-container">
      
      <div className='content-flex'>

        <div className='content-item' style={{border:'0px dashed red'}}>
          <img 
            src={`${process.env.PUBLIC_URL}/mobile_android.webp`}
            alt='MemoTest in Android'
          />
        </div>

        <div className='content-item'>
          <h1>Master Any Topic with Smart Tests and Flashcards</h1>
          <p>MemoTest is your ultimate learning companion, designed to help you quickly grasp and retain new concepts through interactive flashcards. 
            Simply input your study material, and the app generates targeted questions to test your knowledge.</p>
          <HashLink smooth to="#download" className="primary-button">Download Memotest App</HashLink>
        </div>
      </div>

      <Features />

      <Download />

    </div>
  );
};

export default Home;