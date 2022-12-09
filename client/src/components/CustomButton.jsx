import React from 'react';

const CustomButton = ({ btnType, title, handleClick, styles }) => {
    return (
        <button
            type={btnType}
            onClick={handleClick}
            className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
        >
            {title}
        </button>
    );
};

export default CustomButton;
// by Rokas with ❤️
