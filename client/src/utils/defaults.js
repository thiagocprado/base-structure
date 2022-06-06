const axios = require('axios');
const jwt = require('jsonwebtoken');

exports.defaultStates = () => {
  const token = localStorage.getItem('token');
  const dataToken = token && jwt.decode(token);
  const decoded = dataToken ? dataToken.data && dataToken.data.user : '';

  return {
    newRegister: true,
    modalState: {
      title: null,
      text: null,
      toggle: false,
      onHide: null,
    },

    loadingState: false,
    userLogged: decoded,
  };
};

exports.defaultModalOnHide = (that) => {
  const { modalState } = that.state;
  modalState.toggle = false;
  that.setState(modalState);
};

exports.Header = (type) => {
  let headers = new Headers();
  const token = localStorage.getItem('token');
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token ? `Bearer ${token}` : undefined);

  return headers;
};

exports.axiosDefault = () => {
  const token = localStorage.getItem('token');
  const configs = {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      withCredentials: true,
    },
    withCredentials: true,
  };

  // configs.baseURL = this.baseURL();

  return axios.create(configs);
};

exports.baseURL = () => {
  if (process.env.REACT_APP_DEPLOYING_PRODUCTION === 'true') {
    return process.env.REACT_APP_PROD_SERVER_URL;
  } else if (process.env.REACT_APP_DEPLOYING_HOMOLOGATION === 'true') {
    return process.env.REACT_APP_HOMOLOG_SERVER_URL;
  }

  return window.location.origin;
};

exports.handleErrors = (error) => {
  if (error.response && error.response.data && error.response.data.log) {
    console.log('Erro:', error.response.data.log);
  }

  if (error.response && error.response.data && error.response.data.logout) {
    window.location.href = '/logout';
  }

  return (error.response && error.response.data) || { ok: false, message: 'Erro inesperado' };
};
