import React, {Component} from 'react';
import axios from 'axios';
import VoteCounter from '../component/VoteCounter';
import Tags from '../component/Tags';

class Thread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            threads: [],
            page: 1
        }
    }

    componentDidMount() {
        this.retrieveAllThreads();
    }

    retrieveAllThreads() {
        axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow&filter=!nKzQUR30SM')
            .then((response) => {
                this.setState({ threads: response.data.items });
                this.props.parentCallback(response.data.items.length);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    render() {
        
        return this.state.threads.map((thread,index) => {
            return (
                <div key={index} style={{ borderBottom: "1px solid #dee2e6" }}>
                    <div style={{ display: "flex", flexDirection: "row", paddingBottom: "0px" }}>
                        <div>
                            <VoteCounter/>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <p style={{ fontSize: "14px", backgroundColor: "#f8f9fa", borderRadius: "5px", padding: "3px", fontWeight: "bold" }}> {thread.answer_count} </p> &nbsp;
                                <p style={{ fontSize: "14px" }}> answers </p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "-20px" }}>
                                <p style={{ fontSize: "14px", backgroundColor: "#f8f9fa", borderRadius: "5px", padding: "3px", fontWeight: "bold" }}> {thread.view_count} </p> &nbsp;
                                <p style={{ fontSize: "14px" }}> views </p>
                            </div>
                        </div>
                        <div style={{ marginLeft: "30px" }}>
                            <p style={{ color: "#007bff", cursor: "pointer" }}> {thread.title} </p>
                            <p class="content"> {thread.body_markdown} </p>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <Tags tagList={thread.tags}/>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignSelf: "end" }}>
                            <img src={thread.owner.profile_image} style={{ height: "32px" }} alt="profile"/>
                            <div style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}>
                                <p style={{ marginTop: "0px" }}> asked 0 mins ago </p>
                                <p style={{ color: "#007bff", cursor: "pointer", marginTop: "-10px", textAlign: "right" }}> {thread.owner.display_name} </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
}

export default Thread;