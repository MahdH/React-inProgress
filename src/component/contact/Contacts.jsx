import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {

    // state = {
    //     contacts: [
    //         {
    //             id: '1',
    //             name: 'M.Hashemi',
    //             email: 'mash@gmail.com',
    //             phone: '+98 912 454 7987'
    //         },
    //         {
    //             id: '2',
    //             name: 'N.Bagheri',
    //             email: 'nibagh@gmail.com',
    //             phone: '+98 912 216 5465'
    //         },
    //         {
    //             id: '3',
    //             name: 'A.Doroudgar',
    //             email: 'aligar@gmail.com',
    //             phone: '+98 912 654 6748'
    //         }
    //     ]
    // };

    // removeUser = deletingId => {
    //     const { contacts } = this.state;
    //     const newContacts = contacts.filter(contact =>
    //         contact.id !== deletingId
    //     );
    //     this.setState({
    //         contacts: newContacts
    //     })
    // }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                />
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}


export default Contacts
