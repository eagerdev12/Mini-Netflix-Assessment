import React from 'react';

const Header = () => {
    return (
        <div className='header bg-success'>
            <h2 className='w-20'>Mini Netflix</h2>
            <div className='d-flex w-100 justify-content-end'>
                <input className='search-box' placeholder='Search'></input>
            </div>
        </div>
    )
}

export default Header;