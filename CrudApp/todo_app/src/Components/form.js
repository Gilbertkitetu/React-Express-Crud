import React from 'react';
import ReactDOM from 'react-dom';
import './form.css';
import Showall from "./showall";
import App from "./app";
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        email: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleEmailChange(event){
        this.setState({email: event.target.value});
    }
    handleSubmit(event) {
        alert('A name: ' + this.state.value + ' & email: ' + this.state.email + ' was submitted.');
        event.preventDefault();
        event.preventDefault();
    }





    render() {
        return (
            <div>
            <h1>ADD ACCOUNTS</h1>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />

                </label>
                <label>
                    Email:
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <input id="sub-button" type="submit" value="ADD" />


            </form>
<Showall/>
<App/>
            </div>
        );
    }
}
export default Form;