import React, { Component } from 'react'
// import Contact from './component/contact/Contact';
const iContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
         case ('DELETE_CONTACT'):
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            };
        case ('ADD_CONTACT'):
            return {
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            };
    
        default:
            return state;
    }
};


export class Provider extends Component {

    state = {
        contacts: [
            {
                id: '1',
                name: 'M.Hashemi',
                email: 'mash@gmail.com',
                phone: '+98 912 454 7987'
            },
            {
                id: '2',
                name: 'N.Bagheri',
                email: 'nibagh@gmail.com',
                phone: '+98 912 216 5465'
            },
            {
                id: '3',
                name: 'A.Doroudgar',
                email: 'aligar@gmail.com',
                phone: '+98 912 654 6748'
            }
        ],
        dispatch: action => this.setState(state =>
            reducer(state, action))
    };

    render() {
        return (
            <iContext.Provider value={this.state}>
                {this.props.children}
            </iContext.Provider>
        )
    }
}

export const Consumer = iContext.Consumer;