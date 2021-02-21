import React from 'react';
import './form.css';
class Showall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        return(

            alert('hey you')
        );
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Show All' : 'Hide All'}
            </button>
        );
    }
}
export default Showall;