import React from 'react';
import './Forbidden.scss'
import imgforbidden from '../../assest/img/forbidden.jpg'

const Forbidden = () => {
    return (
        <div className='forbidden-container'>
            <div className='img-forbidden'>
                <img src={imgforbidden} />
            </div>
        </div>
    );
};

export default Forbidden;