[![Build Status](https://travis-ci.org/ItsAsbreuk/itsa-react-doubletogglebutton.svg?branch=master)](https://travis-ci.org/ItsAsbreuk/itsa-react-doubletogglebutton)

Interactive double toggle button, that renderes two toggle-buttons next to each other (f.e. `no` `yes`) where only one will be pressed.

Lightweight, focussable, responses to keypresses.

## How to use:

```js
let button,
    props = {
        leftButtonText: "no",
        rightButtonText: "yes"
    }

const ReactDOM = require("react-dom"),
      Button = require("itsa-react-doubletogglebutton");

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
```

## About the css

You need the right css in order to make use of `itsa-react-button`. There are 2 options:

1. You can use the css-files inside the `css`-folder.
2. You can use: `Component = require("itsa-react-button/lib/component-styled.jsx");` and build your project with `webpack`. This is needed, because you need the right plugin to handle a requirement of the `scss`-file.


[View live example](http://projects.itsasbreuk.nl/react-components/itsa-button/component.html)

[API](http://projects.itsasbreuk.nl/react-components/itsa-button/api/)


#### If you want to express your appreciation

Feel free to donate to one of these addresses; my thanks will be great :)

* Ether: 0xE096EBC2D19eaE7dA8745AA5D71d4830Ef3DF963
* Bitcoin: 37GgB6MrvuxyqkQnGjwxcn7vkcdont1Vmg
