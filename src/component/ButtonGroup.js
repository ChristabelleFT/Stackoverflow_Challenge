import React, {Component} from 'react';
import { StyledButton } from './StyledButton';

class ButtonGroup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        }
    }

    render() {
        return (
            <div style={{ alignSelf: "center" }}>
                <StyledButton
                    style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px" }}
                    text="Newest"
                    selected={this.state.active === 1}
                    onClick={() => this.setState({ active: 1 })}
                />
                <StyledButton
                    style={{ borderRadius: "0px" }}
                    text="Active"
                    selected={this.state.active === 2}
                    onClick={() => this.setState({ active: 2 })}
                />
                <StyledButton
                    style={{ borderRadius: "0px" }}
                    text="Bountied"
                    selected={this.state.active === 3}
                    onClick={() => this.setState({ active: 3 })}
                />
                <StyledButton
                    style={{ borderRadius: "0px" }}
                    text="Unanswered"
                    selected={this.state.active === 4}
                    onClick={() => this.setState({ active: 4 })}
                /> 
                <StyledButton
                    style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
                    text="More"
                    selected={this.state.active === 5}
                    onClick={() => this.setState({ active: 5 })}
                />
            </div>
        )
    }
}

export default ButtonGroup;