import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Header(props) {

    const { FormName } = props

    return (
        <nav className=
            "navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"
        >
            <div className="container">
                <a href="/" className="navbar-brand">
                    {FormName}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="fas fa-home fa-sm mr-1"></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link">
                                <i className="fas fa-plus fa-sm mr-1"></i>Add
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    FormName: 'My From'
};

Header.propTypes = {
    FormName: PropTypes.string.isRequired
}

// const headerStyle = {
//     textDecoration: 'underLine', color: 'gray'
// }


export default Header
