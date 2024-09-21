import React from 'react'
import "./footer/footer.scss";

const Footer = () => {
    return (
        <div className="container-fixed-padding text-center">
            <h3 className="footer-title font-weight-bold mb-3 line-height-1">For every kind of trip and 
                <a href="#"  className="ed-title"> every destination</a>
            </h3>

            <footer className='footer'>
                <div className='container'>
                    <div className='Footer'>
                        <div className="d-none d-sm-flex row">
                            <div className='col-sm-3'>
                                Made With ❤ in SF & more<br></br>
                                © 2024 Travelchime Inc.
                            </div>
                            <div className='col-sm-4'>
                                <div className='font-bold mb-2'>Wanderlog</div>
                                <div className='mb-2'>Hotels</div>
                                <div className='mb-2'>Blog</div>
                                <div className='mb-2'>Report security issue</div>
                                <div className='mb-2'>Terms, Privacy policy & Copyright</div>
                                <div className='mb-2'>Browser extension</div>
                                <div className='mb-2'>Travel budgeting & cost tracking</div>
                                <div className='mb-2'>How to embed a map on your travel blog</div>
                                <div className='mb-2'>Jobs</div>
                                <div className='mb-2'>Contact us</div>
                                <div className='mb-2'>Google data disclosure</div>
                            </div>
                            <div className='col-sm-3'>
                            <div className='font-bold mb-2'>Wandaerlog</div>
                                <div className='mb-2'>Trip planners by destination</div>
                                <div className='mb-2'>Explore cities and countries</div>
                                <div className='mb-2'>Road trips by destination</div>
                                <div className='mb-2'>Best places to visit by category</div>
                                <div className='long-text mb-2'>Popular search terms by destination</div>
                                <div className='mb-2'>Weather around the world</div>
                                <div className='mb-2'>Travel questions & answers</div>
                                <div className='mb-2'>Travel itinerary guides</div>
                                <div className='mb-2'>Maps of cities and national parks</div>
                                <div className='long-text mb-2'>Destinations at different times of the year</div>
                                <div className='mb-2'>Places to visit by destination</div>
                            </div>
                            <div className='col-sm-2'>
                            <div className='font-bold mb-2'>Get the App</div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
           
        </div>
    )
}

export default Footer