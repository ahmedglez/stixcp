import React from 'react';
const ServiceItem = ({title, icon1, icon2, icon3, li1, li2, li3}) => {
    return (
        <div className="services-item col-lg-5 col-md-6 col-sm-12">

            <div className="service-item-title">
                <h4>{title}</h4>
            </div>

            <div className="service-item-img-container">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
            </div>

            <div className="service-item-img-container text">
                <ul>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                </ul>
            </div>

            <div className="service-item-separator">

            </div>
        </div>
    );
};

export default ServiceItem;