import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class ModalRender extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
        <ModalBody>{this.props.body}</ModalBody>
        <ModalFooter>{this.props.footer}</ModalFooter>
      </Modal>
    );
  }
}
