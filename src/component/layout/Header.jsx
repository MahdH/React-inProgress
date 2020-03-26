import React from 'react'
import PropTypes from 'prop-types'


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
                            <a href="/" className="nav-link">
                                Home
                            </a>
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
