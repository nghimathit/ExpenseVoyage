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
                                <div className='font-bold mb-2'>Wandaerlog</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                            </div>
                            <div className='col-sm-3'>
                            <div className='font-bold mb-2'>Wandaerlog</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
                                <div className='mb-2'>a</div>
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