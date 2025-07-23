import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Thumbs = () => {
    const [isThumbsUp, setIsThumbsUp] = useState(true);    

    const toggleThumb = () => {
        setIsThumbsUp(prev => !prev);
    };

    return (
        <>
            <div className=" flex items-center justify-center bg-gray-100">
                <div className="text-6xl cursor-pointer text-blue-600" onClick={toggleThumb}>
                    <FontAwesomeIcon icon={isThumbsUp ? faThumbsUp : faThumbsDown} />
                </div>
            </div>

        </>
    );
};

export default Thumbs;
