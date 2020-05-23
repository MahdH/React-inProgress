import React, { Component } from "react";
import { Consumer } from "../../context";
// import { v4 as uuidv4 } from 'uuid';
import Inputgroup from "../layout/Inputgroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is reqiured!" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is reqiured!" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is reqiured!" } });
      return;
    }

    // id: uuidv4(), (for generating IDs staticaly instead of letting backend api do it)
    /* 
      if properties of the object is the same with
      what the property is going to be assigned to.
    */
    const newContact = {
      name, // = name;
      email, // = email;
      phone, // = phone;
    };

    const response = await axios.post(
      "http://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: response.data });

    //Clears state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <Inputgroup
                    name="name"
                    label="Name"
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                    value={name}
                    error={errors.name}
                  />
                  <Inputgroup
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter email..."
                    onChange={this.onChange}
                    value={email}
                    error={errors.email}
                  />
                  <Inputgroup
                    name="phone"
                    label="Phone"
                    placeholder="Enter phone..."
                    onChange={this.onChange}
                    value={phone}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
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

export default AddContact;
