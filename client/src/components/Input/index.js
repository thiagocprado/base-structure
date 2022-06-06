import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../index';
import { Input as InputComponent, Flex } from './style';

class Input extends Component {
  render() {
    //props
    const { placeholder, label, value = '', onChange, type = 'text', onKeyPress } = this.props;

    //types
    const { disabled, password } = this.props;

    if (disabled) {
      return (
        <Flex>
          {label && <Label text={label} />}
          <InputComponent
            disabled={true}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </Flex>
      );
    }

    if (password) {
      return (
        <Flex>
          {label && <Label text={label} />}
          <InputComponent
            placeholder={placeholder}
            value={value}
            type={'password'}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </Flex>
      );
    }

    return (
      <Flex>
        {label && <Label text={label} />}
        <InputComponent
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </Flex>
    );
  }
}

Input.propTypes = {
  //props
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  type: PropTypes.string,
  onKeyPress: PropTypes.func,

  //types
  disabled: PropTypes.bool,
  password: PropTypes.bool,
};

export default Input;
