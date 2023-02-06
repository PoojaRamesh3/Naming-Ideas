import React from 'react';
import './Header.css';

const Header = ({ headProp, headerExpandProp }) => {
    return (
        <div className="header-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`header-image ${
                    headerExpandProp
                        ? 'header-image-expand'
                        : 'header-image-contract'
                }`}
                alt="Header-Image"
            />
            <h1
                className={`head-text ${
                    headerExpandProp
                        ? 'header-text-expand'
                        : 'header-text-contract'
                }`}
            >
                {headProp}
            </h1>
        </div>
    );
};

export default Header;
