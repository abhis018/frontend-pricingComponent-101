import React from 'react';
import './Monthly.css';

const Monthly = ({onRouteChange}) => {
    return (
        <div className="body">
            <h1>Our Pricing</h1>
            <h4>Annually
                <label className="switch1 ma3">
                    <input 
                        onClick={() => onRouteChange('annually')}
                        type="checkbox"
                    />
                    <span className="slider1 round1"></span>
                </label>
                Monthly
            </h4>
            <div className="container">
                <div className="item1">
                    Basic<br/>
                    <h1 className="mt1 black">&#36;19.99</h1><hr/>
                    500 GB Storage<hr/>
                    2 Users Allowed<hr/>
                    Send up to 3 GB<hr/>
                    <button className="but mt3 grow">Learn More</button>
                </div>
                <div className="item2">
                    Professional<br/>
                    <h1>&#36;24.99</h1><hr/>
                    1 TB Storage<hr/>
                    5 Users Allowed<hr/>
                    Send up to 10 GB<hr/>
                    <button className="ton ma3 grow">Learn More</button>
                </div>
                    <div className="item3">
                    Master<br/>
                    <h1 className="mt1 black">&#36;39.99</h1><hr/>
                    2 TB Storage<hr/>
                    10 Users Allowed<hr/>
                    Send up to 20 GB<hr/>
                    <button className="but mt3 grow">Learn More</button>
                </div>
            </div>
        </div> 
    )
}

export default Monthly;