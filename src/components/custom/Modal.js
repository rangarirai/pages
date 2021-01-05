/* eslint-disable */
import React from 'react';
import Modal from '@material-ui/core/Modal';

export default function SimpleModal(props) {
  return (
    <Modal
      open={props.data.open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {props.data.body}
    </Modal>
  );
}
