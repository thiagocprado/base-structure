import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const CustomModal = styled(Modal)`
  text-align: center;
`;

export const CustomModalBody = styled(Modal.Body)`
  border: none;
  padding-top: 5px;
  max-height: 50vh;
  overflow-y: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;

export const CustomModalFooter = styled(Modal.Footer)`
  border: none;
  display: flex;
  justify-content: center;
`;

export const CustomModalHeader = styled(Modal.Header)`
  border: none;
`;
