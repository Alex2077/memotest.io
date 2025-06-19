import './Download.css';

const Download = () => {

  return (
    <div id='download' className='mt-section mt-download-bg-color'>
      <div className='mt-section-content'>

        <div className="mt-download-title">
          <h1>App download</h1>
        </div>

        <div className='content-flex'>

          <div className='content-item'>
            <h2>Start your journey of learning</h2>
            <p>The latest version of the app is <b>v2025.2.3.4</b></p>
            <button className="primary-button">Download MemoTest</button>
          </div>

          <div className='content-item'>
            <div className="cards-container">
          
              <div className="info-card" key="1" >
                <div className="card-icon">📱</div>
                <h3>Learn whenever <br/>and wherever you want</h3>
                <p>Stay on track, see your progress, and learn one concept at a time.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Download;