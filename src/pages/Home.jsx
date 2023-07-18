import React from 'react';
import landingPicture from '../assets/asset-01.jpg'

const Home = () => {
    return (
        <>
            <div className="landingContainer">
                <div className="landingImage">
                    <img src={landingPicture} alt="landingImage" />
                </div>
                <div className="landingTextBox">
                    <div className="brandNav">
                        <h1 id="brand">habio</h1>
                        <ul className="navContainer">
                            <li className="nav"></li>
                            <li className="nav"></li>
                            <li className="nav"></li>
                        </ul>
                    </div>
                    <div className="companyInfo">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi enim eveniet qui iure sequi corporis voluptates iste autem nesciunt nisi velit suscipit, dolor magni! Veritatis quam ratione voluptas iste eaque aspernatur nostrum assumenda. Autem odio ut esse voluptatem. Tempore voluptas aperiam unde aspernatur a laborum in nisi repellendus laudantium?</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;