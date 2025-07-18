import DownloadIcon from '@mui/icons-material/Download';
import Android from '@mui/icons-material/Android';
import { buttonStyle } from '../../components/material/Theme';
import { Button, Paper, Typography } from '@mui/material';
import './Download.css';

const Download = () => {

  const latestVersion = process.env.REACT_APP_LATEST_VERSION;
  const apkUrl = process.env.REACT_APP_APK_URL
  const bgColor = '#F6F8FA';

  return (
    <div id='download' className='mt-section mt-download-bg-color'>
      <div className='mt-section-content'>

        <div className="mt-download-title">
          <h1>App download</h1>
        </div>

        <div className='content-flex'>

          <div className='content-item'>
            <h2>Start your journey of learning</h2>
            <p>The latest version of the app is <b>v{latestVersion}</b></p>
            <Paper
              variant="outlined"
              sx={{
                padding:2, 
                textAlign:'center',
                background: bgColor
              }}
            >

              <Typography variant="body1" noWrap sx={{marginBottom:'0 !important'}}>
                <Android fontSize="large" sx={{ verticalAlign: 'middle', mr: 1 }} />
                for Android
              </Typography>

              <Button
                type="button"
                variant="contained"
                startIcon={<DownloadIcon size={20} />}
                sx={ buttonStyle }
                href={apkUrl}
              >
                Download MemoTest
              </Button>
            </Paper>

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