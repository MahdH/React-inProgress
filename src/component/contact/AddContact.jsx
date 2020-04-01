import React, { Component } from 'react';
import { Consumer } from '../../context';
import {v4 as uuidv4} from 'uuid';


class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (dispatch, e) => {
    
        e.preventDefault();

        const { name, email, phone } = this.state;
        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        }
        dispatch({ type: 'ADD_CONTACT', payload: newContact })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { name, email, phone } = this.state

        return (
            <Consumer>
                {value => {

                    const { dispatch } = value;

                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter name..."
                                            className="form-control form-control-lg"
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter email..."
                                            className="form-control form-control-lg"
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Enter phone..."
                                            className="form-control form-control-lg"
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
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

        )
    }
}


export default AddContact