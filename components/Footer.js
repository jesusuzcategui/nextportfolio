import React from 'react';

const Foot = () => {
    let year = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <p className='text-center'>MyPortfolio | Created By Jesus Uzcategui &copy; {year}</p>
            </footer>
        </>
    );
};

export default Foot;