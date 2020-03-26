import React, { Component } from 'react'


class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    };



    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text"
                            placeholder="Enter name..."
                            value={name}
                                
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default AddContact