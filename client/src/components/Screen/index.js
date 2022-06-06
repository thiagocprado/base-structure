import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ContainerBody, ContainerFooter, ContainerHeader } from './styles';
import { Modal, Loading } from '../index';

class Screen extends Component {
  render() {
    // props
    const { body, footer, modalState, loadingState } = this.props;

    //types
    const {} = this.props;

    return (
      <Container>
        <Loading loadingState={loadingState} />
        <Modal {...modalState} />
        <ContainerHeader />
        <ContainerBody>
          <div className={'container'}>{body ? body() : ''}</div>
        </ContainerBody>
        {footer && (
          <ContainerFooter>
            <div className={'container'}>{footer ? footer() : ''}</div>
          </ContainerFooter>
        )}
      </Container>
    );
  }
}

Screen.propTypes = {
  // props
  body: PropTypes.func.isRequired,
  footer: PropTypes.func,
  modalState: PropTypes.object,
  loadingState: PropTypes.bool,

  // types
};

export default Screen;
