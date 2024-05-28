import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import binanceLogo from '../binance-1.png';
import TrustImage from '../qr.png';

const Payment = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCopy = () => {
        // Logic to copy payment amount
        const paymentAmount = document.getElementById('paymentAmount');
        paymentAmount.select();
        document.execCommand('copy');
        setIsFlipped(true); // Set isFlipped to true to show the other image
    };

    return (
        <div className="App">
            <header className="App-header">

                <div className='main-wrap'>
                    <div className='copy'>
                        <div className='payment'>
                        <div className="datta"  contentEditable="false">56666688009638gfbdn</div>

                        </div>
                        <FontAwesomeIcon icon={faCopy} onClick={handleCopy} style={{ cursor: 'pointer', marginTop: '5px', marginLeft: '10px' }} />
                    </div>

                    <div className='pt-4'>
                        <img
                            src={isFlipped ? TrustImage : binanceLogo}
                            className="logo-biance"
                            alt="logo"
                            onClick={() => setIsFlipped(!isFlipped)}
                            style={{ cursor: 'pointer', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', transition: 'transform 0.5s' }}
                        />
                    </div>
                    <div className='payment'>
              <div className="datta"  contentEditable="false">Pay:$40</div>
                   </div>
                   <br></br>
                    <div className='payment'>
                        <input id="paymentAmount" type="text" placeholder="Transaction ID" />
                    </div>
                    <div>
                        <button className="App-link">Submit Payment</button>
                    </div>
                  <form id="multistepsform">

                        <ul id="progressbar">
                            <li class="active">Payment Initiated</li>
                            <li>In Progress</li>
                            <li>Payment Completed</li>
                        </ul>
                    </form>
                </div>


            </header>
        </div>
    );
};

export default Payment;
