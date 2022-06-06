import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label as LabelComponent } from './styles';

class Label extends Component {
  render() {
    // props
    const { text } = this.props;

    //types
    const {} = this.props;

    return <LabelComponent>{text}</LabelComponent>;
  }
}

Label.propTypes = {
  // props
  text: PropTypes.string,

  // types
  marginBottom: PropTypes.bool,
};

export default Label;
