import React, { Component } from "react";
import axios from "axios";
// import Contact from './component/contact/Contact';
const iContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          (contact.id === action.playload.id)
            ? contact = action.playload
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  async componentDidMount() {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );

    this.setState({ contacts: response.data });
  }

  /*
  .
  STATE
  .  
  */
  state = {
    contacts: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <iContext.Provider value={this.state}>
        {this.props.children}
      </iContext.Provider>
    );
  }
}

export const Consumer = iContext.Consumer;
