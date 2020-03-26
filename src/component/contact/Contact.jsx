import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../context'

// import './contact.css'

class Contact extends Component {

    state = {
        seeInfo: false
    };

    toggle = e => {
        this.setState({seeInfo: !this.state.seeInfo})
    };

    removeUser = (dispatch, id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };

    render() {

        const { name, email, phone, id } = this.props.contact;
        const { seeInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4 className="card-title"> {name}
                                <i
                                    onClick={this.toggle} className="fas fa-caret-down"
                                    style={{ cursor: 'pointer', marginLeft: '10px' }}

                                ></i>
                                <i
                                    className="fas fa-user-minus fa-sm" style={minusIcon}
                                    onClick={this.removeUser.bind(this, dispatch, id)}
                                ></i>
                            </h4>

                            {seeInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email} </li>
                                    <li className="list-group-item">Phone: {phone} </li>
                                </ul>
                            ) : null
                            }
                        </div >
                    )
                }}
            </Consumer>
        );
    }
}

const minusIcon = {
    float: 'right',
    marginTop: '10px',
    cursor: 'pointer'
}

// Contact.defaultProps = {
//     name: 'contact name',
//     email: 'person email',
//     phone: 'person number'
// };

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact