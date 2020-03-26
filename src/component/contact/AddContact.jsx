import React, { Component } from 'react'


class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    };

    onChange = (e) => this.setState( {[e.target.name] : e.target.value} );

    render() {

        const {name, email, phone } = this.state

        return (
            <div className="card mb-3">
                <div className="card-header">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text"
                            name="name"
                            placeholder="Enter name..."
                            className="form-control form-control-sm"
                            value={name}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input 
                            type="text"
                            name="email"
                            placeholder="Enter email..."
                            className="form-control form-control-sm"
                            value={email}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">phone</label>
                            <input 
                            type="text"
                            name="phnoe"
                            placeholder="Enter phone..."
                            className="form-control form-control-sm"
                            value={phone}
                            onChange={this.onChange}
                            />
                        </div>
                        <input 
                        type="submit"
                        value="Add Contact"
                        className="btn btn-block"
                        />
                    </form>
                </div>
            </div>
        )
    }
}


export default AddContact