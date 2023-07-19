import React from 'react';
import landingPicture from '../assets/asset-01.jpg';
import habioLogo from '../assets/asset-02.png';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Home = () => {
    return (
        <>
            <header className="header">
                <nav className="navBar">
                    <div className="brand">
                        <h2>HABIO</h2>
                        <div className="empty"></div>
                    </div>
                    <div className="habioLogo">
                        <img src={habioLogo} alt="habioLogo" />
                    </div>
                    <ul className="linkItems">
                        <li className="linkItem">Home</li>
                        <li className="linkItem">About</li>
                        <li className="linkItem">Shop</li>
                        <li className="linkItem">Cart</li>
                        <li className="linkItem"><Person2OutlinedIcon /></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                
           </main>
        </>
    );
};

export default Home;