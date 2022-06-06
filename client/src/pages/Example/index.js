import React, { Component } from 'react';
import { Screen } from '../../components';
import { Row, Col } from 'react-bootstrap';
import { Input, Button } from '../../components';
import PropTypes from 'prop-types';
import exampleService from '../../services/example';

const { defaultStates, defaultModalOnHide } = require('../../utils/defaults');

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: {
        id: null,
        value: '',
      },
      ...defaultStates(),
    };

    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.delete = this.delete.bind(this);
    this.modalOnHide = this.modalOnHide.bind(this);
    this.body = this.body.bind(this);
    this.footer = this.footer.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      const response = await exampleService.get(id);
      if (response.ok && response.data && response.data.example) {
        this.setState({ newRegister: false, example: response.data.example });
      }
    }
  }

  handleChangeValue(id, event) {
    const { example } = this.state;
    example[id] = event.target.value;
    this.setState({ example });
  }

  async handleSubmit() {
    this.setState({ loadingState: true });

    const { newRegister, example } = this.state;

    if (newRegister) {
      const response = await exampleService.save(example);

      if (response.ok) {
        const modalState = {
          title: 'Sucesso',
          text: 'O cadastro foi realizado com sucesso',
          toggle: true,
          onHide: this.modalOnHide,
        };
        this.setState({ modalState });
      } else {
        const modalState = {
          title: 'Erro',
          text: response.message,
          toggle: true,
          onHide: this.modalOnHide,
        };
        this.setState({ modalState });
      }
    } else {
      const response = await exampleService.edit(example);

      if (response.ok) {
        const modalState = {
          title: 'Sucesso',
          text: 'A edição foi realizada com sucesso',
          toggle: true,
          onHide: this.modalOnHide,
        };
        this.setState({ modalState });
      } else {
        const modalState = {
          title: 'Erro',
          text: response.message,
          toggle: true,
          onHide: this.modalOnHide,
        };
        this.setState({ modalState });
      }
    }
    this.setState({ loadingState: false });
  }

  async delete() {
    const { id } = this.state.example;
    const response = await exampleService.remove(id);

    if (response.ok) {
      const modalState = {
        title: 'Sucesso',
        text: 'Remoção realizada com sucesso',
        toggle: true,
        onHide: this.modalOnHide,
      };
      this.setState({ modalState });
    } else {
      const modalState = {
        title: 'Erro',
        text: response.message,
        toggle: true,
        onHide: this.modalOnHide,
      };
      this.setState({ modalState });
    }
  }

  async handleDelete() {
    const { id } = this.state.example;
    if (id) {
      const modalState = {
        title: 'TEM CERTEZA QUE DESEJA EXCLUIR O REGISTRO?',
        text: 'Esta ação é irreversível.',
        confirm: 'Excluir registro',
        cancel: 'Cancelar',
        onClickConfirm: this.delete,
        onClickCancel: this.modalOnHide,
        onHide: this.modalOnHide,
        toggle: true,
      };
      this.setState({ modalState });
    }
  }

  modalOnHide() {
    defaultModalOnHide(this);
  }

  body() {
    const { value, password } = this.state.example;

    return (
      <>
        <Row className="text-center">
          <Col>
            <Input
              label={'Valor:'}
              placeholder={'Valor'}
              value={value}
              onChange={(e) => this.handleChangeValue('value', e)}
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Input
              disabled
              label={'Valor:'}
              placeholder={'Valor'}
              value={value}
              onChange={(e) => this.handleChangeValue('value', e)}
            />
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Input
              password
              label={'Senha:'}
              placeholder={'******'}
              value={value}
              onChange={(e) => this.handleChangeValue('password', e)}
            />
          </Col>
        </Row>
      </>
    );
  }

  footer() {
    const { newRegister } = this.state;

    if (newRegister) {
      return (
        <Row className="justify-content-center">
          <Col xs={'auto'}>
            <Button text={'Salvar'} onClick={this.handleSubmit}></Button>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="justify-content-center">
          <Col xs={'auto'}>
            <Button text={'Excluir'} onClick={this.handleDelete}></Button>
          </Col>
          <Col xs={'auto'}>
            <Button text={'Salvar alteração'} onClick={this.handleSubmit}></Button>
          </Col>
        </Row>
      );
    }
  }

  render() {
    const { modalState, loadingState } = this.state;

    return (
      <Screen
        body={this.body}
        footer={this.footer}
        modalState={modalState}
        loadingState={loadingState}
      />
    );
  }
}

Example.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default Example;
