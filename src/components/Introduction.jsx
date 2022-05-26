import React from 'react';
import introduction_img_lg from '../assets/images/Untitled-1.png'
import introduction_img_sm from '../assets/images/main.png'
import '../styles/Introduction.scss';
const Introduction = () => {

    const layout_sm = <div className="introduction-container container-fluid">
        <img src={introduction_img_sm} alt="" />
        <div className="introduction-text">
            <p>Disfrute de su tranquilidad, usted la necesita y nosotros se la aseguramos</p>
        </div>
    </div>
    const layout_lg = <div className="introduction-container container-fluid">
        <img src={introduction_img_lg} alt="" />

    </div>
    return (
        <div className='introduction'>

            {window.screen.width > 400 ? layout_lg : layout_sm
            }

        </div >
    );
};

export default Introduction;