import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Account_list from "./account_list";
import Account_edit from "./Account_edit";

export default class AccountTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteAccount = this.deleteAccount.bind(this);
    }

    deleteAccount(){
        axios.delete('http://localhost:9000/accounts/delete-account/' + this.props.obj._id)
            .then((res) => {
                console.log('Account successfully deleted!')

            }).catch((error) => {
                console.log(error)
        })
    }
    render() {
        return (

            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <a href ={Account_edit} >
                       <button>Edit</button>
                    </a>

                    <Button onClick={this.deleteAccount} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>


        );
    }
}