import React, { Component } from 'react'
const iContext = React.createContext();

class Provider extends Component {

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
        ]
    };

    render() {
        return (
            <iContext.Provider vlaue={this.state}>
                {this.props.children}
            </iContext.Provider>

        )
    }
}

export const Consumer = iContext.Consumer;