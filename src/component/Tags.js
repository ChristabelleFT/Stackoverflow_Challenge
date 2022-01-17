import React from 'react';

const Tags = (props) => {
    return(
        props.tagList.map((tag, index) => {
            return (
                <div style={{ backgroundColor: "#17a2b8", borderRadius: "5px", marginLeft: "5px" }}>
                    <p style={{ fontSize: "12px", fontWeight: "bold", color: "white", margin: "3px" }}>{tag}</p>
                </div>
            );
        })
    );
}

export default Tags;