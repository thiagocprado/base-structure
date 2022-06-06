import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../index';
import { CustomModal, CustomModalHeader, CustomModalBody, CustomModalFooter } from './styles';

class ModalComponent extends Component {
  render() {
    //props
    const { toggle, title, text, cancel, confirm, onClickConfirm, onClickCancel, onHide } =
      this.props;

    //types
    const {} = this.props;

    return (
      <CustomModal show={toggle} size="lg" centered onHide={onHide}>
        <CustomModalHeader closeButton />
        <CustomModalBody>
          <h4>{title}</h4>
          {text ? <span>{text}</span> : ''}
        </CustomModalBody>
        <CustomModalFooter>
          {cancel && (
            <div className={'m-3'}>
              <Button underlineSec text={cancel} onClick={onClickCancel} />
            </div>
          )}
          {confirm && (
            <div className={'m-3'}>
              <Button underline text={confirm} onClick={onClickConfirm} />
            </div>
          )}
        </CustomModalFooter>
      </CustomModal>
    );
  }
}

ModalComponent.propTypes = {
  // props
  title: PropTypes.string,
  text: PropTypes.string,
  cancel: PropTypes.string,
  confirm: PropTypes.string,
  toggle: PropTypes.bool,
  onClickConfirm: PropTypes.func,
  onClickCancel: PropTypes.func,
  onHide: PropTypes.func,

  // types
};

export default ModalComponent;
