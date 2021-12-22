import React, { state } from 'react';
import './Destination.css';
import DestinationItem from './DestinationItem';

function DestinationContent() {
    return (
        <div className='visit'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='visit__container'>
                <div className='visit__wrapper'>
                    <ul className='visit__items'>
                        <DestinationItem
                            src='images/bromo.jpg'
                            text='Mountains'
                            path='/content/Mountain'
                        />
                        <DestinationItem
                            src='images/toba1.jpg'
                            text='Lakes'
                            path='/content/Lake'
                        />
                        <DestinationItem
                            src='images/kanto1.jpg'
                            text='Waterfalls'
                            path='/content/Waterfall'
                        />
                    </ul>
                    <ul className='visit__items'>
                        <DestinationItem
                            src='images/maron1.jpg'
                            text='Rivers & Streams'
                            path='/content/RiverStream'
                        />
                        <DestinationItem
                            src='images/labuan.jpg'
                            text='Beach'
                            path='/content/Beach'
                        />
                        <DestinationItem
                            src='images/ubud.jpg'
                            text='Parks & Forest'
                            path='/content/ParkForest'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DestinationContent;