import React, { useState, useEffect } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import './themes/switcher.scss';

function App() {
  //selected Image state
  const [selectedImg, setSelectedImg] = useState(null);
  //theme state hook
  const[colorTheme, setColorTheme] = useState('theme-white');
  //Theme selection effect
  useEffect(() => {
    //effect
    //check for selected theme //local storage value
    const currentThemeColor = localStorage.getItem('theme-color');
    //found selected color value in state
    if(currentThemeColor){
      setColorTheme(currentThemeColor);
    }
/* 
    return () => {
      
    } */
  }, [])
  //theme change event sets theme
  const handleClick= (theme)=>{
    setColorTheme(theme);
    localStorage.setItem('theme-color',theme);
  };

  return (
    <div className={`App ${colorTheme}`}>
      <div className="head">
      <div className="head-title"><h2>fotofire</h2></div>
      <div className="theme-option">
        <div id="theme-white" 
          onClick={()=>{handleClick('theme-white')}}
          className={`${colorTheme ==='theme-white'?'active':''}`}
        />
        <div id="theme-blue" 
          onClick={()=>{handleClick('theme-blue')}}
          className={`${colorTheme ==='theme-blue'?'active':''}`}
        />
        <div id="theme-orange" 
          onClick={()=>{handleClick('theme-orange')}}
          className={`${colorTheme ==='theme-orange'?'active':''}`}
        />
        <div id="theme-purple" 
          onClick={()=>{handleClick('theme-purple')}}
          className={`${colorTheme ==='theme-purple'?'active':''}`}
        />
        <div id="theme-green" 
          onClick={()=>{handleClick('theme-green')}}
          className={`${colorTheme ==='theme-green'?'active':''}`}
        />
        <div id="theme-black" 
          onClick={()=>{handleClick('theme-black')}}
          className={`${colorTheme ==='theme-black'?'active':''}`}
        />
      </div>
      </div>
      <div className="content-box">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </div>

    </div>
  );
}

export default App;
