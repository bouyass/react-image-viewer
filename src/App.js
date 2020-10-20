import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [currentImage, setcurrentImage] = useState(1)

  const handleClick = (e) => {
    document.getElementById(currentImage).style.border = ''
    setcurrentImage(e.target.id)
    document.getElementById(e.target.id).style.border = '1px solid blue'
  }

  const leftClickHandler = (e) => {
    setcurrentImage(currentImage - 1)
  }

  const rightClickHandller = () => {
    setcurrentImage(currentImage + 1 )
  }

  return (
    <div className="App">
      <h1 className="main-title"> IMAGE VIEWER</h1>

      <div className="current-image">
      <FontAwesomeIcon size="6x" icon={faChevronLeft} onClick={leftClickHandler} /> <img id="currentSrc" src={`images/image-${currentImage}.jpg`}/>  <FontAwesomeIcon onClick={rightClickHandller}  size="6x"  icon={faChevronRight} />  
      </div>

      <div className="gallery">
      <img id="1" onClick={handleClick}  className="currentSrc" src="images/image-1.jpg" />
      <img id="2" onClick={handleClick}  className="currentSrc" src="images/image-2.jpg" />
      <img id="3" onClick={handleClick}  className="currentSrc" src="images/image-3.jpg" />
      <img id="4" onClick={handleClick}  className="currentSrc" src="images/image-4.jpg" />
      <img id="5" onClick={handleClick} className="currentSrc" src="images/image-5.jpg" />
      <img id="6" onClick={handleClick} className="currentSrc" src="images/image-6.jpg" />
      <img id="7" onClick={handleClick} className="currentSrc" src="images/image-7.jpg" />
      <img id="8" onClick={handleClick} className="currentSrc" src="images/image-8.jpg" />
      <img id="9" onClick={handleClick} className="currentSrc" src="images/image-9.jpg" />
      <img id="10" onClick={handleClick} className="currentSrc" src="images/image-10.jpg" />
      <img id="11" onClick={handleClick} className="currentSrc" src="images/image-11.jpg" />
      <img id="12" onClick={handleClick}  className="currentSrc" src="images/image-12.jpg" />
      </div>
    </div>
  );
}

export default App;
