import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Inputgroup from "../layout/Inputgroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );

    //const contact = res.data;

    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone,
    });
  }

  onSubmit = async (dispatch, e) => {
    
    e.preventDefault();

    const { name, email, phone } = this.state;

    if(name === ''){
      this.setState({errors: { name : 'Name is required'}});
      return;
    };
    if(email === ''){
      this.setState({ errors: { email: 'Email is required'}});
      return;
    };
    if(phone === ''){
      this.setState({ errors:{ phone: 'Phone is required'}});
    }

    const updateContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const response = await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, updateContact);
    dispatch( {type: 'UPDATE_CONTACT', playload: response.data} );

    this.props.history.push("/");
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    const { name, email, phone, errors } = this.state;
    
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          
          return (
            <div className="card mb3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <Inputgroup
                    type="text"
                    name="name"
                    placeholder="Enter Name ..."
                    value={name}
                    label="Name"
                    error={errors.name}
                    onChange={this.onChange}
                    ></Inputgroup>
                  <Inputgroup
                    type="email"
                    name="email"
                    placeholder="Enter Email ..."
                    
                    value={email}
                    label="Email"
                    error={errors.email}
                    onChange={this.onChange}
                  ></Inputgroup>
                  <Inputgroup
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number ..."
                    value={phone}
                    label="Phone"
                    error={errors.phone}
                    onChange={this.onChange}
                  ></Inputgroup>
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-dark btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
