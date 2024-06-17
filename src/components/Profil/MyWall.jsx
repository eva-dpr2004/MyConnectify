import React from 'react'
import homer from '../../assets/homer.jpeg'; 
import SendIcon from '@mui/icons-material/Send';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../../styles/Profil/ProfilComponents.css' 

function MyWall() {
  return (
    <div className="premier-post">
      <h1>My Walls</h1>
      <div className="my-wall-container">
          <div className="wall-content">
              <div className="wall-message">
                <div className='post'>
                  Le Rap US better than Le Rap FR
                  <p className='post-para'>08:10</p>
                </div>
                <br></br>
                  <div className='post' style={{ color: 'white'}}>
                      <img src={homer} alt="Homer" style={{ width: '300px', display:'flex', justifyContent:'center', alignItems:'center', padding:'40px' }} />
                      <h4 className='TextPost'>J'aime le classique...</h4>
                      <p className='post-para'>14:20</p>
                  </div>
                  <br></br>
                  <div className='post'>
                    <h4 className='TextPost'>J'ai plus d'inspiration...</h4>
                    <p className='post-para'>01:25</p>
                  </div>
              </div>
              <div className="wall-input-area">
                <input
                  className="wall-input"
                  type="text"
                  placeholder="Écrivez un message..."
                />
                  <button type="button" className="wall-upload-button">
                    <FileUploadIcon style={{ color: 'white' , backgroundColor:'#fbfb64', borderRadius:'20px', padding:'5px'}}/> 
                  </button>
                  <button type="button" className="wall-send-button">
                    <SendIcon style={{height:'20px'}}/> 
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default MyWall;