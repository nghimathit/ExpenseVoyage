import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Hearder = props => {
    return (
        <header className="flex h-14 lg:h-20 items-center justify-between bg-slate-950 px-8 text-white w-full">
            <div className="flex items-center gap-4">
                <Link to="/">
                    Logo
                </Link >
                <Link to="/acb">
                    ABC
                </Link >
                <Link to="/def">
                    DEF
                </Link >

                <a href="">ĐÂY LÀ HEADER</a>
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="cursor-pointer"
                />
            </div>
        </header>
    )
}

Hearder.propTypes = {}

export default Hearder