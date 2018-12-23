
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {



    render() {
        return (
            <div>
                {this.props.cards.map((card, i) => <Card key={i} {...card} />)}
            </div>
        )
    }

}

export default CardList;