"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module component.jsx
 * @class Component
 * @since 15.0.0
*/

const React = require("react"),
    PropTypes = require("prop-types"),
    ToggleButton = require("itsa-react-togglebutton"),
    MAIN_CLASS = "itsa-doubletogglebutton";

class Component extends React.Component {
    constructor(props) {
        super(props);
        const instance = this;
        instance.blur = instance.blur.bind(instance);
        instance.focus = instance.focus.bind(instance);
        instance.handleChange = instance.handleChange.bind(instance);
    }

    /**
     * Blurs the Component.
     *
     * @method blur
     * @chainable
     * @since 0.0.1
     */
    blur() {
        var instance = this;
        instance._leftButton.blur();
        instance._rightButton.blur();
        return instance;
    }

    /**
     * Sets the focus on the Component's unchecked button. (unless specified to set at the checked)
     *
     * @method focus
     * @param [focusChecked=false] {boolean} to focus the checked button
     * @param [transitionTime] {Number} transition-time to focus the element into the view
     * @chainable
     * @since 0.0.1
     */
    focus(focusChecked, transitionTime) {
        let refName;
        const instance = this;
        if (focusChecked) {
            refName = ((instance.props.state>1) ? "right" : "left");
        }
        else {
            refName = ((instance.props.state===1) ? "right" : "left");
        }
        instance['_'+refName+'Button'].focus(transitionTime);
    }

    handleChange(newState) {
        let refName;
        const instance = this;
        if (newState!==0) {
            refName = ((newState===1) ? "right" : "left");
            instance['_'+refName+'Button'].focus();
        }
        instance.props.onChange(newState);
    }

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 15.0.0
     */
    render() {
        let classname = MAIN_CLASS;
        const instance = this,
            props = instance.props,
            propsClassName = props.className,
            state = props.state,
            stateUndefinable = props.stateUndefinable;

        propsClassName && (classname+=' '+propsClassName);
        return (
            <div
                className={classname}
                style={props.style}>
                <ToggleButton
                    activatedBy={props.leftActivatedBy}
                    aria-label={props["left-aria-label"]}
                    buttonText={props.leftButtonText}
                    buttonTextPressed={props.leftButtonTextPressed}
                    buttonTextReleased={props.leftButtonTextReleased}
                    buttonHTML={props.leftButtonHTML}
                    buttonHTMLPressed={props.leftButtonHTMLPressed}
                    buttonHTMLReleased={props.leftButtonHTMLReleased}
                    className={props.buttonClass}
                    disabled={props.disabled}
                    name={props.leftName}
                    onChange={instance.handleChange.bind(instance, (stateUndefinable && (state===1)) ? 0 : 1)}
                    pressed={state===1}
                    ref={node => instance._leftButton = node}
                    tabIndex={props.tabIndex} />
                <ToggleButton
                    activatedBy={props.rightActivatedBy}
                    aria-label={props["right-aria-label"]}
                    buttonText={props.rightButtonText}
                    buttonTextPressed={props.rightButtonTextPressed}
                    buttonTextReleased={props.rightButtonTextReleased}
                    buttonHTML={props.rightButtonHTML}
                    buttonHTMLPressed={props.rightButtonHTMLPressed}
                    buttonHTMLReleased={props.rightButtonHTMLReleased}
                    className={props.buttonClass}
                    disabled={props.disabled}
                    name={props.rightName}
                    onChange={instance.handleChange.bind(null, (stateUndefinable && (state>1)) ? 0 : 2)}
                    pressed={state>1}
                    ref={node => instance._rightButton = node}
                    tabIndex={props.tabIndex} />
            </div>
        );
    }

}

