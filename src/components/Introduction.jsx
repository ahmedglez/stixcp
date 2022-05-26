import React from 'react';
import introduction_img_lg from '../assets/images/main_pc.png'
import introduction_img_sm from '../assets/images/main_mobile.png'
import '../styles/Introduction.scss';
const Introduction = () => {


    return (
        <div className='introduction'>

            <div className="introduction-container container-fluid">
                <img src={window.screen.width > 400 ? introduction_img_lg : introduction_img_sm} alt="" />

            </div>

        </div >
    );
};

export default Introduction;