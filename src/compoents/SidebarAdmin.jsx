import React from 'react';
const SidebarAdmin = () => {
    return(
        <div className={`sidebar ${isActive ? 'active' : ''}`}>
        <div className="logo-details">
            <i className='bx bxl-c-plus-plus bx-flashing'></i>
            <span className="logo_name">BatDongSan</span>
        </div>
        <div className="nav-link">
            <li>
                <Link className={location.pathname === '/admin' ? 'active' : ''}
                to="/admin">
                    <i className='bx bx-grid-alt bx-tada-hover'></i>
                    <span className="links_name">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link  className={location.pathname === '/admin/ListPost' ? 'active' : '' } to="/admin/ListPost">
                    <div className={`nav-item ${isSubMenuOpen ? 'open' : ''}`} onClick={toggleSubMenu}>
                       <i className='bx bx-list-ul bx-tada-hover'></i> 
                        <span className="links_name">Manager Post</span>
                        <i className={`bx ${isSubMenuOpen ? 'bx-chevron-down bx-fade-down' : 'bx-chevron-right bx-fade-right'}`}></i>
                    </div>
                </Link>
                
            </li>
            {isSubMenuOpen && (
                    <ul className="sub-menu">
                        <li><Link to="/admin/CDPost"><i className="bx bx-loader bx-spin"></i>Processing Post</Link></li>
                        <li><Link to="/admin/DenyPost"><i className='bx bx-box bx-tada-hover'></i>Refused Post</Link></li>
                    </ul>
                )}
            <li>
                <Link className={location.pathname === '/admin/AccountUser' ? 'active' : ''} to="/admin/AccountUser">
                    <i className='bx bx-user  bx-tada-hover'></i>
                    <span className="links_name">User Account</span>
                </Link>
            </li>
        
                <li>
                    <Link className={location.pathname === '/admin/PackageList' ? 'active' : ''} to="/admin/PackageList">
                        <i className='bx bx-package bx-tada-hover'></i>
                        <span className="links_name">Package</span>
                    </Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/NewAdmin' ? 'active' : ''} to="/admin/NewAdmin">
                        <i className='bx bxs-news bx-tada-hover'></i>
                        <span className="links_name">New</span>
                    </Link>
                </li>
                <li>
                    <Link className={location.pathname === '/admin/ListFeedBack' ? 'active' : ''} to="/admin/ListFeedBack">
                        <i className='bx bx-message-rounded bx-tada-hover'></i>
                        <span className="links_name">Feed Back</span>
                    </Link>
                </li>
                <li>
                    <a onClick={handleLogout}>
                    <i className='bx bx-log-out bx-tada-hover'></i>
                    <span className="links_name">Log out</span>
                    </a>
                       
                 
                </li>
        </div>
    </div>
    )

}
export default SidebarAdmin