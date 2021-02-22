import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Account_edit extends Component {

    constructor(props) {
        super(props)

        this.onChangeAccountName = this.onChangeAccountName.bind(this);
        this.onChangeAccountEmail = this.onChangeAccountEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            name: '',
            email: '',

        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/accounts/edit-account/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,

                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeAccountName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeAccountEmail(e) {
        this.setState({ email: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        const studentObject = {
            name: this.state.name,
            email: this.state.email
        };

        axios.put('http://localhost:9000/accounts/update-account/' + this.props.match.params.id, accountObject)
            .then((res) => {
                console.log(res.data)
                console.log('Account successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('/account-list')
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeAccountName} />
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeAccountEmail} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Update Account
                </Button>
            </Form>
        </div>);
    }
}