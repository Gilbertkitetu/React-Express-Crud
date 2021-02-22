import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AccountTableRow from './AccountTableRow';


export default class Account_list extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:9000/accounts/')
            .then(res => {
                this.setState({
                    accounts: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.accounts.map((res, i) => {
            return <AccountTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}