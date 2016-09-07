"use strict";

const React = require("react"),
      ReactDOM = require("react-dom"),
      DoubleToggleButton = require("./lib/component-styled.jsx");

let button;

let props = {
    leftButtonText: "no",
    rightButtonText: "yes",
    state: 1
};

const handleChange = (newState) => {
    props.state = newState;
    renderDoubleToggleButton();
};

const renderDoubleToggleButton = () => {
    button = ReactDOM.render(
        <DoubleToggleButton {...props} onChange={handleChange} />,
        document.getElementById("component-container")
    );
};

renderDoubleToggleButton();

button.focus();
