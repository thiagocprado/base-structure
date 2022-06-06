import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SimpleButton } from './styles';

class Button extends Component {
  render() {
    // props
    const { text, onClick, disabled } = this.props;

    //types
    const {} = this.props;

    return (
      <SimpleButton disabled={disabled} onClick={onClick}>
        {text}
      </SimpleButton>
    );
  }
}

Button.propTypes = {
  // props
  text: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,

  // types
};

export default Button;
