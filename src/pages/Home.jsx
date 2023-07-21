import React from 'react';
import landingPicture from '../assets/asset-01.jpg';
import habioLogo from '../assets/asset-02.png';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Home = () => {
    return (
        <>
            <header className="header">
                <nav className="navBar">
                    <ul className="linkItems">
                        <li className="linkItem"><img src={habioLogo} alt="habioLogo" /></li>
                        <li className="linkItem"><a href="">Learn</a></li>
                        <li className="linkItem">Shop</li>
                    </ul>
                    <ul className="linkItems">
                        <li className="linkItem">Cart(0)</li>
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