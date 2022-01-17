import React, {Component} from 'react';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { Button } from '@material-ui/core';

class VoteCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        }
    }

    render() {
        return (
            <div style={{ marginTop: "15px", textAlign: "center" }}>
                <Button onClick={() => this.setState((previousState) => ({ vote: previousState.vote + 1 }))}>
                    <AiFillCaretUp/>
                </Button>
                <div style={{ backgroundColor: "#ffc107", borderRadius: "5px" }}>
                    <p style={{ textAlign: "center", margin: "5px", fontSize: "12px", fontWeight: "bold" }}> {`${this.state.vote} votes`} </p>
                </div>
                <Button onClick={() => this.setState((previousState) => ({ vote: previousState.vote - 1 }))}>
                    <AiFillCaretDown/>
                </Button>
            </div>
        )
    }
}

export default VoteCounter;
