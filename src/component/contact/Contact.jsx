import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
//import './contact.css'

class Contact extends Component {
  state = {
    seeInfo: false,
  };

  toggle = (e) => {
    this.setState({ seeInfo: !this.state.seeInfo });
  };

  removeUser = async (dispatch, id) => {
    await axios
      .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { seeInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className="card-title">
                {" "}
                {name}
                <i
                  onClick={this.toggle}
                  className="fas fa-caret-down"
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                ></i>
                <i
                  className="fas fa-user-minus fa-sm"
                  style={actions}
                  onClick={this.removeUser.bind(this, dispatch, id)}
                ></i>
                <Link to={`/edit/${id}`}>
                  <i className="fas fa-pencil-alt fa-sm mr-2" style={actions} />
                </Link>
              </h4>

              {seeInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email} </li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

const actions = {
  float: "right",
  marginTop: "10px",
  cursor: "pointer",
};

// Contact.defaultProps = {
//     name: 'contact name',
//     email: 'person email',
//     phone: 'person number'
// };

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
