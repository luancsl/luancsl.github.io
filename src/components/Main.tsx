import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import '../assets/styles/Main.scss';

const MediumIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="20 10 512 512">
      <path d="M512,0l0,512l-512,0l0,-512l512,0Zm-87.288,388.595l0,-5.779l-26.817,-26.328c-2.367,-1.804 -3.542,-4.77 -3.051,-7.705l0,-193.443c-0.491,-2.935 0.684,-5.901 3.051,-7.705l27.459,-26.328l0,-5.779l-95.063,0l-67.764,169.041l-77.077,-169.041l-99.72,0l0,5.779l32.116,38.689c3.153,2.842 4.763,7.015 4.336,11.237l0,152.025c0.935,5.484 -0.793,11.086 -4.657,15.09l-36.13,43.826l0,5.779l102.449,0l0,-5.779l-36.13,-43.826c-3.892,-3.997 -5.728,-9.562 -4.978,-15.09l0,-131.477l89.924,196.172l10.437,0l77.239,-196.172l0,156.36c0,4.173 0,4.976 -2.73,7.705l-27.78,26.97l0,5.779l134.886,0Z" />
    </SvgIcon>
  );
};

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/16072049?v=4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/luancsl" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/luan-lins-b5960570/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://medium.com/@luancsl" target="_blank" rel="noreferrer"><MediumIcon/></a>
          </div>
          <h1>Luan Lins</h1>
          <p>Fullstack Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/luancsl" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/luan-lins-b5960570/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://medium.com/@luancsl" target="_blank" rel="noreferrer"><MediumIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;