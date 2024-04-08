// import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 bottom-0">
            <div className="container mx-auto">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
