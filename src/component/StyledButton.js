import React from 'react';
import { Button } from '@material-ui/core';

export const StyledButton = (props) => {
  return (
    <Button
    style={{
        textTransform: "none",
        border: "1px solid #6c757d",
        color: props.selected ? "white" : "#6c757d",
        backgroundColor: props.selected ? "#6c757d" : "white",
        height: "35px",
        ...props.style,
    }}
    onClick={props.onClick}
    >
    {props.text}
    </Button>
  );
}
