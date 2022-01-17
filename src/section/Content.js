import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import { IoIosSettings } from 'react-icons/io';
import ButtonGroup from '../component/ButtonGroup';
import Thread from './Thread';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threadCount: 0
        }
    }

    handleCallback = (childData) =>{
        this.setState({threadCount: childData})
    }

    render() {
        return (
            <div style={{ width: "70%", margin: 'auto' }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
                    <p> All questions </p>
                    <Button style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        borderRadius: "5px",
                        textTransform: "none",
                        height: "35px",
                        alignSelf: "center"
                    }}> Ask Question </Button>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingBottom: "15px", borderBottom: "1px solid #dee2e6"}}>
                    <p> {`${this.state.threadCount} questions`} </p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <ButtonGroup/>
                        <Button style={{
                            backgroundColor: "#17a2b8",
                            color: "white",
                            borderRadius: "5px",
                            textTransform: "none",
                            height: "35px",
                            alignSelf: "center",
                            marginLeft: "20px"
                        }}>
                            <IoIosSettings/>
                            <p style={{ marginLeft: "5px" }}>Filter</p> 
                        </Button>
                    </div>
                </div>
                <Thread parentCallback = {this.handleCallback}/>
            </div>
        );
    }
}

export default Content;