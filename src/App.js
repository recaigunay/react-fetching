import React, { Component } from 'react';
import Form from './Form';
import CardList from './CardList';

import './App.css';
//import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          name: "Paul O’Shannessy",
          avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
          company: "Facebook"
        }
      ]
    }

  }


  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    })
    )
  }


  render() {
    return (
      <div className="App">
        <div>
          <Form onSubmit={this.addNewCard} />
          <CardList cards={this.state.cards} />
        </div>
      </div>
    )
  }
}

export default App;
