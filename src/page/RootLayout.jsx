import React from 'react'
import Hearder from '../compoents/Hearder'
import { Outlet } from 'react-router-dom'
import Footer from '@compoents/Footer'

const RootLayout = () => {
    return (
        <div >
            <div className='w-full'>
                <Hearder /> {/*Các compont chung */}
            </div>

            <Outlet /> {/*các component ở giữa */}
            <div className='w-full'>
                <Footer /> {/*Các compont chung */}
            </div>

        </div>
    )
}

export default RootLayout