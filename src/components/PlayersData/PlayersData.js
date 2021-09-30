import React from 'react';
import Header from '../PLayerCard/Header';
import Footer from '../PLayerCard/Footer';
import UserCards from '../PLayerCard/UserCard';

function PlayersData(props) {
    return (
        <div>
            <Header/>
            <UserCards/>
            <Footer/>
        </div>
    );
}

export default PlayersData;