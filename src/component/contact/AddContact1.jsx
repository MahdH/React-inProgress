import React, { Component } from 'react'


class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { name, email, phone } = this.state

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form>
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
        )
    }
}


export default AddContact