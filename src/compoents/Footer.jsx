import React from 'react'
import "./footer/footer.scss";

const Footer = () => {
    return (
        <div className="container-fixed-padding text-center">
            <h3 className="footer-title font-weight-bold mb-3 line-height-1">For every kind of trip and 
                <a href="#"  className="ed-title"> every destination</a>
            </h3>

            <div className="text-muted"></div>
            <div className="col-sm-6 col-md-3">
                <div className="col-md-4 mt-3">
                    <h3 className="footer-title font-weight-bold mb-3 line-height-1">
                        The best 
                        <a href="#" className="ed-title"> road trip </a>
                        planner
                    </h3>
                    <div className="text-muted">
                    Use Expense Voyage as a route map showing directions, distances, and driving times between different attractions you might want to visit.
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <h3 className="footer-title font-weight-bold mb-3 line-height-1">
                    The best vacation planner
                    </h3>
                    <div className="text-muted">
                    Use Expense Voyage to map your journey to figure out the best routes, keep track of hotel and flight bookings and reservations, and read guides from other trip planning websites.
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <h3 className="footer-title font-weight-bold mb-3 line-height-1">
                    The best group itinerary planner
                    </h3>
                    <div className="text-muted">
                    Use Expense Voyage to share your itinerary with tripmates, friends, and families and collaborate in real time, so everyone stays in the loop.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer