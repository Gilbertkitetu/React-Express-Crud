import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return(
<div>
    <h1>Welcome to React</h1>
    <h1>{this.state.apiResponse} </h1>
</div>

        );
    }
}
export default App;