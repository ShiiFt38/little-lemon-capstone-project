import React from 'react';
import Header from '../components/Header';


const ConfirmedBooking = () => {
  return (
    <>
        <Header />
        <div style={{height: '75vh', textAlign: 'center', display: 'flex', justifyContent: 'center', paddingTop: '100px'}}>
            <h1 style={{margin: 'auto'}}>Booking Confirmed</h1>
        </div>
    </>
  )
};

export default ConfirmedBooking;