Component.propTypes = {
    /**
     * The class that should be set on the two button-elements
     *
     * @property buttonClass
     * @type String
     * @since 0.0.1
    */
    buttonClass: PropTypes.string,

    /**
     * The class that should be set on the element
     *
     * @property className
     * @type String
     * @since 0.0.1
    */
    className: PropTypes.string,

    /**
     * Whether the button is disabled
     *
     * @property disabled
     * @type Boolean
     * @since 0.0.1
    */
    disabled: PropTypes.bool,

    /**
     * Array with the keys that can press the left button when focussed.
     * Default: [13, 32]
     *
     * @property activatedBy
     * @type Array
     * @since 0.0.1
    */
    leftActivatedBy: PropTypes.array,

    /**
     * The aria-label for the left button. When not set, it will equal the buttonText
     *
     * @property aria-label
     * @type String
     * @since 0.0.1
    */
    "left-aria-label": PropTypes.string,

    /**
     * The Button-text for the left button. Will be escaped. If you need HTML, then use `buttonHTML` instead.
     * If you need different buttonText for the `pressed` and `release`-state, then use
     * `buttonTextPressed` and `buttonTextReleased`
     *
     * @property leftButtonText
     * @type String
     * @since 0.0.1
    */
    leftButtonText: PropTypes.string,

    /**
     * The Button-text for the left button when pressed. Will be escaped. If you need HTML, then use `buttonHTML` instead.
     *
     * @property leftButtonTextPressed
     * @type String
     * @since 0.0.1
    */
    leftButtonTextPressed: PropTypes.string,

    /**
     * The Button-text for the left button. Will be escaped. If you need HTML, then use `buttonHTML` instead.
     *
     * @property leftButtonTextReleased
     * @type String
     * @since 0.0.1
    */
    leftButtonTextReleased: PropTypes.string,

    /**
     * The Button-text for the left button, retaining html-code. If you don't need HTML, then `buttonText` is preferred.
     * If you need different buttonText for the `pressed` and `release`-state, then use
     * `buttonHTMLPressed` and `buttonHTMLReleased`
     *
     * @property leftButtonHTML
     * @type String
     * @since 0.0.1
    */
    leftButtonHTML: PropTypes.string,

    /**
     * The Button-text for the left button, retaining html-code. If you don't need HTML,
     * then `buttonText` is preferred.
     *
     * @property leftButtonHTMLPressed
     * @type String
     * @since 0.0.1
    */
    leftButtonHTMLPressed: PropTypes.string,

    /**
     * The Button-text for the left button, retaining html-code. If you don't need HTML,
     * then `buttonText` is preferred.
     *
     * @property leftButtonHTMLReleased
     * @type String
     * @since 0.0.1
    */
    leftButtonHTMLReleased: PropTypes.string,

    /**
     * The name-attribute of the left button
     *
     * @property name
     * @type String
     * @since 0.0.1
    */
    leftName: PropTypes.string,

    /**
     * Callback wheneveer the button gets clicked.
     *
     * @property onClick
     * @type Function
     * @since 0.0.1
    */
    onChange: PropTypes.func.isRequired,

    /**
     * Array with the keys that can press the right button when focussed.
     * Default: [13, 32]
     *
     * @property activatedBy
     * @type Array
     * @since 0.0.1
    */
    rightActivatedBy: PropTypes.array,

    /**
     * The aria-label for the right button. When not set, it will equal the buttonText
     *
     * @property aria-label
     * @type String
     * @since 0.0.1
    */
    "right-aria-label": PropTypes.string,

    /**
     * The Button-text for the right button. Will be escaped. If you need HTML, then use `buttonHTML` instead.
     * If you need different buttonText for the `pressed` and `release`-state, then use
     * `buttonTextPressed` and `buttonTextReleased`
     *
     * @property rightButtonText
     * @type String
     * @since 0.0.1
    */
    rightButtonText: PropTypes.string,

    /**
     * The Button-text for the right button when pressed. Will be escaped. If you need HTML, then use `buttonHTML` instead.
     *
     * @property rightButtonTextPressed
     * @type String
     * @since 0.0.1
    */
    rightButtonTextPressed: PropTypes.string,

    /**
     * The Button-text for the right button. Will be escaped. If you need HTML, then use `buttonHTML` instead.
     *
     * @property rightButtonTextReleased
     * @type String
     * @since 0.0.1
    */
    rightButtonTextReleased: PropTypes.string,

    /**
     * The Button-text for the right button, retaining html-code. If you don't need HTML, then `buttonText` is preferred.
     * If you need different buttonText for the `pressed` and `release`-state, then use
     * `buttonHTMLPressed` and `buttonHTMLReleased`
     *
     * @property rightButtonHTML
     * @type String
     * @since 0.0.1
    */
    rightButtonHTML: PropTypes.string,

    /**
     * The Button-text for the right button, retaining html-code. If you don't need HTML,
     * then `buttonText` is preferred.
     *
     * @property rightButtonHTMLPressed
     * @type String
     * @since 0.0.1
    */
    rightButtonHTMLPressed: PropTypes.string,

    /**
     * The Button-text for the right button, retaining html-code. If you don't need HTML,
     * then `buttonText` is preferred.
     *
     * @property rightButtonHTMLReleased
     * @type String
     * @since 0.0.1
    */
    rightButtonHTMLReleased: PropTypes.string,

    /**
     * The name-attribute of the right button
     *
     * @property name
     * @type String
     * @since 0.0.1
    */
    rightName: PropTypes.string,

    /**
     * Which button is pressed:
     *
     * 0 --> none
     * 1 --> left button
     * 2 --> right button
     *
     * @property state
     * @type Object
     * @default 0
     * @since 2.0.0
    */
    state: PropTypes.number,

    /**
     * If the state can be reset tu `undefined` in case an active button is clicked.
     * Defaults to `false` which means that it it trully toggleable.
     *
     * @property stateUndefinable
     * @type Boolean
     * @default false
     * @since 2.0.0
    */
    stateUndefinable: PropTypes.bool,

    /**
     * Inline style
     *
     * @property object
     * @type String
     * @since 0.0.1
    */
    style: PropTypes.object,

    /**
     * The tabIndex
     *
     * @property tabIndex
     * @type Number
     * @since 0.0.1
    */
    tabIndex: PropTypes.number
};

Component.defaultProps = {
    state: 0,
    stateUndefinable: false
};

module.exports = Component;
