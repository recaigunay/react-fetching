import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            error: '',
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => resp.json())
            .then(resp => {
                //debugger;
                //console.log(resp);
                this.props.onSubmit(resp);
                this.setState({userName:''});
            })
            .catch(error => {
                //debugger;
                console.log(error);
                this.setState({ error, isLoading: false })
            });
    }

    handleChange = (event) => {
        this.setState({ userName: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={this.handleChange}
                    placeholder="enter github username" />
                <button type="submit"> Add Card</button>
            </form>
        )
    }
}


export default Form;