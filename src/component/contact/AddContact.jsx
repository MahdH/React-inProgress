import React, { Component } from 'react'


class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();

    }

    onSubmit = (e) => {
        
        e.preventDefault();

        const newContact = {
            name : this.nameInput.current.value,
            email : this.emailInput.current.value,
            phone : this.phoneInput.current.value
        };
        // console.log(this.phoneInput.current)
        console.log(newContact)
    };

    static defaultProps = {
        name: 'Alex',
        email:'Alex@gmail.com',
        phone:'+9898-988-8888'
    };

    render() {

        const { name, email, phone } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name..."
                                className="form-control form-control-lg"
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email..."
                                className="form-control form-control-lg"
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter phone..."
                                className="form-control form-control-lg"
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input
                            type="Submit"
                            defaultValue="Add Contact"
                            className="btn btn-dark btn-block"
                        />
                    </form>
                </div>
            </div>
        )
    }
}


export default AddContact